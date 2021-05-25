<template>
  <div>
    <h1>vue组件精讲</h1>
    <i-button size="large"></i-button>
    <i-button disabled></i-button>
    <h5>插槽 slot</h5>
    <i-button>
      <p>按钮1</p>
    </i-button>
    <i-button>
      <span slot="icon">具</span>
      <strong>按钮 2</strong>
    </i-button>
    <h5>自定义事件 event</h5>
    <i-button @on-click="handleClick"></i-button>
    <h5>组件通信 A->B -> C1/C2</h5>
    <com-a ref="comA"></com-a>
    <h5>$on 与 $emit</h5>
    <v-emit></v-emit>
  </div>
</template>

<script>
import IButton from './button.vue';
import ComA from './ComA.vue'
import VEmit from './VEmit.vue'
export default {
  name: "vcomp",
  components: {
    IButton,
    ComA,
    VEmit
  },
  methods: {
    handleClick () {
      alert('我监听button')
    }
  },
  mounted () {
    const comA = this.$refs.comA;
    // console.log(this.$children);
    console.log('%c 🍒 comA: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', comA.title);
    // comA.sayHello();  // 弹窗
  },
}
</script>

<style lang="scss" scoped>
</style>