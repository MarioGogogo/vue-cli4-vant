<template>
  <div>
    <label v-if="label" :class="{ 'i-form-item-label-required': isRequired }">{{ label }}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
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
      isRequired: false,  // 是否为必填
      validateState: '',  // 校验状态
      validateMessage: '',  // 校验不通过时的提示信息
    }
  },
  mounted () {
    // 如果没有传入 prop，则无需校验，也就无需缓存
    //bug:这里注意 不是 this.props
    console.log('%c 🥜 this.prop: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', this.prop);
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this);
      // 设置初始值，以便在重置时恢复默认值
      this.initialValue = this.fieldValue;
      this.setRules();
    };
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy () {
    this.dispatch('iForm', 'on-form-item-remove', this);
  },
  computed: {
    // 从 Form 的 model 中动态得到当前表单组件的数据
    fieldValue () {
      return this.form.model[this.prop];
    }
  },
  methods: {
    setRules () {
      let rules = this.getRules();
      if (rules.length) {
        rules.every((rule) => {
          // 如果当前校验规则中有必填项，则标记出来
          this.isRequired = rule.required;
        });
      }

      //注册了 blur  change事件
      this.$on('on-form-blur', this.onFieldBlur);
      this.$on('on-form-change', this.onFieldChange);
    },
    // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
    getRules () {
      let formRules = this.form.rules;

      formRules = formRules ? formRules[this.prop] : [];

      return [].concat(formRules || []);
    },
    // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
    getFilteredRule (trigger) {
      const rules = this.getRules();
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
    },
    /**
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validate (trigger, callback = function () { }) {
      let rules = this.getFilteredRule(trigger)

      if (!rules || rules.length === 0) return true

      // 设置状态为校验中
      this.validateState = 'validating'
      console.log('%c 🍩 rules: ', 'font-size:20px;background-color: #42b983;color:#fff;', rules);
      //调用方法 async-validator 库
      let des = {}
      des[this.prop] = rules
      const validator = new AsyncValidator(des)

      let model = {}
      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error';
        this.validateMessage = errors ? errors[0].message : '';

        callback(this.validateMessage);
      });

    },
    onFieldBlur () {
      this.validate('blur');
    },
    onFieldChange () {
      this.validate('change');
    },
    // 重置数据
    resetField () {
      this.validateState = '';
      this.validateMessage = '';
      this.form.model[this.prop] = this.initialValue;
    },

  },
}
</script>

<style lang="less" scoped>
  .i-form-item-label-required:before {
    content: '*';
    color: red;
  }
  .i-form-item-message {
    color: red;
  }
</style>