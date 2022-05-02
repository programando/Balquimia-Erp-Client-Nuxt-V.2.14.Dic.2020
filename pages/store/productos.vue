<template>
  <div>
    <div class="pb-8 bg-gray-200 ">
      <div class="grid-cols-12 gap-4 lg:grid lg:mx-0 ">
        <div class="col-end-13 mr-14 md:col-start-5 lg:mx-0 lg:-ml-10 xl:-ml-20 2xl:ml-0 2xl:col-start-4 responsive">
          <div class="pt-20 bg-gray-200">

            <ClasesProductosPorLinea
              :clasesProductos="clasesProductos"
              :title="cardNomLinea"
              :img="cardImagen"
              @getProductosPorClase="getProductosPorClase"
            ></ClasesProductosPorLinea>

          </div>
          <CardProductoDestacado :productos="productos" ></CardProductoDestacado>
        </div>

        <div
          class="col-span-4 px-4 mx-4 mb-4 lg:mt-12 xl:mt-16 lg:py-5 lg:mx-0 xl:ml-10 lg:fixed"
        >
          <div class="flex justify-center bg-black border lg:pt-10 xl:pt-6">
            <h3 class="px-3 py-2 text-xl font-bold text-white lg:py-5">
              Por Sectores
            </h3>
          </div>

          <div
            class="flex justify-start px-3 py-2 text-gray-700 bg-white border"
          >
            <table>
              <tr class=""  v-for="linea in lineasProductos" :key="linea.idlinea" >
                <td class="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white" 
                     @click="getClasesProductosPorLinea(  $event, linea,)">
                  {{ linea.nom_linea }}
                </td>
              </tr>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardProductoDestacado from "@/components/home/productosDestacados/cardProductoDestacado";
import ClasesProductos from "@/models/MstroClasesPrdcto";
import Footer from "@/components/home/footer/footer";
import HeaderProductos from "@/components/productos/headerProductos";
import Lineas from "@/models/MstroLinea";
import Productos from "@/models/Prdcto";
import ClasesProductosPorLinea from "@/components/productos/ClasesProductosPorLinea.vue";
import { address } from '@/config/address';

export default {
  layout: "layoutBalquimia",
  components: {
    HeaderProductos,
    Footer,
    CardProductoDestacado,
    ClasesProductosPorLinea
  },

  data: () => ({
    formData: { idlinea: 0 },
    errors: [],
    clasesProductos: [],
    lineasProductos: [],
    productos: [],
    defaultLinea : {
        'id_linea' : 3,
        'nom_linea' : 'INOCUIDAD ALIMENTARIA',
        'imagen' :  address.apiUrl+'/storage/images/lineas/inocuidad_alimentaria.jpg',
    },
     cardNomLinea :'',
     cardImagen:''
  }),

  mounted() {
    Lineas.activas().then(response => {
      this.lineasProductos = response.data;
    });
    this.removeColorLinea();
    this.getClasesProductosPorLinea( null, this.defaultLinea); // Linea inocuida alimentaria
  },

  methods: {
    getClasesProductosPorLinea (  event, Linea ) {
     
     this.formData.idlinea = Linea.id_linea;
      ClasesProductos.getClasesPorLinea(this.formData).then(response => {
        this.clasesProductos = response.data;
      });
      this.cardNomLinea = Linea.nom_linea;
      this.cardImagen   = Linea.imagen;
      this.getProductosPorLinea(Linea.id_linea);
      this.removeColorLinea();
      this.setColorLinea (event );
    },


    getProductosPorClase(IdClaseProducto) {
      Productos.porClaseProducto(IdClaseProducto).then(response => {
        this.productos = response.data;
        
      });
    },

    getProductosPorLinea(idLinea) {
      Productos.porLineaProducto(idLinea).then(response => {
        this.productos = response.data;
      });
    },

    setColorLinea ( event ){
      if ( event != null ) {
        event.currentTarget.classList.add("linea-activa")
      }
    },
    removeColorLinea (){
      let lineasActivas = [].slice.call(document.getElementsByClassName('linea-activa'));
          for (var i = 0; i < lineasActivas.length; i++) {
              lineasActivas[i].classList.remove("linea-activa");
          }
    },

  }
};
</script>
<style>
  .linea-activa {
   color:  white;
   background-color: #D3500A;
  }
  
.pico {
  position: relative;
  left: 73px;
}

.prueba {
  position: fixed;
}

/* footer */
.logo {
  position: relative;
  bottom: 30px;
  right: 30px;
}

/* @media (min-width: 1660px) { 
  .responsive {
    grid-column-start: 4;
  }

 } */

@media (min-width: 1700px) { 
  .responsive {
    margin-left: -90px;
  }



}

</style>
