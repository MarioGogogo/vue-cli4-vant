<!--
 * @Author: MarioGo
 * @Date: 2021-08-20 15:08:33
 * @LastEditTime: 2021-08-20 17:25:38
 * @LastEditors: MarioGo
 * @Description: svg进度条滚动列表
 * @FilePath: /vue-cli4-vant/src/views/SvgCircle/svgcircle.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="svgcircle">
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '90%' }"
      closeable
      close-icon-position="top-right"
    >
      <div class="content">
        <svg>
          <circle class="circle" cx="150" cy="150" r="100" fill="none"></circle>
          <text x="150" y="160" fill="#6b778c" text-anchor="middle">
            <tspan class="text">0</tspan>
            <tspan class="percent">%</tspan>
          </text>
        </svg>
        <van-list class="content-list" @scroll="handleScrollToTop" ref="ref_sroll">
          <van-cell class="list-item" v-for="item in list" :key="item" :title="item" />
        </van-list>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "svgcircle",
  data () {
    return {
      show: true,
      list: [1],
      timer: null,
      scrollTopValue: 10,
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScrollToTop, true)
  },
  mounted () {
    this.initCirle();
    let i = 1
    let _this = this
    this.timer = setInterval(() => {
      if (i > 11) {
        return clearInterval(this.timer)
      }
      if (i > 5) {
        console.log('自动滚动 :>> ', _this.$refs.ref_sroll);
        // _this.handleScrollToTop()
        _this.$refs.ref_sroll.scrollTop = this.scrollTopValue += 10
        // _this.handleScrollToTop()
      }
      this.list.push(++i)
    }, 1000);
  },
  methods: {
    handleScrollToTop ($event) {
      console.log('%c 🍝 e: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', $event.target);
      // $event.target.scrollTop = this.scrollTopValue
    },
    showPopup () {
      this.show = true
    },
    initCirle () {
      let _this = this
      let i = 0;
      setInterval(() => {
        i += Math.floor(Math.random() * 5);
        if (i >= 100) i = 100;
        _this.setPercent(i);
      }, 250)
    },
    setPercent (num) {
      let progressLen = 668;
      const textDom = document.getElementsByClassName('text')[0];
      const circleDom = document.getElementsByClassName('circle')[0];
      if (num > 100) return;
      circleDom.style['stroke-dashoffset'] = progressLen - (progressLen / 100) * num;
      textDom.innerHTML = num;
    }
  },
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content-list {
    width: 100%;
    height: 300px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .list-item {
      width: 100%;
      height: 50px;
      text-align: center;
    }
  }
}
svg {
  width: 300px;
  height: 300px;
}
.circle {
  fill: none;
  stroke: #7c83fd;
  stroke-width: 16;
  stroke-dasharray: 668;
  stroke-dashoffset: 668;
  stroke-linecap: round;
  transition: all 1s;
  transform: rotate(-90deg);
  transform-origin: center;
  transform-box: fill-box;
}
.text {
  font-size: 30px;
}
.percent {
  font-size: 20px;
}
@keyframes circle {
  100% {
    stroke-dashoffset: 0;
  }
}
</style>