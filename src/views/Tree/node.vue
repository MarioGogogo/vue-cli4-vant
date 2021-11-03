<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <span v-if="data.children && data.children.length && !data.expand">+</span>
        <span v-if="data.children && data.children.length && data.expand">-</span>
      </span>
      <i-checkbox v-if="showCheckbox" :value="data.checked" @input="handleCheck"></i-checkbox>
      <span>{{ data.title }}</span>
      <!-- 这里会递归 -->
      <template v-if="data.expand">
        <tree-node
          v-for="(item, index) in data.children"
          :key="index"
          :data="item"
          :show-checkbox="showCheckbox"
        ></tree-node>
      </template>
    </li>
  </ul>
</template>

<script>
import ICheckbox from '../CheckBox/checkbox.vue';
import { findComponentUpward } from '../../util/assist';
export default {
  name: 'TreeNode',
  components: { ICheckbox },
  props: {
    data: {
      type: Object,
      default () {
        return {};
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tree: findComponentUpward(this, 'Tree')
    }
  },
  methods: {
    //展开
    handleExpand () {
      // this.data.expand = !this.data.expand
      this.$set(this.data, 'expand', !this.data.expand)
      //触发父级中的方法
      if (this.tree) {
        this.tree.emitEvent('on-toggle-expand', this.data)
      }
    },
    /*
    * 1 选中一个节点 下面所有子节点递归 修改说有 checked
      2. 无法通过当前节点数据，修改到它的父节点
    */
    handleCheck (checked) {

       this.updateTreeDown(this.data,checked)
    },
    updateTreeDown(data,checked){
      console.log('%c 🥖 data: ', 'font-size:20px;background-color: #F5CE50;color:#fff;',checked, data);
        this.$set(data,'checked',checked)

        if(data.children && data.children.length){
           data.children.forEach(item => {
              this.updateTreeDown(item,checked)
           })
        }

    }
  },
  watch: {
    'data.children':{
       deep:true,
       handler(data){
          if(data){
            const checkedAll = !data.some(item => !item.checked)
            this.$set(this.data,'checked',checkedAll)
          }
       }
    }
  },
}
</script>

<style>
.tree-ul,
.tree-li {
  list-style: none;
  padding-left: 10px;
}
.tree-expand {
  cursor: pointer;
}
</style>
