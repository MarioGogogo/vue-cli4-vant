<template>
  <div>
      组件A
     <com-b></com-b>
  </div>
</template>

<script>
  import {findComponentDownward} from '../../util/assist'
  import ComB from './ComB.vue';
  export default {
    name:"componentA",
    components: {
      ComB,
    },
    data () {
      return {
        name: 'jack'
      }
    },
    mounted () {
      const children = findComponentDownward(this,'componentB');
      console.log('%c 🥡 children: ', 'font-size:20px;background-color: #B03734;color:#fff;', children.key);
      
    },
    methods: {
      sayHello() {
         console.log('hello vue.js')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>