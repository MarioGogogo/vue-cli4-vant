<!--
 * @Author: your name
 * @Date: 2020-11-13 00:34:57
 * @LastEditTime: 2020-12-22 14:45:05
 * @LastEditors: Maroi
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/views/Home.vue
-->
<template>
  <div class="home">
    <van-nav-bar title="首页" :safe-area-inset-top="true" />
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="value in modules"
          :key="value"
          icon="photo-o"
          :text="value"
          dot
          @click="itemClick(value)"
        />
      </van-grid>
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "home",
  data () {
    return {
      modules: ['drag', 'promise', 'about', 'vmodal', '文字3'],
      active: 0,
      count: 0,
      isLoading: false,
      finished: false,
      curHeight: 571, //当前所需屏幕高度
    };
  },
  beforeCreate () {
    this.curHeight = 571
  },
  //获取屏幕高度
  beforeMount () {
    if (this.curHeight) return
    //   console.log("beforeMount", this.curHeight);
    // var h = document.documentElement.clientHeight || document.body.clientHeight;
    // this.curHeight = h - 46 -50; //减去页面上固定高度height
    // console.log("beforeMount -curHeight :>> ", this.curHeight);
  },
  methods: {
    onRefresh () {
      this.$api.article.articleDetail('id', {
        api: 123
      }).then(res => {
        // 执行某些操作   
        console.log('res :>> ', res);
      })
      // setTimeout(() => {
      //   this.isLoading = false;
      //   this.count++;
      // }, 1000);
    },
    itemClick (event) {
      console.log('event :>> ', event);
      this.$router.push({
        path: `/v1.0/${event}`,
        params: {
          routerType: 'push'
        }
      })
    },
  },
};
</script>

<style>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(226, 101, 101);
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.home .van-nav-bar {
  height: 50px;
  background: #3498db;
}
.van-nav-bar .van-nav-bar__content .van-nav-bar__title {
  color: #ecf0f1;
}
.home .van-pull-refresh{
  flex: 1;
}
.van-pull-refresh {
  height: 100%;
}
</style>
