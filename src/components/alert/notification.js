import Alert from './alert.vue'
import Vue from 'vue'


// alert.vue不是js对象文件 但是会被wepack编译render函数 最终生成一个js对象 就可以扩展 newInstance属性
Alert.newInstance = properties =>{
   const props = properties || {}

   const Instance = new Vue({
        data:props,
        render(h){
          return h(Alert,{props})
        }
   })

   const component =  Instance.$mount();
  //  $mount 挂载到 body 节点下
   document.body.appendChild(component.$el)

   const alert = Instance.$children[0]

   return {
      add(noticeProps){
         alert.add(noticeProps)
      },
      remove(name){
        alert.remove(name)
      }
   }


}


export default Alert
