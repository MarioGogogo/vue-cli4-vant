<template>
  <div class="demo">
    <div class="cube show-default">
      <div class="cube-face is-front">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201406%2F27%2F20140627164916_BkFdE.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628043002&t=2b8766f35524af830aebe1199b8a52b4"
          alt="pic1"
        />
      </div>
      <div class="cube-face is-back">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201406%2F27%2F20140627164916_BkFdE.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628043002&t=2b8766f35524af830aebe1199b8a52b4"
          alt="pic2"
        />
      </div>
      <div class="cube-face is-right">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201406%2F27%2F20140627164916_BkFdE.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628043002&t=2b8766f35524af830aebe1199b8a52b4"
          alt="pic3"
        />
      </div>
      <div class="cube-face is-left">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201406%2F27%2F20140627164916_BkFdE.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628043002&t=2b8766f35524af830aebe1199b8a52b4"
          alt="pic4"
        />
      </div>
      <div class="cube-face is-top">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201406%2F27%2F20140627164916_BkFdE.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628043002&t=2b8766f35524af830aebe1199b8a52b4"
          alt="pic5"
        />
      </div>
      <div class="cube-face is-bottom">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201406%2F27%2F20140627164916_BkFdE.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628043002&t=2b8766f35524af830aebe1199b8a52b4"
          alt="pic6"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@cube-size: 200px;
@cube-radius:@cube-size /2;
.demo {
  width: @cube-size;
  height: @cube-size;
  perspective: 1000px;
  position: relative;
  margin: 30px auto;
  .cube {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    position: absolute;
    transition: transform ease 1s;
    &.show-default {
      transform: translateZ(-@cube-radius) rotateY(-15deg) rotateX(-15deg);
    }
    &.show-left {
      transform: translateZ(-@cube-radius) rotateY(90deg);
    }
    &-face {
      border: 2px solid #000;
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      opacity: 0.9;
      backface-visibility: visible;
      &.is-front {
        transform: translateZ(@cube-radius);
      }
      &.is-back {
        transform: rotateX(-180deg) translateZ(@cube-radius);
      }
      &.is-right {
        transform: rotateY(90deg) translateZ(@cube-radius);
      }
      &.is-left {
        transform: rotateY(-90deg) translateZ(@cube-radius);
      }
      &.is-top {
        transform: rotateX(90deg) translateZ(@cube-radius);
      }
      &.is-bottom {
        transform: rotateX(-90deg) translateZ(@cube-radius);
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>