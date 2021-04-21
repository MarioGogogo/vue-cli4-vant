<!--
 * @Descripttion: 
 * @Author: Mario
 * @Date: 2020-12-22 14:54:43
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-22 16:22:50
-->
<template>
  <div class="playground">
    <div>
      <h2>基础示例 basic</h2>
      <div class="des">用户可以在多个界面中同时操作同一个数据源</div>
      <div class="color-show">
        <div
          v-for="color in colors"
          v-dragging="{ list: colors, item: color, group: 'color' }"
          class="color-box"
          :style="{ 'background-color': color.text }"
          :key="color.text"
        >
          {{ color.text }}
        </div>
      </div>
      <div class="color-list">
        <div
          class="color-item"
          v-for="color in colors"
          v-dragging="{ list: colors, item: color, group: 'color' }"
          :key="color.text"
        >
          {{ color.text }}
        </div>
      </div>
      <button @click="test">change colors</button>
    </div>
    <div class="other-group">
      <h2>页面中另一个组 other group</h2>
      <div class="des">页面中可以同时存在多个排序组，用group属性来区分</div>
      <div class="color-show">
        <div
          v-for="color in colors2"
          v-dragging="{ list: colors2, item: color, group: 'color2' }"
          class="color-box"
          :style="{ 'background-color': color.text }"
          :key="color.text"
        >
          {{ color.text }}
        </div>
      </div>
    </div>
    <div class="multi-group">
      <h2>多选排序 Multi Select</h2>
      <div class="des">可以选中多个元素同时进行拖拽排序</div>
      <div class="color-show">
        <div
          v-for="color in colors3"
          v-dragging="{ list: colors3, item: color, group: 'color3', comb: 'isComb' }"
          @click="color.isComb = !color.isComb"
          class="color-box"
          :style="{ 'background-color': color.text }"
          :key="color.text"
        >
          <div>{{ color.text }}</div>
          <div class="multi-group-btn">{{ color.isComb ? '√' : '' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Darg',
  data() {
    return {
      colors: [
        { text: 'Aquamarine' },
        { text: 'Hotpink' },
        { text: 'Gold' },
        { text: 'Crimson' },
        { text: 'Blueviolet' },
        { text: 'Lightblue' },
        { text: 'Cornflowerblue' },
        { text: 'Skyblue' },
      ],
      colors2: [
        { text: 'Aquamarine' },
        { text: 'Hotpink' },
        { text: 'Gold' },
        { text: 'Crimson' },
        { text: 'Blueviolet' },
        { text: 'Lightblue' },
      ],
      colors3: [
        { text: 'Aquamarine' },
        { text: 'Hotpink' },
        { text: 'Gold' },
        { text: 'Crimson' },
        { text: 'Blueviolet' },
        { text: 'Lightblue' },
        { text: 'Cornflowerblue' },
        { text: 'Skyblue' },
      ],
      colorShow: true,
    };
  },
  mounted() {
    this.$dragging.$on('dragged', ({ value }) => {
      console.log('每一个可拖拽的对象', value.item);
      console.log('可拖拽对象的数组', value.list);
      console.log('这是一个dragging list的unique key', value.otherData);
    });
    this.$dragging.$on('dragend', () => {
      console.log('结束');
    });
  },
  methods: {
    test: function() {
      this.colors = [
        { text: 'Aquamarine' },
        { text: 'Hotpink' },
        { text: 'Gold' },
        { text: 'Crimson' },
        { text: 'Blueviolet' },
        { text: 'Lightblue' },
        { text: 'Cornflowerblue' },
        { text: 'Skyblue' },
        { text: 'Burlywood' },
      ];
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}
.des {
  margin-bottom: 10px;
}
.playground {
  display: flex;
  margin-top: 4rem;
}
.color-item {
  background: #f5f5f5;
  padding: 0.5rem;
  color: #5f5f5f;
  transition: transform 0.3s;
}
.color-item.dragging {
  background-color: #fff;
}
.color-show {
  display: flex;
  flex-wrap: wrap;
  width: 30rem;
}
.color-box {
  width: 33%;
  height: 6rem;
  background: #efefef;
  line-height: 6rem;
  text-align: center;
  color: #fff;
  transition: transform 0.3s;
}
.color-box.dragging {
  transform: scale(1.1);
}
.other-group,
.multi-group {
  margin-left: 20px;
}
.multi-group .color-box {
  position: relative;
  box-sizing: border-box;
}
.multi-group .color-box:hover {
  border: 2px solid #fff;
}
.multi-group .color-box .multi-group-btn {
  position: absolute;
  left: 2px;
  top: 2px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #fff;
}
.in-out-translate-fade-enter-active,
.in-out-translate-fade-leave-active {
  transition: all 0.5s;
}
.in-out-translate-fade-enter,
.in-out-translate-fade-leave-active {
  opacity: 0;
}
.in-out-translate-fade-enter {
  transform: translate3d(100%, 0, 0);
}
.in-out-translate-fade-leave-active {
  transform: translate3d(-100%, 0, 0);
}
</style>
