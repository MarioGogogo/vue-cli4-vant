<template>
     <div class="vmodal">
          <h1>自定义modal</h1>
          <p class="vmodal-text">{{val}}</p>
          <custom-vmodal v-model="val"></custom-vmodal>
     </div>
</template>

<script>
import CustomVmodal from "@/components/vmodalChild.vue"
export default {
   name:"vmodal",
   components:{
     CustomVmodal
   },
   data(){
     return {
        val:"巴巴"
     }
   },
   mounted(){
     console.log('%c 🍝 vmodal-mounted: ', 'font-size:20px;background-color: #93C0A4;color:#fff;');
   }
}
</script>

<style lang="less" scoped>
.vmodal{
    &-text{
      font-size: 22px;
    }
}

</style>
