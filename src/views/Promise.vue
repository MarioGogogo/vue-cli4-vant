<!--
 * @Author: your name
 * @Date: 2020-11-25 23:16:59
 * @LastEditTime: 2020-11-29 14:22:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/views/Promise.vue
-->
<template>
  <div class="promise">
    <van-tabs v-model="active" swipeable @click="onClickTabs">
      <van-tab v-for="index in 3" :title="'选项 ' + index" :key="index">
        <van-collapse
          v-model="activeName"
          accordion
          class="promise-content"
          @change="changeCollapse"
        >
          <van-collapse-item
            :title="item.title"
            :name="idx"
            v-for="(item, idx) in promiseList"
            :key="idx"
            >{{ item.body }}</van-collapse-item
          >
        </van-collapse>
      </van-tab>
    </van-tabs>

    <!-- <van-button
      :loading="isLoad"
      type="info"
      loading-text="加载中..."
      @click="onClick"
      >请求5秒按钮</van-button
    >
    <br />
    <van-button type="primary" @click="cancel">取消请求</van-button> -->
  </div>
</template>

<script>
import { cancellableDelayResolve } from "../utils/cancelPromise";
export default {
  name: "Promise",
  data() {
    return {
      isLoad: false,
      active: "0",
      activeName: "1",
      promiseList: [],
    };
  },
  mounted() {
    this.tabListData();
  },
  methods: {
    async tabListData(id = '1') {
      const res = await  this.$api.tabApi.tabList(id)
        console.log('this.promiseList :>> ', res.data);
        // 执行某些操作
        this.promiseList = res.data || [];
      
    },
    onClick() {
      //一个5秒返回的请求
      this.isLoad = true;
      cancellableDelayResolve(5000, this);
    },
    cancel() {
      this.isLoad = false;
    },
    changeCollapse(activeNames) {
      console.log("activeNames :>> ", activeNames);
    },
    onClickTabs(idx, title) {
      if(idx === 0){
        this.tabListData('1');
      }else if(idx === 1){
         this.tabListData('2');
      }else if(idx === 2){
        this.tabListData('3');
      }
    },
  },
};
</script>

<style>
.promise {
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  background: #f5f5f5;
}
.promise-content {
  margin-top: 20px;
}
</style>
