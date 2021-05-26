<template>
  <label>
    <span>
      <input class="v-input" type="checkbox" :disabled="disabled" :checked="currentValue" @change="change" />
    </span>
  </label>
</template>

<script>
export default {
  name: 'iCheckbox22222',
  props: {
    disabled: {
      type: Boolean,
      default: false
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
  data() {
    return {
      currentValue: this.value
    }
  },
  methods: {
    change(event) {
      if(this.disabled) return this.false;
      const checked = event.target.checked;
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue

      this.$emit('input',value)
      this.$emit('on-change',value)
    },
    updateModal(){
      this.currentValue = this.value === this.trueValue
    }
  },
  watch: {
    value(val) {
      if(val === this.trueValue || val === this.falseValue){
          this.updateModal()
      }else{
        throw 'Value should be trueValue or falseValue.';
      }
    }
  },
}
</script>

<style lang="less" scoped>
.v-input{
   border: 1px solid;
   width: 30px;
   height: 30px;
}
</style>