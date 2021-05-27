<template>
  <div class="alert">
    <div class="alert-main" v-for="item in notices" :key="item.name">
      <div class="alert-content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
//全局变量
let seed = 0;
export default {
  data () {
    return {
      notices: []
      
    }
  },
  methods: {
    getUuid () {
      return 'alert_' + (seed++);
    },
    add (notice) {
      const name = this.getUuid()

      let _notice = Object.assign({
        name: name
      }, notice)

      this.notices.push(_notice)

      setTimeout(() => {
        this.remove(name)
      }, notice.duration * 1000);
     console.log('%c 🥐 notices: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', this.notices);
    },
    remove (name) {
      const notices = this.notices
      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1)
          break
        }
      }
    }
  },
}
</script>

<style>
.alert {
  position: fixed;
  width: 100%;
  top: 46px;
  left: 0;
  text-align: center;
  pointer-events: none;
  z-index: 999;
}
.alert-content {
  display: inline-block;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
}
</style>