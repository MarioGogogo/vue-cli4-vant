<!--
 * @Author: your name
 * @Date: 2020-11-13 00:14:17
 * @LastEditTime: 2020-12-21 21:43:43
 * @LastEditors: Maroi
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/App.vue
-->
<template>
  <div id="app">
    <!-- 页面切换动画transitionName -->
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
    <van-tabbar route class="tab" v-show="$route.meta.index === 0">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/message" icon="comment-o">消息</van-tabbar-item>
      <van-tabbar-item to="/setting" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      transitionName: "",
      active: 0,
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route (to, from) {
      console.log("to=" + to.meta.index, "from=" + from.meta.index)
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > 0 || to.meta.index === 0 && from.meta.index !== 0) {
        if (to.meta.index < from.meta.index) {
          this.transitionName = "slide-right";
        } else {
          this.transitionName = "slide-left";
        }
      } else if (to.meta.index == 0 && from.meta.index == 0) {
        this.transitionName = "";
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.view {
  width: 100%;
  position: absolute;
}

/********页面切换动画 *********/
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  /* will-change属性可以提前通知浏览器我们要对元素做什么动画，这样浏览器可以提前准备合适的优化设置 */
  will-change: transform;
  transition: all ease 0.4s;
  -webkit-transition: all ease 0.4s;
  position: absolute;
  width: 100%;
  left: 0;
}
.slide-right-enter {
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
}
.slide-right-leave-active {
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
}
.slide-left-enter {
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
}
.slide-left-leave-active {
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
}
/********页面切换动画 *********/

.tab {
  z-index: 999;
}
</style>
