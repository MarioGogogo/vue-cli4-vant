<template>
  <div>
    <h1>forcUpdate</h1>
    <p>{{userInfo.age ? userInfo.age : userInfo.name}}</p>
     <child-1 :age="userInfo.age || 0"></child-1>
     <van-button @click="handleUpdate">修改userInfo</van-button>
  </div>
</template>

<script>
import Child1 from '@/components/forceUpdate/Child1.vue'
export default {
  name: "forcUpdate",
  components:{
Child1
  },
  created () {
     console.log('created');;
  },
  mounted () {
    console.log('mounted');;
  },
  updated () {
   console.log('updated');;
  },
  data () {
    return {
      userInfo: { name: '小明' }
    }
  },
  methods: {
    handleUpdate () {
      this.userInfo.age = 10
      console.log(this.userInfo.age)
      this.$forceUpdate()
    }
  },
}
</script>

<style lang="scss" scoped>
</style>