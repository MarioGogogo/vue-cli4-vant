<!--
 * @Author: MarioGo
 * @Date: 2021-08-20 15:08:33
 * @LastEditTime: 2021-08-23 16:21:13
 * @LastEditors: MarioGo
 * @Description: svg进度条滚动列表
 * @FilePath: /vue-cli4-vant/src/views/SvgCircle/svgcircle.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="svgcircle">
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <h2>公告栏文字停顿滚动</h2>
    <div class="textBox">
      <transition name="slide">
        <p class="text" :key="text.id">{{ text.val }}</p>
      </transition>
    </div>
    <h2>公告栏列表模式文字停顿滚动</h2>
    <div class="textBox2">
      <transition-group name="slide2">
        <p class="text2" :key="item.id" v-for="item in calllist">{{ item.text }}</p>
      </transition-group>
    </div>

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
            <tspan class="point">0</tspan>
            <tspan class="percent">%</tspan>
          </text>
        </svg>
        <div class="autoScorll">
          <van-list class="content-list" @scroll="handleScrollToTop" ref="ref_sroll">
            <van-cell class="list-item" :id="'item' + index" v-for="(item, index) in list" :key="item" :title="item" />
          </van-list>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "svgcircle",
  data () {
    return {
      show: false,
      list: [1],
      timer: null,
      scrollTopValue: 10,
      cirTimer: null,
      textArr: [
        '1 第一条公告',
        '2 第二条公告第二条公告',
        '3 第三条公告第三条公告第三条公告'
      ],
      number: 0,
      calllist: [{
        id: 0,
        text: "第一条公告"
      }, {
        id: 1,
        text: "第二条公告"
      }, {
        id: 2,
        text: "第三条公告"
      }, {
        id: 3,
        text: "第三条公告"
      }, {
        id: 4,
        text: "第四条公告"
      }, {
        id: 5,
        text: "第五条公告"
      }, {
        id: 6,
        text: "第六条公告"
      }]
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScrollToTop, true)
  },
  computed: {

    text () {
      return {
        id: this.number,
        val: this.textArr[this.number]
      }
    }
  },
  mounted () {
    this.startMove()

  },
  methods: {
    startMove () {
      debugger
      if(this.number === 0 ){
        console.log('object :>> ');
      }
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
    },
    handleScrollToTop ($event) {
      console.log('%c 🍝 e: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', $event.target.scrollTop);
    },
    showPopup () {
      this.show = true
      this.initCirle();
      let i = 1
      let _this = this
      this.timer = setInterval(() => {
        _this.$refs.ref_sroll.$el.scrollTop = 60 * i;
        if (i > 11) {
          return clearInterval(this.timer)
        }
        this.list.push(++i)
      }, 1000);
    },
    initCirle () {
      let _this = this
      let i = 0;
      this.cirTimer = setInterval(() => {
        i += Math.floor(Math.random() * 5);
        if (i > 100) {
          clearInterval(this.cirTimer)
          return
        }
        _this.setPercent(i);
      }, 250)
    },
    setPercent (num) {
      let progressLen = 668;
      const textDom = document.getElementsByClassName('point')[0];
      const circleDom = document.getElementsByClassName('circle')[0];
      circleDom.style['stroke-dashoffset'] = progressLen - (progressLen / 100) * num;
      textDom.innerHTML = num
    },
    setToInitPercent () {
      const textDom = document.getElementsByClassName('point')[0];
      const circleDom = document.getElementsByClassName('circle')[0];
      circleDom.style['stroke-dashoffset'] = 668
      textDom.innerHTML = 0;
    }

  },
  watch: {
    show (newVal) {
      if (newVal) {

      } else {
        //关闭弹窗
        if (this.cirTimer) {
          clearInterval(this.cirTimer)
        }
        clearInterval(this.timer)
        this.list = [1]
        this.setToInitPercent()
      }
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
  .autoScorll {
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    .content-list {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      .list-item {
        width: 100%;
        height: 50px;
        text-align: center;
      }
    }
  }
}
h2 {
  padding: 20px 0;
}
.textBox {
  width: 100%;
  height: 40px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.text {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s linear;
}
// 进入
.slide-enter {
  transform: translateY(20px) scale(1);
  opacity: 1;
}
// 离开
.slide-leave-to {
  transform: translateY(-20px) scale(0.8);
  opacity: 0;
}
svg {
  width: 300px;
  height: 300px;
}

.textBox2 {
  width: 100%;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  text-align: center;
  background: #7c83fd;
  overflow-y: scroll;
  color: #fff;
}
.text2 {
  height: 60px;
  line-height: 60px;
}
.slide2-enter-active,
.slide2-leave-active {
  transition: all 0.5s linear;
}
.slide2-enter-active,
.slide2-leave-active {
  transition: all 0.5s linear;
}
// 进入
.slide2-enter {
  transform: translateY(100px) scale(1);
  opacity: 1;
}
// 离开
.slide2-leave-to {
  transform: translateY(0px) scale(0.8);
  opacity: 0;
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

.point {
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