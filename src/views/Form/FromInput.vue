<template>
  <input type="text" class="v-input" :value="currentValue" @input="handleInput" @blur="handleBlur" />
</template>

<script>
import Emitter from '../../mixins/emitter.js';
export default {
  name: "vInput",
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    // 每当输入一个字符，都会调用句柄 `handleInput`
    handleInput (event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit('input', value);
      this.dispatch('iFormItem', 'on-form-change', value);
    },
    // 失去焦点
    handleBlur () {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue);
    }
  },
  watch: {
    value (val) {
      this.currentValue = val;
    }
  },
}
</script>

<style lang="less" scoped>
.v-input{
  border: 1px solid #999;
}
</style>