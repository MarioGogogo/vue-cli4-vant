<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "iForm",
  provide() {
    return {
      form : this
    };
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data () {
    return {
      fields: []
    };
  },
  created () {
    this.$on('on-form-item-add', (field) => {
      // 组件渲染由内到外 在父组件收集缓存
      if (field) this.fields.push(field);
    });
    this.$on('on-form-item-remove', (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    });
  }
}
</script>

<style lang="scss" scoped>
</style>