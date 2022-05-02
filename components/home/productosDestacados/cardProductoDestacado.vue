<template>
  <div class="my-10 sm:grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  sm:gap-1">

    <div
      class="px-4 mx-2 my-4 bg-white width"
      v-for="producto in productos"
      :key="producto.id_prdcto"
    >
      <h2 class="p-2 mt-2 text-lg font-bold uppercase text-primary h-20">
        {{ producto.nom_prdcto }}
      </h2>
      <div class="flex justify-center">
        <img class="h-48 w-56"
        :src="producto.imagen"
        alt=""
      />
      </div>
      <div class="inline w-1/3">
        <div class="px-2 py-2">
          <p class="p-2 text-sm h-20"> {{ producto.dscrpcion}}</p>
          <div class="px-2 mt-2 mb-2 text-sm">
            <div> <strong> Presentaciones: </strong></div>
            <div class="flex flex-wrap">
              <div class="px-2" v-for="( prdctoPrsntcion) in producto.prdctos_prsntciones" :key="prdctoPrsntcion.id_prdcto">
                <p class="mr-4"> {{ prdctoPrsntcion.presentaciones.nom_prsntcion  }} </p>  
              </div>
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
<style>
.width {
  width: 270px;
  

}

</style>
