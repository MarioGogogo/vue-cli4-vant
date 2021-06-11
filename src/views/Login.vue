<!--
 * @Author: your name
 * @Date: 2020-11-28 21:11:01
 * @LastEditTime: 2020-11-29 11:22:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/views/Login.vue
-->
<template>
  <div class="login">
    <van-row type="flex" justify="center" class="img">
      <van-col span="4"></van-col>
      <van-col span="4"></van-col>
    </van-row>
    <van-row type="flex" justify="center" class="line">
      <van-col span="3"></van-col>
      <van-col span="18">
        <van-cell-group>
          <van-field
            placeholder="请输入用户名"
            type="text"
            v-model="username"
            left-icon="manager"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            placeholder="请输入密码"
            type="password"
            v-model="password"
            left-icon="lock"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            placeholder="请选择酒店"
            disabled
            type="text"
            v-model="hotelidName"
            left-icon="lock"
            @click="showPopup"
          />
        </van-cell-group>
      </van-col>
      <van-col span="3"></van-col>
    </van-row>
    <van-row type="flex" justify="center" class="btns">
      <van-col span="3"></van-col>
      <van-col span="18">
        <van-button
          class="jumpBtn"
          type="primary"
          @click.native="handleClick"
          size="large"
          >登录</van-button
        >
      </van-col>
      <van-col span="3"></van-col>
    </van-row>
    <van-popup v-model="show" round position="bottom" :style="{ height: '40%' }">
      <van-area  :area-list="areaList"  :columns-num="1"  @cancel='cancel' @confirm="confirm"/>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      show: false,
      password: "",
      hotelidName:"",
      value2: "a",
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      areaList: {
        province_list: {
          100000: "西软集团酒店",
          110000: "西软一号店",
          120000: "西软二号店",
          130000: "西软三号店",
          140000: "西软四号店",
          150000: "西软五号店",
          160000: "西软六号店",
          170000: "西软七号店",
          180000: "西软八号店",
          190000: "西软九号店",
          200000: "西软十号店",
        },
      },
    };
  },
  methods: {
    handleClick() {
      this.$router.push({
        path:"home"
      })
    },
    showPopup() {
      this.show = true;
    },
    cancel(){
      this.show = false;
    },
    confirm(value){
      console.log('value :>> ', value); //【code: "120000"，name: "天津市"】
      this.hotelidName = value[0].name
      this.show = false;
    }
  },
};
</script>

<style>
.img {
  margin-top: 50px;
}
.line {
  margin-top: 120px;
}
</style>
