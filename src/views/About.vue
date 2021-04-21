<!--
 * @Author: your name
 * @Date: 2020-11-06 22:37:03
 * @LastEditTime: 2020-12-22 14:54:04
 * @LastEditors: Maroi
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/views/About.vue
-->
<template>
  <div class="about">
    关于模块
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.about .van-nav-bar {
  background: #3498db;
}
.van-nav-bar .van-nav-bar__content .van-nav-bar__title {
  color: #ecf0f1;
}
</style>
