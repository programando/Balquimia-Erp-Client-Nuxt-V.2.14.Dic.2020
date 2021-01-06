<template>
  <div >
    <Header></Header>
      <!-- sliderss -->
      <Slider></Slider>

    <!-- aside -->
    <Experiencia></Experiencia>

    <!-- section -->
    <Industrias></Industrias>

    <Diferenciadores></Diferenciadores>
    
    <ProductosDestacados></ProductosDestacados>
    

    <Clientes></Clientes>

    <Footer></Footer>

    
  </div>
</template>

<script>
    import Header               from "@/components/home/header/indexHeader";
    import Experiencia          from "@/components/home/experiencias";
    import Industrias           from "@/components/home/industrias/industrias";
    import  Slider              from "@/components/home/slider/slider"
    import Diferenciadores      from '@/components/home/diferenciadores.vue';
    import ProductosDestacados  from '@/components/home/productosDestacados/productosDestacados.vue';
    import Clientes             from '@/components/home/clientesList.vue';
    import Footer               from '@/components/home/footer/footer.vue';
    export default {
       
    data: () => ({
 
       }),
      components: { Header, Slider,Experiencia,Industrias,Diferenciadores,ProductosDestacados, Clientes, Footer },
  
    };

</script>
