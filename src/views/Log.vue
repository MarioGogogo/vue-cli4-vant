<template>
  <div class="login">
    <header>头部</header>
    <div class="content">
      <!-- <div class="box">占位</div> -->
      <p>{{ '是否安卓: ' + this.judgeDeviceType.isAndroid }}</p>
      <p>{{ '键盘状态: ' + this.keywordsStatus }}</p>
      <p>请输入用户名</p>
      <input type="text" />
      <p>请输入手机号(唤起数字键盘)</p>
      <input type="tel" novalidate="novalidate" pattern="[0-9]*" class="input" />
      <p>请输入密码</p>
      <input type="text" />
      <p>请再次输入密码</p>
      <input type="text" />
    </div>
    <footer>底部</footer>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "Log",
  data () {
    return {
      judgeDeviceType: {},
      keywordsStatus: ""
    }
  },
  mounted () {
    this.getJudgeDeviceType()
    const $inputs = document.querySelectorAll('input');
    console.log('$inputs', $inputs)
    for (var i = 0; i < $inputs.length; i++) {
      this.listenKeybord($inputs[i]);
    }
  },
  methods: {
    // 判断设备类型
    getJudgeDeviceType () {
      var ua = window.navigator.userAgent.toLocaleLowerCase();
      var isIOS = /iphone|ipad|ipod/.test(ua);
      var isAndroid = /android/.test(ua);
      this.judgeDeviceType = {
        isIOS: isIOS,
        isAndroid: isAndroid
      }
      console.log('%c 🍝 this.judgeDeviceType: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', this.judgeDeviceType);
    },
    listenKeybord ($input) {
      let _this = this
      if (this.judgeDeviceType.isIOS) {
        // IOS 键盘弹起：IOS 和 Android 输入框获取焦点键盘弹起
        $input.addEventListener('focus', function () {
          console.log('IOS 键盘弹起啦！');
          this.keywordsStatus = 'IOS 键盘弹起啦'
          // IOS 键盘弹起后操作
        }, false)

        // IOS 键盘收起：IOS 点击输入框以外区域或点击收起按钮，输入框都会失去焦点，键盘会收起，
        $input.addEventListener('blur', () => {
          console.log('IOS 键盘收起啦！');
          this.keywordsStatus = 'IOS 键盘收起啦！'
          // IOS 键盘收起后操作
        })
      }
      // Andriod 键盘收起：Andriod 键盘弹起或收起页面高度会发生变化，以此为依据获知键盘收起
      if (this.judgeDeviceType.isAndroid) {
        var originHeight = document.documentElement.clientHeight || document.body.clientHeight;
        window.addEventListener('resize', function () {
          var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
          if (originHeight < resizeHeight) {
            Toast('Android 键盘收起啦！');
            _this.keywordsStatus = 'Android 键盘收起啦！'
            // Android 键盘收起后操作
          } else {
            Toast('Android 键盘弹起啦！');
            _this.keywordsStatus = 'Android 键盘弹起啦'
            this.activeElementScrollIntoView($input, 1000);
            // Android 键盘弹起后操作
          }
          originHeight = resizeHeight;
        }, false)
      }
    },
    // 获取到焦点元素滚动到可视区
    activeElementScrollIntoView (activeElement, delay) {
      var editable = activeElement.getAttribute('contenteditable')
      // 输入框、textarea或富文本获取焦点后没有将该元素滚动到可视区
      if (activeElement.tagName == 'INPUT' || activeElement.tagName == 'TEXTAREA' || editable === '' || editable) {
        setTimeout(function () {
          activeElement.scrollIntoView();
        }, delay)
      }
    }
  },
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
header {
  height: 50px;
  background-color: #43b983;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  .box {
    height: 180px;
    line-height: 180px;
    text-align: center;
    background-color: skyblue;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
  }
  input {
    border: 1px solid;
    height: 40px;
  }
}
footer {
  height: 50px;
  background-color: #43b983;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
</style>