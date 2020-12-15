/*
 * @Descripttion: 
 * @Author: Mario
 * @Date: 2020-12-15 10:53:17
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-15 17:20:37
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页', keepAlive: false }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { title: '其他', keepAlive: false }
  },
  {
    path: '/direct/copy',
    name: 'copy',
    component: () => import('../components/directives/copy.vue'),
    meta: { title: 'copy', keepAlive: false }
  },
  {
    path: '/direct/longpress',
    name: 'longpress',
    component: () => import('../components/directives/longpress.vue'),
    meta: { title: 'copy', keepAlive: false }
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
