<!--
 * @Descripttion: 
 * @Author: Mario
 * @Date: 2020-12-15 17:09:51
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-15 17:25:36
-->
<template>
  <button v-copy="copyText">复制</button>
</template>

<script>
  export default {
    name:"Copy",
    data() {
      return {
        copyText: 'a copy directives',
      }
    },
  }
</script>