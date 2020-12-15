<!--
 * @Descripttion: 
 * @Author: Mario
 * @Date: 2020-12-15 17:19:18
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-15 17:25:47
-->
<template>
  <button v-longpress="longpress">长按</button>
</template>

<script>
export default {
   name:"Longpress",
  methods: {
    longpress () {
      alert('长按指令生效')
    }
  }
}
</script>
