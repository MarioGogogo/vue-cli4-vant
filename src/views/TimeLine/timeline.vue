<!--
 * @Author: MarioGo
 * @Date: 2021-08-20 11:25:19
 * @LastEditTime: 2021-08-23 10:18:07
 * @LastEditors: MarioGo
 * @Description: 时间线组件
 * @FilePath: /vue-cli4-vant/src/views/TimeLine/timeline.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="timeline">
    <div class="timeline-empty-container" v-if="timeLineData.length > 0">
      <div class="nodata-info">暂无相关内容</div>
    </div>
    <section class="timeline-container">
      <div class="timeline-container-item" v-for="(item, index) in 10" :key="index">
        <div class="timeline-container-item-img" :class="[index === 0 ? 'tcic-picture' : 'tcic-movie']"></div>
        <div class="timeline-container-item-content">
          <div>用户4，工单结束</div>
          <div class="tcic-date">2018-05-22 14:33:58</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "timeline",
  data () {
    return {
      timeLineData: []
    }
  },
}
</script>

<style lang="less" scoped>
.timeline-empty-container {
  text-align: center;
  padding: 30% 0;
  background-color: #f5f5f5;
  overflow: hidden;
  height: 100%;
  position: fixed;
  width: 100%;
  .nodata-info {
    color: #c7c3c2;
  }
}
.timeline-container {
  .timeline-container-item {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    .timeline-container-item-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-top: 10px;
      // box-shadow: 0 0 0 5px #ddeefe;
      &.tcic-picture {
        background: #60b3fc;
        margin-left: 18px;
        margin-top: 15px;
        animation: wave 2s linear infinite;
      }
      &.tcic-movie {
        background: #60b2fb;
        left: 21px;
        width: 10px;
        height: 10px;
        box-shadow: none;
        top: 7px;
      }
    }
    .timeline-container-item-content {
      margin-left: 50px;
      padding-left: 0;
      div:first-child {
        color: #6db6fe;
        font-size: 14px;
        line-height: 25px;
      }
      div:last-child {
        line-height: 18px;
      }
      div.tcic-date {
        float: left;
        padding: 0.4em 0;
        color: #a3a3a3;
      }
    }
    &:last-child {
      .tcic-movie {
        top: 8px;
      }
    }
    &:last-child:before {
      height: 0px;
    }
    &::before {
      content: '';
      position: absolute;
      height: 67px;
      width: 1px;
      background: #c3e3ff;
      left: 25.5px;
      bottom: -28px;
    }
  }
}

@keyframes wave {
  0%,100% {
    box-shadow: 0 0 0 0 #ddeefe, 0 0 0 0 #ddeefe;
  }
  50% {
    box-shadow: 0 0 0 5px #ddeefe, 0 0 0 5px #ddeefe;
  }
}
</style>