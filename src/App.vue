<template>
  <div id="app">
    <transition :name="transitionName">
      <!-- 所有通过 router-view 加载的页面组件都会被缓存 -->
      <keep-alive :include="virtualTaskStack">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { Col } from 'vant';
import { removeWatermark, setWaterMark } from '../src/views/Watermark/watermark'
export default {
  name: 'App',
  data: function () {
    return {
      transitionName: '',
      // 虚拟任务栈
      virtualTaskStack: [
        'main'
      ]
    }
  },
  mounted () {
    // setWaterMark('成龙', '杭州西软信息科技有限公司','2020-09-10');
  },
  destroyed () {
    removeWatermark();
  },
  watch: {
    // 监听路由对象，决定使用哪种过渡效果
    '$route' (to, from) {
      // 获取到携带的标记
      const routerType = to.query.routerType
      if(routerType == undefined) return
      if (routerType === 'push') {
        // 当进入新页面的时候，保存新页面名称到虚拟任务栈
        this.virtualTaskStack.push(to.name)
        console.log('%c 🥠 to.name: ', 'font-size:20px;background-color: #465975;color:#fff;', this.virtualTaskStack);
        
        // 跳转页面
        this.transitionName = 'fold-left'
      } else {
        // 执行后退操作的时候，把最后一个页面从任务栈中弹出
        this.virtualTaskStack.pop()
        // 后退页面
        this.transitionName = 'fold-right'
      }
      /**
       * 初始化虚拟任务栈
       */
      if (to.query.clearTask) {
        this.virtualTaskStack = ['main']
      }
    }
  }
}
</script>

<style lang="less">
// @import '@css/style.scss';

#app {
  width: 100%;
  height: 100%;
  // push 页面时：新页面的进入动画
  .fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: 0.4s;
  }
  @keyframes fold-left-in {
    0% {
      transform: translate(100%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  // push 页面时：原页面的退出动画
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: 0.4s;
  }
  @keyframes fold-left-out {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
  // 后退页面时：即将展示页面的动画
  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: 0.4s;
  }
  @keyframes fold-right-in {
    0% {
      transform: translate(-100%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  // 后退页面时：后退的页面的动画
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: 0.4s;
  }
  @keyframes fold-right-out {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(100%, 0);
    }
  }
}
</style>