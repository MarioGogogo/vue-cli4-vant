<template>
  <div :class="canvasIndex" class="canvas-item">
    <!-- 底部表盘 -->
    <canvas
      :width="options.width"
      :height="options.height"
      :style="[{ 'z-index': 1, 'background-color': options.background }]"
    >
    </canvas>
    <canvas :width="options.width" :height="options.height" :style="{ 'z-index': 2 }"> </canvas>
    <canvas :width="options.width" :height="options.height" :style="{ 'z-index': 3 }"> </canvas>
  </div>
</template>

<script>
export default {
  name: "canvasCard",
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    canvasIndex () {
      return 'canvas-card' + this.index;
    }
  },
  data () {
    return {
      options: {
        type: "pie",
        width: "50",
        height: "50",
        background: "#eee",
        data: [
          ['js', 60 / 720, '9:00-10:00', '#ff7676'],
          ['css3', 90 / 720, '9:00-10:30', '#ff7676'],
          ['html5', 50 / 720, '10:40-11:30', '#8e44ad'],
          ['php', 60 / 720, '11:30-12:30', '#2c3e50'],
          ['jquery', 240 / 720, '14:00-18:00', '#27ae60'],
          ['jquery1', 150 / 720, '18:30-21:00', '#2c3e50'],
        ],
      }
    }
  },
  mounted () {
    this.initData();
  },
  methods: {
    initData () {
      //画一个底层图
      const dom = this.canvasIndex;
      // 获取三个canvas元素
      var canvas_dom = document.querySelectorAll(`.${dom} canvas`);
      console.log('canvas :>> ', canvas_dom);
      const r = this.options.width / 2;

      var cxt = canvas_dom[0].getContext('2d');
      cxt.save();
      this.options.data.forEach((item, index) => {
        this.renderPie(cxt, item, index);
      });
      // 第二层
      //再加入一层
      var cxt2 = canvas_dom[1].getContext('2d');
      cxt2.save();
      //绘制内圈底表盘
      cxt2.beginPath();
      cxt2.fillStyle = '#eee';
      cxt2.strokeStyle = '#eee';
      cxt2.lineWidth = 1;
      cxt2.arc(r, r, 20, 0, 2 * Math.PI);
      cxt2.fill();
      cxt2.stroke();
      // 渲染数据层
      this.options.data.forEach((item, index) => {
        this.renderPie2(cxt2, item, index);
      });

      //再加入一层
      var cxt3 = canvas_dom[2].getContext('2d');
      //绘制内圈底表盘
      cxt3.beginPath();
      cxt3.fillStyle = '#eee';
      cxt3.strokeStyle = '#eee';
      cxt3.lineWidth = 1;
      cxt3.arc(r, r, 10, 0, 2 * Math.PI);
      cxt3.fill();
      cxt3.stroke();
    },
    renderPie (cxt, item, index) {
      var w = this.options.width;
      var h = this.options.height;
      const r = this.options.width / 2;
      //绘制数据盘
      //绘制一个外数据层
      var sAngel = 0 * Math.PI; //开始角度
      var eAngel = 0.5 * Math.PI; //结束角度  初始角度0
      var aAngel = Math.PI * 2; //圆结束的角度 2pi = 360
      cxt.beginPath();
      cxt.fillStyle = item[3];
      cxt.strokeStyle = item[3];
      cxt.lineWidth = 1;
      cxt.moveTo(r, r); //定义起始点
      let t_sAngel = this.formatRad(item[2]);
      let t_eAngel = this.formatERad(item[2], t_sAngel, index);
      cxt.arc(r, r, r - .5, Math.PI * t_sAngel, t_eAngel);
      cxt.fill();
      cxt.stroke();
    },
    renderPie2 (cxt2, item, index) {
      var w = this.options.width;
      var h = this.options.height;
      const r = this.options.width / 2;
      //绘制数据盘
      //绘制一个外数据层
      var sAngel = 0 * Math.PI; //开始角度
      var eAngel = 0.5 * Math.PI; //结束角度  初始角度0
      var aAngel = Math.PI * 2; //圆结束的角度 2pi = 360
      cxt2.beginPath();
      cxt2.fillStyle = item[3];
      cxt2.strokeStyle = item[3];
      cxt2.lineWidth = 1;
      cxt2.moveTo(r, r); //定义起始点
      let t_sAngel = this.formatRad(item[2]);
      let t_eAngel = this.formatERad(item[2], t_sAngel, index);
      //结束角度 = 起始角度 + 结束角度
      // eAngel = Math.PI * t_sAngel + aAngel * cfg.data[index][1];
      cxt2.arc(r, r, 16, Math.PI * t_sAngel, t_eAngel);
      cxt2.fill();
      cxt2.stroke();
    },
    formatERad (time, t_sAngel, index) {
      var aAngel = Math.PI * 2; //圆结束的角度 2pi = 360
      const arr = time.split('-');
      const s_h = arr[1].split(':')[0];
      const s_m = arr[1].split(':')[1];
      console.log(s_h, s_m);
      const mm = (+s_m / 60) * 0.1; //剩余分钟 百分比
      console.log('分钟:', mm);
      if (
        mm === 0 &&
        (+s_h === 12 || +s_h === 15 || +s_h === 18 || +s_h === 21)
      ) {
        switch (+s_h) {
          case 12:
            return 0.5 * Math.PI;
            break;
          case 15:
            return 1 * Math.PI;
            break;
          case 18:
            return 1.5 * Math.PI;
            break;
          case 21:
            return 2 * Math.PI;
            break;
        }
      } else {
        return Math.PI * t_sAngel + aAngel * this.options.data[index][1];
      }
    },
    // 时间转换成弧度
    formatRad (time) {
      const res = {};
      const arr = time.split('-');
      const s = arr[0];
      const e = arr[1];
      console.log(s, e);
      const s_h = arr[0].split(':')[0];
      const s_m = arr[0].split(':')[1];
      console.log(s_h, s_m);
      const mm = (+s_m / 60) * 0.1; //剩余分钟 百分比
      console.log('分钟:', mm);
      switch (+s_h) {
        case 9:
          return (res.t_sAngel = 0 + mm);
          break;
        case 10:
          return (res.t_sAngel = 0.2 + mm);
          break;
        case 11:
          return (res.t_sAngel = 0.3 + mm);
          break;
        case 12:
          return (res.t_sAngel = 0.5 + mm);
          break;
        case 13:
          return (res.t_sAngel = 0.7 + mm);
          break;
        case 14:
          return (res.t_sAngel = 0.8 + mm);
          break;
        case 15:
          return (res.t_sAngel = 1 + mm);
        case 16:
          return (res.t_sAngel = 1.2 + mm);
        case 17:
          return (res.t_sAngel = 1.3 + mm);

        case 18:
          console.log('1.5 + mm', 1.5 + mm);
          return (res.t_sAngel = 1.5 + mm);
        case 19:
          return (res.t_sAngel = 1.7 + mm);

        case 20:
          return (res.t_sAngel = 1.8 + mm);
        case 21:
          return (res.t_sAngel = 2 + mm);
          break;
      }
    }
  }
}
</script>

<style  scoped>
.canvas-item {
  width: '100%';
  position: relative;
  width: 50px;
  height: 50px;
  transform: rotate(-180deg);
}
.canvas-item canvas {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>