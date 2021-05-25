<template>
  <div>
       <label v-if="label">{{label}}</label>
       <div>
          <slot></slot>
       </div>
  </div>
</template>

<script>
  export default {
     name:"iFromItem",
     props:{
       label:{
         type:String,
         default:""
       },
       prop:{
         type:String
       }
     }
  }
</script>

<style lang="scss" scoped>

</style>