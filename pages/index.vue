<template>
  <div >   
    <Slider></Slider>
    <Experiencia></Experiencia>
    <LineasProductos></LineasProductos>
  </div>
</template>

<script>
 
import Experiencia          from "@/components/home/experiencias";
import LineasProductos      from "@/components/home/lineasProductos/lineasProductos";
import Slider               from "@/components/home/slider/Slider";
 
export default {
  layout:'layoutBalquimia',
  name: 'index',
  components: {
    Experiencia,
    LineasProductos,
    Slider,
    
  },

  

 
};
</script>

<style>
#toasts {
  display: none;
}
</style>
