<!--
 * @Author: your name
 * @Date: 2020-11-13 00:34:57
 * @LastEditTime: 2021-11-09 16:16:11
 * @LastEditors: MarioGo
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli4-vant/src/views/Home.vue
-->
<template>
  <div class="home">
    <van-nav-bar title="Vue2.xDemo集合" :safe-area-inset-top="true" />
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <van-grid :column-num="3">
        <template>
          <van-grid-item
            v-for="item in modules"
            :key="item.val"
            :icon="randomIcons()"
            :text="item.text"
            dot
            @click="itemClick(item)"
          />
        </template>
      </van-grid>
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      modules: [
        { text: '简单长列表', val: 'easylonglist' },
        { text: '长列表', val: 'longlist' },
        { text: '拖拽', val: 'drag' },
        { text: '异步Promise', val: 'promise' },
        { text: '关于', val: 'about' },
        { text: '双向绑定vmodel', val: 'vmodal' },
        { text: 'vcomp', val: 'vcomp' },
        { text: '表格', val: 'ifrom' },
        { text: '找父兄弟组件', val: 'findcomp' },
        { text: '选框', val: 'checkbox' },
        { text: '弹框', val: 'alert' },
        { text: '表格', val: 'table' },
        { text: '作用域插槽', val: 'slotscope' },
        { text: '是否组件', val: 'iscomp' },
        { text: '树', val: 'tree' },
        { text: '水印', val: 'watermark' },
        { text: 'wards', val: 'wards' },
        { text: '强制更新周期', val: 'forcUpdate' },
        { text: '动画', val: 'animation' },
        { text: '时间轴', val: 'timeline' },
        { text: '圆svg', val: 'svgcircle' },
        { text: 'canvas', val: 'canvas' },
        { text: '基础树', val: 'basetree' },
      ],
      active: 0,
      count: 0,
      isLoading: false,
      finished: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  methods: {
    randomIcons() {
      const icons = [
        'logistics',
        'bulb-o',
        'tv-o',
        'hot-sale-o',
        'photo-o',
        'fire-o',
        'shopping-cart-o',
        'comment-o',
        'gem-o',
        'gift-o',
        'point-gift-o',
        'bag-o',
        'gold-coin-o',
        'play-circle-o',
      ];
      const index = Math.floor(Math.random() * icons.length);
      return icons[index];
    },
    onRefresh() {
      this.$api.article
        .articleDetail('id', {
          api: 123,
        })
        .then((res) => {
          // 执行某些操作
          console.log('res :>> ', res);
        });
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    itemClick(item) {
      console.log('event :>> ', item);
      this.$router.push({
        path: `/v1.0/${item.val}`,
        query: {
          text: item.text,
          routerType: 'push',
        },
      });
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
