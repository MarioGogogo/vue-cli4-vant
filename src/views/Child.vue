<!--
 * @Author: your name
 * @Date: 2020-11-27 23:05:26
 * @LastEditTime: 2021-11-08 14:32:00
 * @LastEditors: MarioGo
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli4-vant/src/views/Child.vue
-->
<template>
  <div class="child">
    <van-nav-bar title="子页面" left-arrow :safe-area-inset-top="true" @click-left="onClickLeft"  fixed placeholder />
    <router-view class="view"></router-view>
  </div>
</template>


<script>
export default {
  name: "Child",
  data(){
    return {
      virtualTaskStack:[]
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>


<style>
.child {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
}
.child .van-nav-bar {
  background: #3498db;
}
.van-nav-bar .van-nav-bar__content .van-nav-bar__title {
  color: #ecf0f1;
}
.van-nav-bar .van-nav-bar__content .van-nav-bar__left i {
  color: #fff;
  font-size: 20px;
}
</style>