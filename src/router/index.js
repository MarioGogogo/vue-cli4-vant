/*
 * @Author: your name
 * @Date: 2020-11-13 21:43:50
 * @LastEditTime: 2020-12-22 14:53:36
 * @LastEditors: Maroi
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "drag" */ "../views/Login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "drag" */ "../views/Home.vue"),
    meta: {
      index: 0,
    },
  },
  {
    path: "/message",
    name: "Message",
    component: () =>
      import(/* webpackChunkName: "drag" */ "../views/Message.vue"),
    meta: {
      index: 0,
    },
  },
  {
    path: "/setting",
    name: "Setting",
    component: () =>
      import(/* webpackChunkName: "drag" */ "../views/Setting.vue"),
    meta: {
      index: 0,
    },
  },
  {
    path: "/v1.0",
    name: "v",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Child.vue"),
    children: [
      {
        path: "drag",
        name: "Drag",
        component: () =>
          import(/* webpackChunkName: "drag" */ "../views/Drag.vue"),
        meta: {
          index: 1,
        },
      },
      {
        path: "promise",
        name: "Promise",
        component: () =>
          import(/* webpackChunkName: "promise" */ "../views/Promise.vue"),
        meta: {
          index: 1,
        },
      },
      {
        path: "about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "promise" */ "../views/About.vue"),
        meta: {
          index: 1,
        },
      },
      {
        path: "vmodal",
        name: "VModal",
        component: () =>
          import(/* webpackChunkName: "vmodal" */ "../views/vmodal.vue"),
        meta: {
          index: 1,
        },
      },
    ],
  },
  {
    path: "/*",
    name: "Home",
    component: () => import(/* webpackChunkName: "drag" */ "../views/Home.vue"),
    meta: {
      index: 0,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
