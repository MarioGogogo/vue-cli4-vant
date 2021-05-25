<template>
  <div>
    <span>{{ title }}</span>
      <com-b></com-b>
  </div>
</template>

<script>
import ComB from './ComB.vue'
export default {
  provide () {
    return {
      app: this
    }
  },
  components: {
    ComB,
  },
  data () {
    return {
      title: 'A组件',
      userInfo: null
    }
  },
  mounted () {
    this.getUserInfo();
  },
  methods: {
    getUserInfo () {
      setTimeout(() => {
        this.userInfo = {
          id: "jack",
          sex: "man",
          age: Math.random(100)*100
        }
      }, 1500);

    },
    sayHello () {
      window.alert('Hello')
    }
  },
}
</script>

<style lang="scss" scoped>
</style>