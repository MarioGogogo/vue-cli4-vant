<template>
  <div class="list">
     <Button type="dangerous">按钮</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
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
