<template>
  <component :is="tagName" v-bind="tagProps">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "ibutton",
  props: {
    to: {
      type: String,
      default: ''
    },
    // 链接打开方式，如 _blank
    target: {
      type: String,
      default: '_self'
    }
  },
  computed: {
    //动态渲染不同的标签
    tagName () {
      return this.to === '' ? 'button' : 'a'
    },
    tagProps () {
      let props = {};
      if (this.to) {
        props = {
          target: this.target,
          href: this.to
        }
      }
      return props;
    }
  },
}
</script>

<style lang="scss" scoped>
</style>