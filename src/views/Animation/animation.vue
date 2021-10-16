<template>
  <div class="animation">
    <h1>3D动画</h1>
    <an3d />
    <h1>补间动画</h1>
    <h1>逐侦动画</h1>
  </div>
</template>

<script>
import an3d from './3D.vue';
export default {
  name: "animation",
  components: {
    an3d
  }
}
</script>

<style lang="scss" scoped>
</style>