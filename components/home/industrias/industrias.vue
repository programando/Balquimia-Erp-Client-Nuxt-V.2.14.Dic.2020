<template>
  <section class="pt-10 ">
    <div>
      <div class="flex mb-8">
        <h2 class="mx-auto mt-20 text-3xl lg:text-5xl font-bold text-center text-primary">
          Conocemos tu historia
        </h2>
      </div>

      <div class="md:flex">
        <CardIndustrias
          title="inicuidad de alimentos"
          imgProducto="/images/home/industrias/icono0.webp"
        ></CardIndustrias>

        <CardIndustrias
          title="artes graficas"
          imgProducto="/images/home/industrias/icono1.webp"
        ></CardIndustrias>

        <CardIndustrias
          title="automotriz"
          imgProducto="/images/home/industrias/icono2.webp"
        ></CardIndustrias>
        
      </div>

      <div class="md:flex lg:hidden">
        <CardIndustrias
          title="hoteleria"
          imgProducto="/images/home/industrias/icono3.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sector industrial"
          imgProducto="/images/home/industrias/icono4.webp"
        ></CardIndustrias>
      </div>
      <div class="md:flex lg:hidden ">
        <CardIndustrias
          title="materias primas"
          imgProducto="/images/home/industrias/icono5.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sanidad portatil"
          imgProducto="/images/home/industrias/icono6.webp"
        ></CardIndustrias>
      </div>

      <div class="hidden grid-cols-4 lg:grid">
        <CardIndustrias
          title="hoteleria"
          imgProducto="/images/home/industrias/icono3.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sector industrial"
          imgProducto="/images/home/industrias/icono4.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="materias primas"
          imgProducto="/images/home/industrias/icono5.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sanidad portatil"
          imgProducto="/images/home/industrias/icono6.webp"
        ></CardIndustrias>
      </div>
    </div>
  </section>
</template>
<script>
import CardIndustrias from "@/components/home/industrias/cardIndustrias";

export default {
  components: { CardIndustrias }
};
</script>
<style></style>
