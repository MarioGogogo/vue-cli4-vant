<template>
  <ul>
    <li v-for="book in books" :key="book.id">
      <slot :book="book">
        <!-- 默认内容 -->
        {{ book.name }}
      </slot>
    </li>
  </ul>
</template>

<script>

export default {
   props: {
     books: {
       type: Array,
       default(){
         return []
       }
     },
   },

}
</script>

<style lang="scss" scoped>
</style>