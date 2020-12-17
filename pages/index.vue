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

    <Marcas></Marcas>

    <Footer></Footer>

    
  </div>
</template>

<script>
    import Header         from "@/components/inicio/header/indexHeader";
    import Experiencia    from "@/components/inicio/experiencias/experiencias";
    import Industrias     from "@/components/inicio/industrias/industrias";
    import  Slider        from "@/components/inicio/slider/slider"
    import Diferenciadores from '@/components/inicio/diferenciadores/diferenciadores.vue';
    import ProductosDestacados from '@/components/inicio/productosDestacados/productosDestacados.vue';
    import Marcas from '@/components/inicio/marcas/marcas.vue';
    import Footer from '@/components/inicio/footer/footer.vue';
    export default {
       data: () => ({
 
       }),
      components: { Header, Slider,Experiencia,Industrias,Diferenciadores,ProductosDestacados, Marcas, Footer },
  
    };

</script>
