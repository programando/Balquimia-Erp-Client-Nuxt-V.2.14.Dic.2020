<template>
  <div class="bg-white ">
    <div
      class="relative px-10 py-10 border-2 md:px-6 lg:px-4 md:py-8 hover1 hover:text-white"
    >
      <h2 class="mt-2 mb-10 text-base font-bold uppercase ">
        Inicuidad de alimentos
      </h2>
      <p class="text-lg text-white ">
        Sistema de limpieza, desinfección y mantenimiento preventivo
      </p>
      <div class="opacity-0 img ">
        <img class="" src="/images/home/industrias/icono0.webp" alt="" />
      </div>

      <nuxt-link class="-mt-6 opacity-0 informacion" to="/store/productos">
        <div class=" px-4 py-2 -mt-10 font-semibold bg-primary inline-block">
          Mas información
          <span>
            <img class="inline" src="/images/comunes/icono-flecha.png" alt="" />
          </span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardIndustrias",
  props: {}
};
</script>

<style>
.hover1 {
  background-image: url("/images/home/industrias/linea0.webp");
  background-size: cover;
  background-repeat: no-repeat;
}

.hover1:hover > .informacion {
  opacity: 1;
}

.hover1:hover {
  filter: contrast(80%);
}
</style>
