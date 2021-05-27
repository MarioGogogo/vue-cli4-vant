import Notification from './notification.js';

let messageInstance;


// `getMessageInstance` 函数用来获取实例，它不会重复创建
function getMessageInstance(){
    messageInstance = messageInstance || Notification.newInstance()

    return messageInstance
}


function notice({duration=1.5,content=''}){
  let instance = getMessageInstance()

  instance.add({
     content,
     duration
  })

}



export default {
    info(options){
      return notice(options)
    }
}