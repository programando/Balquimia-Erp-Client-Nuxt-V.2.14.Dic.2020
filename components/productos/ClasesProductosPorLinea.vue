<template>
  <div class="my-10 ml-2 mr-4 bg-white border lg:ml-2 lg:mr-4 ">
    <div
      class="bg-center bg-no-repeat bg-cover"
      style="background-image: url(/images/comunes/malla2.webp)"
    >
      <div class="flex justify-between">
        <div class="w-full ">
          <img class="w-full h-64" :src="img" alt="" />
        </div>
      </div>

      <p class="flex flex-wrap px-2 text-lg text-gray-700 text-xs">
        <span class="mr-10"
              v-for="claseProducto in clasesProductos"
             :key="claseProducto.id_clse_prdcto" >

          <div class="py-1 cursor-pointer hover:text-primary"
               @click="getProductosPorClase(claseProducto.id_clse_prdcto)">
                {{ claseProducto.nom_clse_prdcto }}
          </div>
        </span>
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "clasesProductosPorLinea",
  props: {
    clasesProductos: Array,
    title: String,
    img: String
  },

  methods: {
    getProductosPorClase(id_clse_prdcto) {
      this.$emit("getProductosPorClase", id_clse_prdcto);
      
    }
  }
};
</script>

<style>
.active {
  color: blue;
}
</style>
