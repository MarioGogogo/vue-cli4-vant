<!--
 * @Author: MarioGo
 * @Date: 2021-05-31 10:24:06
 * @LastEditTime: 2021-08-23 13:43:59
 * @LastEditors: MarioGo
 * @Description: 插槽demo
 * @FilePath: /vue-cli4-vant/src/views/SlotScope/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div>
    <h5>普通插槽</h5>

    <h5>作用域插槽</h5>
    <book-list :books="books">
      <template slot-scope="{ book }">
        <!-- 可以定制的样式的 -->
        <span :class="'book-title-' + book.sale" v-if="book.sale === '0'">限</span>
        <span :class="'book-title-' + book.sale" v-else-if="book.sale === '1'">免</span>
        {{ book.name }}
      </template>
    </book-list>
  </div>
</template>

<script>
import BookList from './booklist.vue'
export default {
  components: {
    BookList,

  },
  data () {
    return {
      books: [{ id: '001', sale: '0', name: "妻子的浪漫旅行" }, { id: '002', sale: '1', name: "跑男" }, { id: '003', sale: '2', name: "爸爸去哪儿" }]
    }
  },
}
</script>

<style lang="less" scoped>
.book-title-0 {
  background-color: red;
}
.book-title-1 {
  background-color: lawngreen;
}
</style>