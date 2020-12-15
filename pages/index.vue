<template>
  <div>
    <Header></Header>
      <!-- sliderss -->
      <Slider></Slider>

    <!-- aside -->
    <Aside></Aside>

    <!-- section -->
    <Section></Section>
  </div>
</template>

<script>
    import Header   from "@/components/landing-page/header/indexHeader";
    import Aside    from "@/components/landing-page/aside/aside";
    import Section  from "@/components/landing-page/section/section";
    import Slider   from "@/components/landing-page/slider"
    export default {
       data: () => ({
 
       }),
      components: { Header, Aside,Section, Slider },
  
    };

</script>
