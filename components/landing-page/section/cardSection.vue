<template>
  <div class=" bg-white">
    <div class="hover1 border-2 px-10 py-10 md:px-6 md:py-6 hover:text-white relative">
      <h2 class="mb-10 md:mb-6 font-bold text-base uppercase mt-2">
        {{ title }}
      </h2>
      <p class="text-white text-lg ">
        Sistema de limpieza, desinfección y mantenimiento preventivo
      </p>
      <div class="img md:-mt-4 md:-mb-10">
        <img class="" :src="imgProducto" alt="" />
      </div>
      <div class="opacity-0 informacion -mt-6 md:px-4">
        <div class="py-2 px-6 bg-yellow-700 w-64 sm:w-2/5 md:w-full font-semibold">
          <a href="#"
            >Mas informacion
            <span
              ><img
                class="inline"
                src="images/landing-page/section/icono-flecha.png"
                alt=""/></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardSection",
  props:{
    title: String,
    imgProducto: String,

  }
};
</script>
<style>
.hover1:hover {
  background-image: url("/images/landing-page/section/linea0.webp");
  background-size: cover;
  background-repeat: no-repeat;
}

.hover1:hover > .img {
  opacity: 0;
}

.hover1:hover > .informacion {
  opacity: 100;
}
</style>
