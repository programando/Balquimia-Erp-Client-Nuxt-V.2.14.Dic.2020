<template>
  <section class=" pt-10">
    <div>
      <div class="flex mb-8">
        <h2 class="mt-20 mx-auto text-yellow-700 text-2xl font-bold">
          Conocemos tu historia
        </h2>
      </div>
      <div class="md:flex">
        <CardIndustrias
          title="inicuidad de alimentos"
          imgProducto="/images/landing-page/section/icono0.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="artes graficas"
          imgProducto="/images/landing-page/section/icono1.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="automotriz"
          imgProducto="/images/landing-page/section/icono2.webp"
        ></CardIndustrias>
      </div>

      <div class="md:flex lg:hidden">
        <CardIndustrias
          title="hoteleria"
          imgProducto="/images/landing-page/section/icono3.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sector industrial"
          imgProducto="/images/landing-page/section/icono4.webp"
        ></CardIndustrias>
      </div>
      <div class="md:flex lg:hidden ">
        <CardIndustrias
          title="materias primas"
          imgProducto="/images/landing-page/section/icono5.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sanidad portatil"
          imgProducto="/images/landing-page/section/icono6.webp"
        ></CardIndustrias>
      </div>

      <div class="hidden lg:grid grid-cols-4">
        <CardIndustrias
          title="hoteleria"
          imgProducto="/images/landing-page/section/icono3.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sector industrial"
          imgProducto="/images/landing-page/section/icono4.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="materias primas"
          imgProducto="/images/landing-page/section/icono5.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sanidad portatil"
          imgProducto="/images/landing-page/section/icono6.webp"
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
