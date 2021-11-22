<!--
 * @Author: MarioGo
 * @Date: 2021-11-09 17:15:59
 * @LastEditTime: 2021-11-09 17:30:10
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /vue-cli4-vant/src/views/EasyLongList/Item.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div>{{ index }} - {{ source.uid }}- {{ source.text }}</div>
</template>

<script>
  export default {
    name: 'item-component',
    props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>