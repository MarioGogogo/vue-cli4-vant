<template>
  <div class="pulldown">
    <div class="pulldown-bswrapper" ref="bsWrapper">
      <div class="pulldown-scroller">
        <div class="pulldown-wrapper">
          <div v-show="beforePullDown">
            <span>下拉加载</span>
          </div>
          <div v-show="!beforePullDown">
            <div v-show="isPullingDown">
              <span>加载中...</span>
            </div>
            <div v-show="!isPullingDown">
              <span>刷新成功</span>
            </div>
          </div>
        </div>
        <ul class="pulldown-list">
          <li :key="i" class="pulldown-list-item" v-for="i of dataList">{{ `I am item ${i} ` }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'

BScroll.use(PullDown)

function generateData () {
  const BASE = 30
  const begin = BASE * STEP
  const end = BASE * (STEP + 1)
  let ret = []
  for (let i = end; i > begin; i--) {
    ret.push(i)
  }
  return ret
}

const TIME_BOUNCE = 800
const REQUEST_TIME = 1000
const THRESHOLD = 70
const STOP = 56
let STEP = 0

export default {
  data () {
    return {
      beforePullDown: true,
      isPullingDown: false,
      dataList: generateData()
    }
  },
  mounted () {
    this.initBscroll()
  },
  methods: {
    initBscroll () {
      this.bscroll = new BScroll(this.$refs.bsWrapper, {
        scrollY: true,
        bounceTime: TIME_BOUNCE,
        useTransition: false,
        pullDownRefresh: {
          threshold: THRESHOLD,
          stop: STOP
        }
      })

      this.bscroll.on('pullingDown', this.pullingDownHandler)
      this.bscroll.on('scroll', this.scrollHandler)
      this.bscroll.on('scrollEnd', e => {
        console.log('scrollEnd')
      })
    },
    scrollHandler (pos) {
      console.log(pos.y)
    },
    async pullingDownHandler () {
      console.log('trigger pullDown')
      this.beforePullDown = false
      this.isPullingDown = true
      STEP += 1

      await this.requestData()

      this.isPullingDown = false
      this.finishPullDown()
    },
    async finishPullDown () {
      this.bscroll.finishPullDown()
      setTimeout(() => {
        this.beforePullDown = true
        this.bscroll.refresh()
      }, TIME_BOUNCE + 100)
    },
    async requestData () {
      try {
        const newData = await this.ajaxGet(/* url */)
        this.dataList = newData.concat(this.dataList)
      } catch (err) {
        // handle err
        console.log(err)
      }
    },
    ajaxGet (/* url */) {
      return new Promise(resolve => {
        setTimeout(() => {
          const dataList = generateData()
          resolve(dataList)
        }, REQUEST_TIME)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.pulldown {
  height: 100%;
}

.pulldown-bswrapper {
  position: relative;
  height: 100%;
  padding: 0 10px;
  border: 1px solid #ccc;
  overflow: hidden;
}

.pulldown-list {
  padding: 0;
}

.pulldown-list-item {
  padding: 10px 0;
  list-style: none;
  border-bottom: 1px solid #ccc;
}

.pulldown-wrapper {
  position: absolute;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transform: translateY(-100%) translateZ(0);
  text-align: center;
  color: '#999';
}
</style>