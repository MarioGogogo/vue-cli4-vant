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
    <!-- 头部 -->
    <van-nav-bar title="消息" />
    <!-- 内容 -->
    <div class="msg-content">
      <van-skeleton title avatar :row="3" :loading="loading">
        <van-swipe-cell>
          <van-card
            num="1"
            price="999.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
        <!-- <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" /> -->
      </van-skeleton>
      <van-skeleton title avatar :row="3" :loading="loading">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
      </van-skeleton>
      <van-skeleton title avatar :row="3" :loading="loading">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
      </van-skeleton>
      <van-skeleton title avatar :row="3" :loading="loading">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
      </van-skeleton>
      <van-skeleton title avatar :row="2" :loading="loading">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
      </van-skeleton>
    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  data () {
    return {
      loading: true,
    };
  },
  mounted () {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  },
};
</script>

<style>
.msg {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.msg .msg-content {
  flex: 1;
}
.msg .van-nav-bar {
  height: 50px;
  background: #3498db;
}
.van-nav-bar .van-nav-bar__content .van-nav-bar__title {
  color: #ecf0f1;
}
 .delete-button {
    height: 100%;
  }
</style>
