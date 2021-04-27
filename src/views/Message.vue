<!--
 * @Author: your name
 * @Date: 2020-11-27 21:18:13
 * @LastEditTime: 2020-11-28 18:29:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/views/Message.vue
-->
<template>
  <div class="msg">
    <van-nav-bar title="消息" />
    <van-skeleton title avatar :row="3" :loading="loading">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </van-skeleton>
    <van-skeleton title avatar :row="3" :loading="loading">
         <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </van-skeleton>
    <van-skeleton title avatar :row="3" :loading="loading">
        <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </van-skeleton>
    <van-skeleton title avatar :row="3" :loading="loading">
       <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </van-skeleton>
    <van-skeleton title avatar :row="2" :loading="loading">
       <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </van-skeleton>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  },
};
</script>

<style>
.msg .van-nav-bar {
  background: #3498db;
}
.van-nav-bar .van-nav-bar__content .van-nav-bar__title {
  color: #ecf0f1;
}
</style>
