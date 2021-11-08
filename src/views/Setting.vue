<!--
 * @Descripttion: 
 * @Author: Mario
 * @Date: 2020-12-22 14:55:45
 * @LastEditors: MarioGo
 * @LastEditTime: 2021-11-05 23:14:12
-->
<template>
  <div class="set">
    <van-nav-bar title="设置" />
    <van-cell-group class="add-margin">
      <van-cell title="我的钱包" is-link />
      <van-cell title="我的文章" is-link />
      <van-cell title="访问统计" is-link />
      <van-cell title="我的推广码" @click="handleScan">
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
    <van-button type="primary" block @click="handleLogin">登 录</van-button>
    <br />
    <van-button type="primary" block @click="handleLogOut">注 销</van-button>
    <input type="file" accept="image/*" capture="camera" />
    <input type="file" accept="video/*" capture="camcorder" />
    <input type="file" accept="audio/*" capture="microphone" />
  </div>
</template>

<script>
export default {
  name: "setting",
  data () {
    return {
      checked: true,
    };
  },
  mounted () {

  },
  methods: {
    handleScan () {
      uni.authorize({
        scope: 'scope.camera',
        success () {
          uni.chooseImage({
            count: 6, //默认9
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album'], //从相册选择
            success: function (res) {
              console.log(JSON.stringify(res.tempFilePaths));
            }
          });
        }
      })
    },
    handleLogOut () {
      uni.navigateBack();
      // uni.reLaunch({
      //    url: '../login/login?id=1'
      // })
    },
    handleLogin () {
      this.$router.push({
        path: 'log'
      })
    }
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
.add-margin {
  margin-bottom: 20px;
}
</style>
