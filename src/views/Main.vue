<template>
  <div class="main">
    <!-- 动态组件 -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <van-tabbar v-model="currentComponent">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="message" icon="search">消息</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'main',
  components: {
    // 异步组件引入方式, 异步组件：只有在需要去展示这个组件的时候，才会把组件去进行渲染。
    'home': () => import('@/views/Home.vue'),
    'message': () => import('@/views/Message.vue'),
    'setting': () => import('@/views/Setting.vue')
  },
  data () {
    return {
      currentComponent: 'home'
    }
  },
  methods: {
    // 组件切换
    onChangeFragment: function (componentName) {
      this.currentComponent = componentName
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