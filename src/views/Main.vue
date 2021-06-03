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
export default {
  name: 'vmain',
  components: {
    // 异步组件引入方式, 异步组件：只有在需要去展示这个组件的时候，才会把组件去进行渲染。
    'home': () => import('@/views/Home.vue'),
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