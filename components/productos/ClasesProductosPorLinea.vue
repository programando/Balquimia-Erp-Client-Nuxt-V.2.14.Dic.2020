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

      <p class="flex flex-wrap px-2 text-sm text-gray-700">
        <span class="mr-4"
          v-for="claseProducto in clasesProductos"
          :key="claseProducto.id_clse_prdcto" >
          <div class="px-2 py-1 cursor-pointer "
            @click="getProductosPorClase(claseProducto.id_clse_prdcto, $event)">
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
    img: String,
    
  },

  

  methods: {
    getProductosPorClase(id_clse_prdcto, event) {
      this.$emit("getProductosPorClase", id_clse_prdcto);

      
      this.removeColorProducto()
      this.setColorProducto(event)
    },

    setColorProducto ( event ){
      if ( event != null ) {
        event.currentTarget.classList.add("linea-activa-productos")
      }
    },
    removeColorProducto (){
      let lineasActivas = [].slice.call(document.getElementsByClassName('linea-activa-productos'));
          for (var i = 0; i < lineasActivas.length; i++) {
              lineasActivas[i].classList.remove("linea-activa-productos");
          }
    },
  }
};
</script>

<style>
.active {
  color: blue;
}

.active {
  color: #D3500A
}

.linea-activa-productos {
   color:  white;
   background-color: #D3500A;
  }
</style>
