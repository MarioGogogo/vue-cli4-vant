<template>
  <div class="child">
    <span>子组件</span>
    <input type="text" :value="name" @input="$emit('change',$event.target.value)"/>
  </div>
</template>

<script>
export default {
  name: "vmodalChild",
  model:{
    prop:"name",
    event:"change"
  },
  props: {
      name: String,
      default(){
        return ''
      }
    
  }
}
</script>

<style>
</style>