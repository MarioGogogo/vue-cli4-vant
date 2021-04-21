<!--
 * @Descripttion: 
 * @Author: Mario
 * @Date: 2020-12-22 14:54:21
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-22 14:54:21
-->
<!--
 * @Author: your name
 * @Date: 2020-11-27 23:05:26
 * @LastEditTime: 2020-11-28 16:44:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/views/Child.vue
-->
<template>
  <div class="child">
      <van-nav-bar title="子页面" left-arrow :safe-area-inset-top="true" @click-left="onClickLeft" />
      <router-view class="view"></router-view>
  </div>
</template>


<script>
export default {
    name:"Child",
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>


<style>
.child .van-nav-bar {
  background: #3498db;
}
.van-nav-bar .van-nav-bar__content .van-nav-bar__title {
  color: #ecf0f1;
}
.van-nav-bar .van-nav-bar__content .van-nav-bar__left i{
   color: #fff;
   font-size: 20px;
}
</style>
