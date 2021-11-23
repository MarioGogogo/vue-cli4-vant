<!--
 * @Author: your name
 * @Date: 2020-11-06 22:37:03
 * @LastEditTime: 2021-11-23 11:44:59
 * @LastEditors: MarioGo
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli4-vant/src/views/About.vue
-->
<template>
  <div class="about">关于模块---{{ msgid }}</div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msgid: '',
    };
  },
  mounted() {
    console.log('%c 🥝 AboUT-mounted: ', 'font-size:20px;background-color: #93C0A4;color:#fff;');
    const { msgid } = this.$route.query;
    this.msgid = msgid;
    this.getID();
    setTimeout(() => {
      window.location.href = 'http://localhost:8088/#/v1.0/about?text=%E5%85%B3%E4%BA%8E&routerType=push&msgid=110';
    }, 3000);
  },
   updated () {
     console.log('%c 🌶 AboUT-updated: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', this.$route.query.msgid);
   },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getID() {
      console.log('%c 🥗 getID: ', 'font-size:20px;background-color: #7F2B82;color:#fff;');
    },
  },
  watch: {
    $route() {
      // this.msgid = this.$route.query.msgid;
    },
    msgid() {
      // this.getID();
    },
  },
};
</script>

<style>
.about .van-nav-bar {
  background: #3498db;
}
.van-nav-bar .van-nav-bar__content .van-nav-bar__title {
  color: #ecf0f1;
}
</style>
