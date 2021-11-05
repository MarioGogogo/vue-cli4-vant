<!--
 * @Author: your name
 * @Date: 2020-11-13 00:34:57
 * @LastEditTime: 2021-11-05 20:35:10
 * @LastEditors: MarioGo
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli4-vant/src/views/Home.vue
-->
<template>
  <div class="home">
    <van-nav-bar title="首页" :safe-area-inset-top="true" />
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <van-grid :column-num="3">
        <template>
          <van-grid-item
            v-for="value in modules"
            :key="value"
            :icon="randomIcons()"
            :text="value"
            dot
            @click="itemClick(value)"
          />
        </template>
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
      loading: true,
      modules: ['drag', 'promise', 'about', 'vmodal', 'vcomp', 'ifrom', 'findcomp', 'checkbox', 'alert', 'table', 'slotscope', 'iscomp', 'tree', 'watermark', 'wards', 'forcUpdate', 'animation', "timeline", "svgcircle", "basetree","longList"],
      active: 0,
      count: 0,
      isLoading: false,
      finished: false,
    };
  },
  mounted () {
    setTimeout(() => {
      this.loading = false;
    }, 2000)
  },
  methods: {
    randomIcons () {
      const icons = ['logistics', 'bulb-o', 'tv-o', 'hot-sale-o', 'photo-o', 'fire-o', 'shopping-cart-o', 'comment-o', 'gem-o', 'gift-o', 'point-gift-o', 'bag-o', 'gold-coin-o', 'play-circle-o']
      const index = Math.floor(Math.random() * icons.length)
      return icons[index]
    },
    onRefresh () {
      // this.$api.article.articleDetail('id', {
      //   api: 123
      // }).then(res => {
      //   // 执行某些操作
      //   console.log('res :>> ', res);
      // })
      // setTimeout(() => {
      //   this.isLoading = false;
      //   this.count++;
      // }, 1000);
    },
    itemClick (event) {
      console.log('event :>> ', event);
      this.$router.push({
        path: `/v1.0/${event}`,
        query: {
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
  background-color: white;
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

.home .van-pull-refresh {
  flex: 1;
}

.van-pull-refresh {
  height: 100%;
}
</style>
