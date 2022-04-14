<template>
  <div>
    <div class=" pb-8 bg-gray-200">
      <div class="grid-cols-12 gap-4 lg:grid lg:mx-0 ">
        <div class="md:col-start-5 col-end-13 2xl:col-start-4 mx-4 lg:mx-0 ">
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
          class="px-4 mx-4 mb-4 lg:mt-12 xl:mt-16 lg:py-5 lg:mx-0 xl:ml-10 lg:fixed"
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
              <tr
                class=""
                v-for="linea in lineasProductos"
                :key="linea.idlinea"
              >
                <td
                  class="px-2 py-2 cursor-pointer hover:bg-primary hover:text-white"
                  @click="getClasesProductosPorLinea( linea) "
                >
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
        'imagen' :  address.apiUrl+'storage/images/lineas/inocuidad_alimentaria.jpg',
    },
     cardNomLinea :'',
     cardImagen:''
  }),

  mounted() {
    Lineas.activas().then(response => {
      this.lineasProductos = response.data;
    });
    this.getClasesProductosPorLinea( this.defaultLinea); // Linea inocuida alimentaria
  },

  methods: {
    getClasesProductosPorLinea ( Linea ) {
      this.formData.idlinea = Linea.id_linea;
      ClasesProductos.getClasesPorLinea(this.formData).then(response => {
        this.clasesProductos = response.data;
      });
      
      //if ( nomLinea == undefined){ nomLinea='INOCUIDAD ALIMENTARIA'}
      this.cardNomLinea = Linea.nom_linea;
      this.cardImagen   = Linea.imagen;
      this.getProductosPorLinea(Linea.id_linea);
    },

    getProductosPorClase(IdClaseProducto) {
      Productos.porClaseProducto(IdClaseProducto).then(response => {
        this.productos = response.data;
        console.log (this.productos  );
      });
    },

    getProductosPorLinea(idLinea) {
      Productos.porLineaProducto(idLinea).then(response => {
        this.productos = response.data;
      });
    }
  }
};
</script>
<style>
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


</style>
