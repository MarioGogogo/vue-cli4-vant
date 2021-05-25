<template>
  <div>
    <span>B组件</span>
    {{ app.userInfo }}
    <i-button @on-click="changeUserInfo"><span>改变信息</span></i-button>
  </div>
</template>

<script>
import IButton from './button.vue';
export default {
  inject: ['app'],
  components: {
    IButton,
  },
  mounted () {
    console.log('app->', app.userInfo);
  },
  methods: {
    changeUserInfo () {
      setTimeout(() => {
        // 直接通过 this.app 就可以调用 app.vue 里的方法
        this.app.getUserInfo();
      }, 1500);
    }
  },
}
</script>

<style lang="scss" scoped>
</style>