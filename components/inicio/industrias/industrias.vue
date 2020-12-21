<template>
  <section class="pt-10 ">
    <div>
      <div class="flex mb-8">
        <h2 class="mx-auto mt-20 text-2xl font-bold text-primary">
          Conocemos tu historia
        </h2>
      </div>

      <div class="md:flex">
        <CardIndustrias
          title="inicuidad de alimentos"
          imgProducto="/images/inicio/industrias/icono0.webp"
        ></CardIndustrias>

        <CardIndustrias
          title="artes graficas"
          imgProducto="/images/inicio/industrias/icono1.webp"
        ></CardIndustrias>

        <CardIndustrias
          title="automotriz"
          imgProducto="/images/inicio/industrias/icono2.webp"
        ></CardIndustrias>
        
      </div>

      <div class="md:flex lg:hidden">
        <CardIndustrias
          title="hoteleria"
          imgProducto="/images/inicio/industrias/icono3.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sector industrial"
          imgProducto="/images/inicio/industrias/icono4.webp"
        ></CardIndustrias>
      </div>
      <div class="md:flex lg:hidden ">
        <CardIndustrias
          title="materias primas"
          imgProducto="/images/inicio/industrias/icono5.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sanidad portatil"
          imgProducto="/images/inicio/industrias/icono6.webp"
        ></CardIndustrias>
      </div>

      <div class="hidden grid-cols-4 lg:grid">
        <CardIndustrias
          title="hoteleria"
          imgProducto="/images/inicio/industrias/icono3.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sector industrial"
          imgProducto="/images/inicio/industrias/icono4.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="materias primas"
          imgProducto="/images/inicio/industrias/icono5.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sanidad portatil"
          imgProducto="/images/inicio/industrias/icono6.webp"
        ></CardIndustrias>
      </div>
    </div>
  </section>
</template>
<script>
import CardIndustrias from "@/components/inicio/industrias/cardIndustrias";

export default {
  components: { CardIndustrias }
};
</script>
<style></style>
