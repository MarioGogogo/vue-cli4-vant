/*
 * @Descripttion: 
 * @Author: Mario
 * @Date: 2020-12-15 17:17:33
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-15 17:18:09
 */
import copy from './copy'
import longpress from './longpress'
// 自定义指令
const directives = {
  copy,
  longpress,
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}