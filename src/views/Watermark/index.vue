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
    setWaterMark('成龙', '香港娱乐天皇有限公司','2020-09-10');
  },
  destroyed () {
    removeWatermark();
  },
}
</script>

<style lang="scss" scoped>
</style>