<template>
  <div>
    <h5>slotscope</h5>
    <ul>
      <li v-for="book in books" :key="book.id">
        <slot :book="book">
          <!-- 默认内容 -->
          {{ book.name }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "slotscope",
  data() {
    return {
      books: [{id:"001",name:"一"},{id:"002",name:"二"}]
    }
  },
}
</script>

<style lang="sass" scoped>
</style>