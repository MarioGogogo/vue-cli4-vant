<!--
 * @Author: MarioGo
 * @Date: 2021-06-03 10:08:31
 * @LastEditTime: 2021-09-26 15:16:54
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /vue-cli4-vant/src/views/Watermark/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div>
    <h1>测试水印</h1>
  </div>
</template>

<script>
import { removeWatermark, setWaterMark } from './watermark.js'
export default {
  name: "watermark",
  mounted () {
    setWaterMark('成龙', 'emp03', '香港娱乐天皇有限公司', '2020-09-10');
  },
  destroyed () {
    removeWatermark();
  },
}
</script>

<style lang="scss" scoped>
</style>