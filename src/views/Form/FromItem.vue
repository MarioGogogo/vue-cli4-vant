<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator';
import Emitter from '../../mixins/emitter.js';
export default {
  name: "iFormItem",
  inject: ['form'],
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      validateState: '',  // 校验状态
      validateMessage: '',  // 校验不通过时的提示信息
    }
  },
  mounted () {
    if (this.props) {
      this.dispatch('iForm', 'on-form-item-add', this);
       this.setRules();
    };
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy () {
    this.dispatch('iForm', 'on-form-item-remove', this);
  },
  methods: {
    setRules () {
      this.$on('on-form-blur', this.onFieldBlur);
      this.$on('on-form-change', this.onFieldChange);
    },
    /**
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validate (trigger, callback = function () { }) {
      console.log('%c 🍰 trigger: ', 'font-size:20px;background-color: #465975;color:#fff;', trigger);
    },
    onFieldBlur () {
      console.log('22222');
      this.validate('blur');
    },
    onFieldChange () {
      this.validate('change');
    }
  },
}
</script>

<style lang="scss" scoped>
</style>