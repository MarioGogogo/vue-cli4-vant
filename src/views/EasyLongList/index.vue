<!--
 * @Author: MarioGo
 * @Date: 2021-11-09 16:13:37
 * @LastEditTime: 2021-11-10 09:08:50
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /vue-cli4-vant/src/views/EasyLongList/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="e-longlist">
    <virtual-list
      style="height: 100%; overflow-y: auto;"
      :data-key="'uid'"
      :data-sources="items"
      :estimate-size="50"
      :keeps="50"
      :item-class="'list-item-fixed'"
      :data-component="itemComponent"
    />
  </div>
</template>

<script>
import Item from './Item.vue';
import VirtualList from 'vue-virtual-scroll-list';
import Mock from 'mockjs'
const list = []
for (let i = 0; i < 1000; i++) {
	list.push({
		uid: Mock.mock('@natural(60, 100)'),
		text: Mock.Random.cparagraph( 1, 4 )
	})
}
export default {
  name: 'easylongList',
  data() {
    return {
      itemComponent: Item,
      items:list
    };
  },
  components: { 'virtual-list': VirtualList },
};
</script>

<style scoped>
.e-longlist {
  width: 100%;
  height: calc(100vh-42px);
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;
}
.list-item-fixed {
  display: flex;
  align-items: center;
  padding: 0 1em;
  height: 60px;
  border-bottom: 1px solid;
  border-color: lightgray;
}
</style>
