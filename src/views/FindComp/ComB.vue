<template>
  <div>
     组件B
  </div>
</template>

<script>
  import {findComponentUpward} from '../../util/assist'
  export default {
      name: 'componentB',
      data() {
        return {
          key: "我是子组件"
        }
      },
      mounted () {
         const comA = findComponentUpward(this,'componentA');
         if(comA){
           console.log('%c 🍿 comA: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', comA.name);
           comA.sayHello();  // Hello, Vue.js
         }
      },
      methods: {
        getData() {
          //  获取子组件
          console.log('获取子组件');
        }
      },
  }
</script>

<style lang="scss" scoped>

</style>