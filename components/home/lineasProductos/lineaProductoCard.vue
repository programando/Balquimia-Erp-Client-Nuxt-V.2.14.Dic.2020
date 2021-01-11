<template>
  <div class="bg-white ">
  
    <div class="relative px-10 py-10 bg-no-repeat bg-cover border-2 md:px-6 lg:px-4 md:py-8 hover:text-white hover1"
          :style="getImage(imagen)">
      <h2 class="mt-2 mb-10 text-base font-bold uppercase ">
        {{ nom_linea }}
      </h2>
      <p class="text-lg text-white ">
        {{slogan}}
      </p>
      <div class="opacity-0 ">
        <img class="" src="/images/home/industrias/icono0.webp" alt="" />
      </div>

      <nuxt-link class="-mt-6 opacity-0 informacion" to="/store/productos">
        <div class="inline-block px-4 py-2 -mt-10 font-semibold bg-primary">
          Mas información
        </div>
      </nuxt-link>

    </div>
   
  </div>
</template>

<script>
export default {
  name: "cardLineasProductos",
  props: {
      nom_linea: String,
      id_linea : Number,
      slogan   : String,
      imagen   : String,
  },
     methods: {
    getImage(imageName) {
      return 'background-image: url("' + imageName + '")';
    }
    },
    
};
</script>

<style>
 
.hover1:hover > .informacion {
  opacity: 1;
}

.hover1:hover {
  filter: contrast(80%);
}
</style>
