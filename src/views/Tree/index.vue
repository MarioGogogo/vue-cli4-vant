<template>
  <div>
    <h3>实战 7：树形控件 —— Tree</h3>
    <Tree :data="data" show-checkbox @on-toggle-expand="handleToggleExpand" @on-check-change="handleCheckChange">
    </Tree>
  </div>
</template>
<script>
import Tree from './Tree.vue';
export default {
  components: { Tree },
  data () {
    return {
      data: [
        {
          title: 'parent 1',
          expand: false,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    //展开
    handleToggleExpand (data) {
      console.log(data);
    },
    //全选 / 反选
    handleCheckChange (data) {
      console.log(data);
    }
  }
}
</script>