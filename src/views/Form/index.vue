<template>
  <div>
    <h3>具有数据校验功能的表单组件——Form</h3>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
    </i-form>
    <button class="ok" @click="handleSubmit">提交</button>
    <button class="reset" @click="handleReset">重置</button>
  </div>
</template>

<script>
import iForm from './From.vue';
import iFormItem from './FromItem.vue';
import iInput from './FromInput.vue';
export default {
  components: { iForm, iFormItem, iInput },
  data () {
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    //需要通过 `ref` 来访问这个组件，调用它的一些内置方法
    handleSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          window.alert('提交成功');
        } else {
          window.alert('表单校验失败');
        }
      })
    },
    handleReset () {
      this.$refs.form.resetFields();
    }
  },
}
</script>


<style>
.ok{
  width: 60px;
  height: 40px;
  background: rgb(78, 39, 216);
}
.reset{
    width: 60px;
  height: 40px;
  background: yellowgreen;
}
</style>