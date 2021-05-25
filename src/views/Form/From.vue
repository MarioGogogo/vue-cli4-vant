<template>
   <form>
       <slot></slot>
   </form>
</template>

<script>
  export default {
      name:"iForm",
      props:{
         model:{
            type:Object
         },
         rules:{
            type:Object
         }
      }
  }
</script>

<style lang="scss" scoped>

</style>