<!--
 * @Author: MarioGo
 * @Date: 2021-11-08 13:32:47
 * @LastEditTime: 2021-11-08 14:35:55
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /vue-cli4-vant/src/views/LongList/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="long-list">
		<virtual-list :size="120" :keeps="8" :arrayData="list" :variable="true">
			<template #default="{ item }">
				<div style="border: 1px solid cadetblue; padding: 20px;">
					{{ item.id}}. {{ item.value }}
				</div>
			</template>
		</virtual-list>
  </div>
</template>

<script>
import VirtualList from './VirtualList.vue'
import Mock from 'mockjs'
const list = []
for (let i = 0; i < 1000; i++) {
	list.push({
		id: i,
		value: Mock.Random.cparagraph( 3, 10 )
	})
}
export default {
  name: 'longList',
  components: {
    VirtualList
  },
	data() {
		return { list }
	}
}
</script>

<style lang="less">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.long-list{
   margin-top: 46px;
}
</style>