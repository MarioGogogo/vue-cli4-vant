<template>
  <div>
    <tree-node
      v-for="(v,vInd) in treeData"
      :key=vInd
      :data="v"
      @on-check-change="handleCheckChange"
    >
    </tree-node>
    <br>
    <van-button @click="getSelectData">获取选中的名称</van-button>
    <p>{{ selectContent }}</p>
  </div>
</template>

<script>
import {treeData, roomData} from '@/views/BaseTree/data';
import TreeNode from '@/views/BaseTree/treeNode';

export default {
  name: 'basetree',
  components: {
    TreeNode,
  },
  data() {
    return {
      treeData: roomData,
      selectContent: '',
    };
  },
  methods: {
    handleCheckChange() {
      console.log('选中234234234');
    },
    emitEvent(eventName, data) {
      // this.$emit(eventName, data, this.treeData);
    },
    getSelectData() {
      console.log('this.treeData', this.treeData);
      let arr = [];
      this.treeData.forEach(item => {
        if (item.child) {
          item.child.forEach(v => {
            if (v.checked) {
              arr.push(v.name);
            }
          });
        }
      });
      console.log('选中数据', arr);
      this.selectContent = arr;
    },
  },

};
</script>

<style scoped>

</style>
