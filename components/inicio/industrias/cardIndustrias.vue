<template>
  <div class="bg-white ">
    <div
      class="relative px-10 md:px-6 lg:px-4 md:py-8 py-10 border-2 hover1 hover:text-white"
    >
      <h2 class="mt-2 mb-10 text-base font-bold uppercase ">
        Inicuidad de alimentos
      </h2>
      <p class="text-lg text-white ">
        Sistema de limpieza, desinfección y mantenimiento preventivo
      </p>
      <div class="opacity-0 img  ">
        <img class="" src="/images/inicio/industrias/icono0.webp" alt="" />
      </div>
      <div class="-mt-6 opacity-0 informacion">
        <div
          class="w-64 px-6 -mt-10 py-2 font-semibold bg-yellow-700 sm:w-4/5 lg:w-auto  lg:mr-10 xl:w-4/6"
        >
          <nuxt-link to="/">
            Mas informacion
            <span
              ><img class="inline" src="images/comunes/icono-flecha.png" alt=""
            /></span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardIndustrias"
};
</script>

<style>
.hover1 {
  background-image: url("/images/inicio/industrias/linea0.webp");
  background-size: cover;
  background-repeat: no-repeat;
}

.hover1:hover > .img {
  opacity: 0;
}

.hover1:hover > h2 {
  opacity: 0;
}

.hover1:hover > p {
  opacity: 0;
}

.hover1:hover {
  background: white;
}

.hover1:hover > .informacion {
  opacity: 100;
}
</style>
