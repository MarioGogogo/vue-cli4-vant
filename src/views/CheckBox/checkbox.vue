
<template>
  <label>
    <span>
      <input v-if="group" type="checkbox" :disabled="disabled" :value="label" v-model="model" @change="change" />
      <input v-else type="checkbox" :disabled="disabled" :checked="currentValue" @change="change" />
    </span>
    <slot></slot>
  </label>
</template>

<script>
import { findComponentUpward } from '../../util/assist';
export default {
  name: 'iCheckbox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data () {
    return {
      model: [],
      group: false,
      parent: null,
      currentValue: this.value
    }
  },
  mounted () {
    //寻找父级组件是否有group
    this.parent = findComponentUpward(this, 'iCheckboxGroup');
    if (this.parent) {
      this.group = true;
    };
  },
  methods: {
    change (event) {
      if (this.disabled) return this.false;
      const checked = event.target.checked;
      this.currentValue = checked
      const value = checked ? this.trueValue : this.falseValue

      //如果是group数组 则在父级中change方法
      if (this.group) {
        console.log('%c 🍗 this.model: ', 'font-size:20px;background-color: #FCA650;color:#fff;', this.model);
        this.parent.change(this.model);
      } else {
        this.$emit('input', value)
        this.$emit('on-change', value)
      }

    },
    updateModal () {
      this.currentValue = this.value === this.trueValue
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModal()
      } else {
        throw 'Value should be trueValue or falseValue.';
      }
    }
  },
}
</script>

