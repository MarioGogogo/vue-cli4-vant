/*
 * @Author: your name
 * @Date: 2020-11-13 21:43:50
 * @LastEditTime: 2021-11-03 11:16:44
 * @LastEditors: MarioGo
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli4-vant/src/router/index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from "views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/log',
    name: 'log',
    component: () => import(/* webpackChunkName: "log" */ '../views/Log.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/v1.0',
    name: 'v',
    component: () => import(/* webpackChunkName: "child" */ '../views/Child.vue'),
    children: [
      {
        path: 'drag',
        name: 'drag',
        component: () => import(/* webpackChunkName: "drag" */ '../views/Drag.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'promise',
        name: 'promise',
        component: () => import(/* webpackChunkName: "promise" */ '../views/Promise.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "promise" */ '../views/About.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'vmodal',
        name: 'vmodal',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/vmodal.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'vcomp',
        name: 'vcomp',
        component: () => import(/* webpackChunkName: "vcomp" */ '../views/VComp/VComp.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'from',
        name: 'from',
        component: () => import(/* webpackChunkName: "from" */ '../views/Form/index.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'findcomp',
        name: 'componentA',
        component: () => import(/* webpackChunkName: "findcomp" */ '../views/FindComp/FindComp.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: () => import(/* webpackChunkName: "checkbox" */ '../views/CheckBox/index.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'alert',
        name: 'alert',
        component: () => import(/* webpackChunkName: "alert" */ '../views/Alert.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'table',
        name: 'table',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/table-render.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'slotscope',
        name: 'slotscope',
        component: () => import(/* webpackChunkName: "slotscope" */ '../views/SlotScope/index.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'iscomp',
        name: 'iscomp',
        component: () => import(/* webpackChunkName: "iscomp" */ '../views/isComp/isComp.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import(/* webpackChunkName: "tree" */ '../views/Tree/index.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'basetree',
        name: 'basetree',
        component: () => import(/* webpackChunkName: "basetree" */ '../views/BaseTree/index.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'watermark',
        name: 'watermark',
        component: () => import(/* webpackChunkName: "watermark" */ '../views/Watermark/index.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'wards',
        name: 'wards',
        component: () => import(/* webpackChunkName: "wards" */ '../views/Wards.vue'),
        meta: {
          index: 1,
        },
        children: [
          {
            path: '/:id',
            name: 'wardsDetail1',
            component: () => import(/* webpackChunkName: "wardsDetail1" */ '../views/WardsDetail.vue'),
          },
        ],
      },
      {
        path: 'wardsDetail',
        name: 'wardsDetail',
        component: () => import(/* webpackChunkName: "wardsDetail" */ '../views/WardsDetail.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'forcUpdate',
        name: 'forcUpdate',
        component: () => import(/* webpackChunkName: "forcUpdate" */ '../views/forcUpdate.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'animation',
        name: 'animation',
        component: () => import(/* webpackChunkName: "animation" */ '../views/Animation/animation.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'timeline',
        name: 'timeline',
        component: () => import(/* webpackChunkName: "timeline" */ '../views/TimeLine/timeline.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'svgcircle',
        name: 'svgcircle',
        component: () => import(/* webpackChunkName: "svgcircle" */ '../views/SvgCircle/svgcircle.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'canvas',
        name: 'canvas',
        component: () => import(/* webpackChunkName: "canvas" */ '../views/Canvas/index.vue'),
        meta: {
          index: 1,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
