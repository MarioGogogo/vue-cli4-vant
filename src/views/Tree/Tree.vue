<template>
  <div>
    <tree-node v-for="(item, index) in cloneData" :key="index" :data="item" :show-checkbox="showCheckbox"></tree-node>
  </div>
</template>
<script>
import TreeNode from './node.vue';
import { deepCopy } from '../../util/assist';

export default {
  name: 'Tree',
  components: { TreeNode },
  props: {
    data: {
      type: Array,
      default () {
        return [];
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cloneData: []
    }
  },
  created () {
    this.rebuildData();
    console.log('%c 🍟 created: ', 'font-size:20px;background-color: #FCA650;color:#fff;', this.cloneData);
  },
  watch: {
    data () {
      // 通过观察data变化触发
      console.log('通过观察data变化触发 ',this.data);
      this.rebuildData();
    }
  },
  methods: {
    emitEvent (eventName, data) {
      this.$emit(eventName, data, this.cloneData)
    },
    rebuildData () {
      this.cloneData = deepCopy(this.data);
    }
  }
}
</script>