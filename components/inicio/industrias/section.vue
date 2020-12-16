<template>
<<<<<<< HEAD:components/landing-page/section/section.vue
  <section class=" py-10">
    <!-- seccion1 -->
    <div>
      <div class="flex mb-8">
        <h2 class="mt-20 mx-auto text-yellow-700 text-2xl font-bold">
          Conocemos tu historia
        </h2>
      </div>
      <div class="md:flex">
        <CardSection
          title="inicuidad de alimentos"
          imgProducto="/images/landing-page/section/icono0.webp"
        ></CardSection>
        <CardSection
          title="artes graficas"
          imgProducto="/images/landing-page/section/icono1.webp"
        ></CardSection>
        <CardSection
          title="automotriz"
          imgProducto="/images/landing-page/section/icono2.webp"
        ></CardSection>
      </div>

      <div class="md:flex lg:hidden">
        <CardSection
          title="hoteleria"
          imgProducto="/images/landing-page/section/icono3.webp"
        ></CardSection>
        <CardSection
          title="sector industrial"
          imgProducto="/images/landing-page/section/icono4.webp"
        ></CardSection>
      </div>
      <div class="md:flex lg:hidden ">
        <CardSection
          title="materias primas"
          imgProducto="/images/landing-page/section/icono5.webp"
        ></CardSection>
        <CardSection
          title="sanidad portatil"
          imgProducto="/images/landing-page/section/icono6.webp"
        ></CardSection>
      </div>

      <div class="hidden lg:grid grid-cols-4">
        <CardSection
          title="hoteleria"
          imgProducto="/images/landing-page/section/icono3.webp"
        ></CardSection>
        <CardSection
          title="sector industrial"
          imgProducto="/images/landing-page/section/icono4.webp"
        ></CardSection>
        <CardSection
          title="materias primas"
          imgProducto="/images/landing-page/section/icono5.webp"
        ></CardSection>
        <CardSection
          title="sanidad portatil"
          imgProducto="/images/landing-page/section/icono6.webp"
        ></CardSection>
      </div>
    </div>

    <!-- seccion2 -->

    <div class="bg-gray-900 py-20">
      <div
        class="bg-no-repeat bg-cover bg-center"
        style="background-image: url(/images/landing-page/aside/malla2.webp)"
      >
        <div class="-ml-16 md:-ml-16">
          <div
            class="boder border-b-2 border-yellow-500 w-20 inline-block md:ml-1 lg:ml-12 "
          ></div>
          <p
            class="text-yellow-500 font-semibold inline text-xs  uppercase md:text-sm ml-1 lg:ml-2"
          >
            Expericencia validada
          </p>
        </div>
        <div class="my-10 mx-6 w-1/2">
          <h2 class="text-white text-xl font-semibold">
            Nuestros productos ofrecen alta calidad, eficiencia y durabilidad.
          </h2>
          <div class="py-2 px-6 mt-4 bg-yellow-700 w-60 mx-auto sm:w-2/5 md:w-full font-semibold">
          <a href="#"
            >Mas informacion
            <span
              ><img
                class="inline ml-4"
                src="images/landing-page/section/icono-flecha.png"
                alt=""/></span
          ></a>
        </div>
        </div>
        <div>
          <!-- <img class="" src="images/landing-page/section/euL.png" alt=""> -->
          <div class="bg-white mx-24 py-10">
            <img class="mx-auto mb-4" src="images/landing-page/section/fortaleza1.webp" alt="fortaleza1">
            <p class="px-4">Disminuimos el consumo de los recursos naturales para ayudar en la protección del Medio Ambiente.</p>
          </div>
        </div>
      </div>
=======
  <section class="py-10 bg-white">
    <div class="flex mb-8">
      <h2 class="mx-auto mt-20 text-2xl font-bold text-yellow-700">
        Conocemos tu historia
      </h2>
>>>>>>> 11c424197ce2373992731596cc6971176b369e31:components/inicio/industrias/section.vue
    </div>
  </section>
</template>
<script>
import CardSection from "@/components/inicio/industrias/cardSection";

export default {
  components: { CardSection }
};
</script>
<style></style>
