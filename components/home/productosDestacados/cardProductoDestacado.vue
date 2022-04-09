<template>
  <div class="my-10 sm:grid sm:grid-cols-3 xl:grid-cols-4 sm:gap-1">

    <div
      class="px-4 mx-2 my-4 bg-white"
      v-for="producto in productos"
      :key="producto.id_prdcto"
    >
      <h2 class="p-2 mt-2 text-xl font-bold uppercase text-primary">
        {{ producto.nom_prdcto }}
      </h2>
      <img class="inline w-2/3"
        :src="producto.imagen"
        alt=""
      />
      <div class="inline w-1/3">
        <div class="px-2 py-2 -mt-4 fondo">
          <p class="p-2"> {{ producto.dscrpcion}}</p>
          <div class="px-2 mt-2 mb-2 text-sm">
            <div> Presentaciones: </div>
            <div class="px-4" v-for="( prdctoPrsntcion) in producto.prdctos_prsntciones" :key="prdctoPrsntcion.id_prdcto">
              <p> {{ prdctoPrsntcion.presentaciones.nom_prsntcion  }} </p>
               
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    productos: {
      type: Array,
      default: () => []
    },

  }
};
</script>
<style></style>
