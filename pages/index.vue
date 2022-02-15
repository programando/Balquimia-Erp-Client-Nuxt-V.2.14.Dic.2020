<template>
  <div >
    
    <Slider></Slider>

    <Experiencia></Experiencia>

   
    <LineasProductos></LineasProductos>

    <Diferenciadores></Diferenciadores>

    <ProductosDestacados></ProductosDestacados>

    <Clientes></Clientes>
 
     
  </div>
</template>

<script>
 
import Experiencia          from "@/components/home/experiencias";
import LineasProductos      from "@/components/home/lineasProductos/lineasProductos";
import Slider               from "@/components/home/slider/Slider";
import Diferenciadores      from "@/components/home/diferenciadores.vue";
import ProductosDestacados  from "@/components/home/productosDestacados/productosDestacados.vue";
import Clientes             from "@/components/home/clientesList.vue";
 
 
export default {
  layout:'layoutBalquimia',
  name: 'index',
  components: {
    Experiencia,
    LineasProductos,
    Slider,
    Diferenciadores,
    ProductosDestacados,
    Clientes

  },

  

 
};
</script>
