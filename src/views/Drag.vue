<template>
  <div class="color-list">
    <div
        class="color-item"
        v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
        :style="{background:color.text}"
        :key="color.text"
    >{{ color.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Darg",
  data() {
    return {
      colors: [{
        text: "Aquamarine"
      }, {
        text: "Hotpink"
      }, {
        text: "Gold"
      }, {
        text: "Crimson"
      }, {
        text: "Blueviolet"
      }, {
        text: "Lightblue"
      }, {
        text: "Cornflowerblue"
      }, {
        text: "Skyblue"
      }, {
        text: "Burlywood"
      }]
    }
  },
  mounted() {
    this.$dragging.$on("dragged", ({value}) => {
      console.log('每一个可拖拽的对象',value.item)
      console.log('可拖拽对象的数组',value.list)
      console.log('这是一个dragging list的unique key',value.otherData)
    })
    this.$dragging.$on('dragend', () => {
      console.log('结束')
    })
  }
}
</script>

<style scoped>
.color-list{
   overflow: hidden;
   height: 100%;
   padding-left: 20px;
   padding-right: 20px;
  background:#42b983;
  min-height: 500px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3,1fr);
}
.color-item{
   width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: 1px solid;

}
</style>