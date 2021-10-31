/*
 * @Author: MarioGo
 * @Date: 2021-05-31 10:14:36
 * @LastEditTime: 2021-10-29 23:37:02
 * @LastEditors: MarioGo
 * @Description: 入口文件
 * @FilePath: /vue-cli4-vant/src/main.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import './assets/css/common.css';
import './components/icon/index';

import Alert from '../src/components/alert/alert.js';

Vue.config.devtools = true
Vue.prototype.$Alert = Alert;

import './JS/plugin';
import './JS/FastClick';
import filters from './JS/filter';
import utils from './JS/utils';

Vue.use(utils);

// Vant按需引入
import { Grid, GridItem,Tabbar,NavBar, TabbarItem ,Toast,Col, Row,Field,Button,Popup,Area,PullRefresh,Skeleton,Card,Collapse, CollapseItem,Tab, Tabs,Divider,SwipeCell,Cell, CellGroup,Icon,Switch } from 'vant';
import 'vant/lib/index.css';
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Toast);
Vue.use(Col);
Vue.use(Row);
Vue.use(Field);
Vue.use(Button);
Vue.use(Popup);
Vue.use(Area);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(PullRefresh);
Vue.use(Skeleton);
Vue.use(Card);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Divider);
Vue.use(SwipeCell);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Switch);

import VueDND from 'awe-dnd';
// 导入拖拽组件
Vue.use(VueDND);

//全局注册指令
import Directives from './util/directives';
Vue.use(Directives);



// 全局axios封装
import $api from './util/http';
Vue.prototype.$api = $api;

// 注入全局过滤器
Object.keys(filters).forEach((item) => {
  Vue.filter(item, filters[item]);
});



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
Vue.config.productionTip = false;

export default new Vue({
  el: '#app',
  router,
  store,
  comments: true,
  render: (h) => h(App),
});
