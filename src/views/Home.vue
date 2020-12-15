<template>
  <div class="list">
    <div
      class="listItem"
      v-for="(item, index) in list"
      :key="index"
      @click="jumpToPage(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "Vue自定义指令-复制粘贴指令v-copy",page:"copy" },
        { name: "Vue自定义指令-长按指令 v-longpress" ,page:"longpress" },
        { name: "Vue自定义指令-输入框防抖指令 v-debounce" },
        { name: "Vue自定义指令-禁止表情及特殊字符 v-emoji" },
        { name: "Vue自定义指令-图片懒加载 v-LazyLoad" },
        { name: "Vue自定义指令-权限校验指令 v-premission" },
        { name: "Vue自定义指令-实现页面水印 v-waterMarker" },
        { name: "Vue自定义指令-拖拽指令 v-draggable" }
      ]
    };
  },
  methods:{
    jumpToPage(item){
       console.log('item :>> ', item.page);
       this.$router.push({
          path:`/direct/${item.page}`
       })

       
  }
}
}
</script>

<style scoped lang="less">
.list {
  height: 100%;
  width: 100%;
  .listItem {
    width: 100%;
    padding: 0 15px;
    height: 45px;
    line-height: 45px;
    position: relative;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }
}
</style>
