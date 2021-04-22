/*
 * @Descripttion: 
 * @Author: Mario
 * @Date: 2020-12-22 14:56:27
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-22 14:56:27
 */
/**
 * 取消promise
 */

class CancelToken{
  constructor(cancelFn){
      this.promise = new Promise((resolve,reject)=>{
          cancelFn(()=>{
              setTimeout(console.log,0,'delay cancelld');
              resolve()
          })
      })
  }
}

export const cancellableDelayResolve =(delay,content)=>{
   setTimeout(console.log,0,'set delay')
   return new Promise((resolve,reject)=>{
      const id = setTimeout(() => {
          setTimeout(console.log,0,'delayed,reslove');
          resolve()
      }, delay);

      const cancelToken = new CancelToken(cancelCallback =>
           //点击取消按钮事件 do fn
          content.cancel
      )
      cancelToken.promise.then(()=> clearTimeout(id))
   })
}
