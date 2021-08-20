/*
 * @Author: your name
 * @Date: 2020-11-13 21:43:50
 * @LastEditTime: 2021-08-20 11:25:04
 * @LastEditors: MarioGo
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli4-vant/src/router/index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue'),
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
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/VComp/VComp.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'from',
        name: 'from',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/Form/index.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'findcomp',
        name: 'componentA',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/FindComp/FindComp.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/CheckBox/index.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'alert',
        name: 'alert',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/Alert.vue'),
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
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/SlotScope/index.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'iscomp',
        name: 'iscomp',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/isComp/isComp.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/Tree/index.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'watermark',
        name: 'watermark',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/Watermark/index.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'wards',
        name: 'wards',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/Wards.vue'),
        meta: {
          index: 1,
        },
        children:[{
           path:"/:id",
           name: 'wardsDetail1',
           component: () => import(/* webpackChunkName: "vmodal" */ '../views/WardsDetail.vue'),
        }]
      },
      {
        path: 'wardsDetail',
        name: 'wardsDetail',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/WardsDetail.vue'),
        meta: {
          index: 1,
        },
      },
      {
        path: 'forcUpdate',
        name: 'forcUpdate',
        component: () => import(/* webpackChunkName: "vmodal" */ '../views/forcUpdate.vue'),
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
        component: () => import(/* webpackChunkName: "animation" */ '../views/TimeLine/timeline.vue'),
        meta: {
          index: 1,
        },
      },
    ],
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
