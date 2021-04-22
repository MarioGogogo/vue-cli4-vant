<template>
     <div class="vmodal">
          <h1>自定义modal</h1>
          <p>{{val}}</p>
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
   }
}
</script>

<style>

</style>