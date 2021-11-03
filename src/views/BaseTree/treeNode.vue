<template>
  <div class="tree-node">
    <div v-if="!data.child">
        <van-checkbox v-model="checked" @click="handleCheck" @change="onChange" shape="square">
          {{ data.name }}

        </van-checkbox>
    </div>
    <ul v-else>
      <li>
        <div class="header">
          <van-checkbox v-model="checked" @click="handleCheck" shape="square">
            {{ data.name }}
          </van-checkbox>
        </div>
        <div class="box">
          <tree-node
            v-for="(v,vInd) in data.child"
            :key=vInd
            :data="v"
          >
          </tree-node>
        </div>

      </li>
    </ul>
  </div>

</template>

<script>
import {findComponentsDownward, findComponentUpward} from '@/util/assist';

export default {
  name: "treeNode",
  props: {
    data: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      checked: false,
      tree: findComponentUpward(this, "treeNode")
    }
  },
  methods: {
    onChange(checked) {
      console.log("当绑定值变化时触发的事件", checked)
    },
    handleCheck() {
      //首先改变当前节点的 值
      console.log("选中", this.data.name, this.checked, this.tree)

      this.updateTreeDown(this.data, this.checked)
      //判断是否有子集则递归子集中的所有子值
      if (this.tree && this.tree.emitEvent) {
        this.tree.emitEvent('on-check-change', this.data);
      }
    },
    updateTreeDown(data, checked) {
      this.$set(data, 'checked', checked);
      console.log('是否有子节点', this.data, data.child)
      if (data.child && data.child.length) {
        data.child.forEach(item => {
          this.updateTreeDown(item, checked)
        })
      }
    }
  },
  watch: {
    'data.checked'(val) {
      this.checked = val;
      console.log('触发监听', val)
    },
// 这个节点的所有直属子节点（就是它的第一级子节点）都选中（或反选）时，这个节点就自动被选中（或反选）
    'data.child':
      {
        handler(data) {
          if (data) {
            console.log("深度检测", data);
            const checkedAll = !data.some(item => !item.checked);
            this.$set(this.data, 'checked', checkedAll);
          }
        }
        ,
        deep: true
      }
  }
}
</script>

<style type="less" scoped>
li .header{
   height: 40px;
  display: flex;
  padding-left: 16px;
  /*justify-content: center;*/
  align-content: center;
}
li .box  {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

li .box .tree-node {
  height: 40px;
  display: flex;
  align-items: center;
}


</style>
