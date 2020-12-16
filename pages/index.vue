<template>
  <div>
    <Header></Header>
      <!-- sliderss -->
      <Slider></Slider>

    <!-- aside -->
    <Experiencia></Experiencia>

    <!-- section -->
<<<<<<< HEAD
    <Section></Section>

    

=======
    <Industrias></Industrias>
>>>>>>> 11c424197ce2373992731596cc6971176b369e31
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
