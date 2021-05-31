import Vue from 'vue';

const AlertComponent = Vue.extend({
  template: '<div class="msg">{{ message }}</div>',
  data () {
    return {
      message: 'Hello, Aresn'
    };
  },
});

// 调用了 `$mount` 方法对组件进行了手动渲染 但它仅仅是被渲染好了，并没有挂载到节点上

// 创建 Profile 实例，并挂载到一个元素上。
new AlertComponent().$mount('#root')