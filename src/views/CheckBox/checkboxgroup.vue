<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../util/assist';
import Emitter from '../../mixins/emitter.js';
export default {
  name: "iCheckboxGroup",
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
  },
  data () {
    return {
      currentValue: this.value,
      childrens: []
    }
  },
  mounted () {
    this.updateModel(true);
  },
  methods: {
    updateModel (update) {
      this.childrens = findComponentsDownward(this, 'iCheckbox');
      
      if (this.childrens) {
        const { value } = this
        this.childrens.forEach(child => {
          child.model = value;

          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0;
            child.group = true;
          }
        });
      }
      console.log('%c 🍉  this.childrens: ', 'font-size:20px;background-color: #42b983;color:#fff;',  this.childrens);
    },
    change (data) {
      this.currentValue = data;
      this.$emit('input', data);
      this.$emit('on-change', data);
    }
  },
  watch: {
    value () {
      this.updateModel(true)
    }
  },
}
</script>