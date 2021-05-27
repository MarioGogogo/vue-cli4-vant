/*
 * @Descripttion: 
 * @Author: Mario
 * @Date: 2020-12-15 10:53:17
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-22 15:10:35
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/reset.css'
import './assets/css/common.css'
import './components/icon/index'

// import Dialog from './components/dialog'
// import Loading from './components/loading'
// import toast from './components/toast'

import Alert from '../src/components/alert/alert.js'

Vue.prototype.$Alert = Alert

import './JS/plugin'
import './JS/FastClick'
import filters from './JS/filter'
import utils from './JS/utils'
import VueScroller from 'vue-scroller'

import '../src/util/extend'


// Vant按需引入
// import { Grid, GridItem,Toast,Col, Row,Field,Button,Popup,Area } from 'vant';
// Vue.use(Grid);
// Vue.use(GridItem);
// Vue.use(Toast);
// Vue.use(Col);
// Vue.use(Row);
// Vue.use(Field);
// Vue.use(Button);
// Vue.use(Popup);
// Vue.use(Area);

import VueDND from 'awe-dnd'
// 导入拖拽组件
Vue.use(VueDND)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//全局注册指令
import Directives from './util/directives'
Vue.use(Directives)

Vue.use(VueScroller)
Vue.use(utils)

// Vue.prototype.$dialog = Dialog
// Vue.prototype.$loading = Loading
// Vue.prototype.$toast = toast
// Vue.prototype.$http = { get, post }

// 全局axios封装
import $api from './util/http'
Vue.prototype.$api = $api





// 注入全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})

Vue.config.productionTip = false

/*
 在路由首页进行判断。当to.meta.auth为true(需要登录)，且不存在登录信息缓存时，需要重定向去登录页面
*/
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   const userInfo = sessionStorage.getItem('userInfo') || null
//   if (!userInfo && to.meta.auth) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default new Vue({
  el: '#app',
  router,
  comments:true,
  render: h => h(App)
})
