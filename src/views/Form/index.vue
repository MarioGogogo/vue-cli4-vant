<template>
  <div>
    <h1>自定义from</h1>
    <i-from :modal="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
    </i-from>
  </div>
</template>

<script>
import iFrom from './From.vue';
import iFormItem from './FromItem.vue';
import iInput from './FromInput.vue';
export default {
  components: { iFrom, iFormItem, iInput },
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
}
</script>

<style lang="scss" scoped>
</style>