<template>
  <div class="button">
    <button :class="'i-button-'+size" :disabled="disabled" @click="handleClick">
       <slot name="icon"></slot>
       <slot>默认插槽提交</slot>
    </button>
  </div>
</template>

<script>
// 判断参数是否是其中之一
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
export default {
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('on-click', event);
    }
  },
}
</script>

<style lang="less" scoped>
.button {
  .i-button-large {
    background-color: bisque;
    width: 120px;
    height: 40px;
  }
  .i-button-default {
    background-color: saddlebrown;
    width: 100px;
    height: 20px;
  }
}
</style>