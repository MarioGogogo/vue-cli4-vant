<template>
  <div>
    <h5>未封装的buton</h5>
    <button @click="handleChange('A')">显示 A 组件</button>
    <button @click="handleChange('B')">显示 B 组件</button>
    <button @click="handleChange('C')">显示 C 组件</button>
    <p>这里做了缓存处理</p>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <hr />
    <h5>封装button 动态组件</h5>
    <i-button>普通按钮</i-button>
    <br />
    <i-button to="https://juejin.im">链接按钮</i-button>
    <br />
    <i-button to="https://juejin.im" target="_blank">新窗口打开链接按钮</i-button>
  </div>
</template>
<script>
import IButton from './IButton.vue'
import componentA from './a.vue';
import componentB from './b.vue';
import componentC from './c.vue';

export default {
  components: {
    IButton,
  },
  data () {
    return {
      component: componentA
    }
  },
  methods: {
    handleChange (component) {
      if (component === 'A') {
        this.component = componentA;
      } else if (component === 'B') {
        this.component = componentB;
      } else if (component === 'C') {
        this.component = componentC;
      }
    }
  }
}
</script>