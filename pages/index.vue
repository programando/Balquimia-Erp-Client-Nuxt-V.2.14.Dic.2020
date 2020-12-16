<template>
  <div>
    <Header></Header>
      <!-- sliderss -->
      <Slider></Slider>

    <!-- aside -->
    <Experiencia></Experiencia>

    <!-- section -->
    <Section></Section>

    

  </div>
</template>

<script>
    import Header         from "@/components/inicio/header/indexHeader";
    import Experiencia    from "@/components/inicio/experiencias/experiencias";
    import Industrias     from "@/components/inicio/industrias/section";
    import  Slider        from "@/components/inicio/slider/slider"
    export default {
       data: () => ({
 
       }),
      components: { Header, Slider,Experiencia,Industrias },
  
    };

</script>
