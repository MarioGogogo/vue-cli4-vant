<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "iForm",
  provide () {
    return {
      form: this
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
      fields: []  //缓存每一个item实例
    };
  },
  created () {
    // from created触发比 item-mouted 早 所以在这里先监听事件
    this.$on('on-form-item-add', (field) => {
      // 组件渲染由内到外 在父组件收集缓存
      if (field) this.fields.push(field);
      console.log('%c 🍮 缓存实例fields: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', this.fields);

    });
    this.$on('on-form-item-remove', (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    });
  },
  methods: {
    // 公开方法：全部重置数据
    resetFields () {
      this.fields.forEach(field => {
        //运行每一个缓存实例的 重置方法
        field.resetField();
      });
    },
    //公开全部效验数据，支持promise
    validate (callback) {
      return new Promise(reslove => {
        let valid = true, count = 0;
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false;
            }
            if (++count === this.fields.length) {
              // 全部完成
              resolve(valid);
              if (typeof callback === 'function') {
                callback(valid);
              }
            }
          })
        })
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>