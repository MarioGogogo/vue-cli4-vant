<!--
 * @Descripttion: 
 * @Author: Mario
 * @Date: 2020-12-22 14:55:45
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-22 14:55:46
-->
<!--
 * @Author: your name
 * @Date: 2020-11-27 21:18:24
 * @LastEditTime: 2020-11-28 16:02:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/views/Setting.vue
-->
<template>
  <div class="set">
    <van-nav-bar title="设置" />
    <van-cell-group class="add-margin">
      <van-cell title="我的钱包" is-link />
      <van-cell title="我的文章" is-link />
      <van-cell title="访问统计" is-link />
      <van-cell title="我的推广码">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="scan" />
          <van-icon name="arrow" />
        </template>
      </van-cell>
      <van-cell title="我的推广码">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-switch v-model="checked" size="20px" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="add-margin">
      <van-cell title="设置" is-link />
      <van-cell title="意见反馈" is-link />
    </van-cell-group>
    <van-button type="primary" block>退出登录</van-button>
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {
      checked: true,
    };
  },
}
</script>


<style>
.set {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
.set .van-nav-bar {
  background: #3498db;
}
.van-nav-bar .van-nav-bar__content .van-nav-bar__title {
  color: #ecf0f1;
}
.add-margin{
   margin-bottom: 20px;
}
</style>
