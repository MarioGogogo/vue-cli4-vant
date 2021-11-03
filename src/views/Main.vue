<!--
 * @Author: MarioGo
 * @Date: 2021-06-10 20:10:19
 * @LastEditTime: 2021-10-31 22:05:00
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /vue-cli4-vant/src/views/Main.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="main">
    <!-- 动态组件 -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <van-tabbar v-model="currentComponent" fixed placeholder>
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="shopping" icon="shopping-cart-o" badge="99+">购物车</van-tabbar-item>
      <van-tabbar-item name="setting" icon="smile-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import home from '../views/Home.vue'
export default {
  name: 'vmain',
  components: {
    // 异步组件引入方式, 异步组件：只有在需要去展示这个组件的时候，才会把组件去进行渲染。
    // 'home': () => import('@/views/Home.vue'),
    home,
    'shopping': () => import('@/views/Message.vue'),
    'setting': () => import('@/views/Setting.vue')
  },
  data () {
    return {
      currentComponent: 'home'
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  position: absolute; //让每一个页面脱离文档流
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>