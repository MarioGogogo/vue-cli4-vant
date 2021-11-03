<!--
 * @Author: MarioGo
 * @Date: 2021-11-03 09:24:10
 * @LastEditTime: 2021-11-03 11:13:26
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /vue-cli4-vant/src/views/Canvas/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="canvas">
     <h1>canvas</h1>
     <br>
     <canvas-card 
     v-for="(item,index) in 2" 
     :key="item" 
     :index="index"
     />
  </div>
</template>

<script>
  import CanvasCard from './canvasCard.vue'
  export default {
    name:"canvas",
    components:{
      CanvasCard
    }
  }
</script>

<style  scoped>
.canvas{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>