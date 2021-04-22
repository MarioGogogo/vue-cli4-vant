/*
 * @Descripttion:
 * @Author: Mario
 * @Date: 2020-12-21 21:00:45
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-21 23:02:30
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/reset.css";
import "./assets/css/common.css";
import "./components/icon/index";

import Dialog from "./components/dialog";
import Loading from "./components/loading";
import toast from "./components/toast";

import "./JS/plugin";
import "./JS/FastClick";
import filters from "./JS/filter";
import utils from "./JS/utils";
import VueScroller from "vue-scroller";
// import { get, post } from "./JS/ajax";

// Vant按需引入
// import { Grid, GridItem, Toast, Tabbar, TabbarItem } from "vant";
// import "vant/lib/index.css";
// Vue.use(Grid);
// Vue.use(GridItem);
// Vue.use(Toast);
// Vue.use(Tabbar);
// Vue.use(TabbarItem);
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import $api from "./utils/http";
Vue.prototype.$api = $api;

import VueDND from "awe-dnd";
// 导入拖拽组件
Vue.use(VueDND);

//全局注册指令
import Directives from "./util/directives";
Vue.use(Directives);

Vue.use(VueScroller);
Vue.use(utils);

Vue.prototype.$dialog = Dialog;
Vue.prototype.$loading = Loading;
Vue.prototype.$toast = toast;
Vue.prototype.$http = { get, post };

// 注入全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item]);
});

Vue.config.productionTip = false;

/*
 在路由首页进行判断。当to.meta.auth为true(需要登录)，且不存在登录信息缓存时，需要重定向去登录页面
*/
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  const userInfo = sessionStorage.getItem("userInfo") || null;
  if (!userInfo && to.meta.auth) {
    next("/login");
  } else {
    next();
  }
});

export default new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
