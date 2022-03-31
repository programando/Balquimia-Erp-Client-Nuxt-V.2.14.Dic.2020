<template>
  <div>
    <div class="h-screen pb-8 bg-gray-200">
      <div class="grid-cols-4 gap-4 lg:grid lg:mx-0 ">
        <div class="col-start-2 col-end-5 mx-4 lg:-ml-2 lg:mx-0 ">
          <div class="pt-20 bg-gray-200">
            <SectoresMain
              :clasesProductos="clasesProductos"
              title="Productos para el sector Inocuidad de Alimentos"
              img="/images/comunes/eu.webp"
            ></SectoresMain>
          </div>
          <CardProductoDestacado :productos="productos"></CardProductoDestacado>
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
                  @click="getClasesProductosPorLinea(linea.id_linea)"
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
import SectoresMain from "@/components/productos/SectoresMain.vue";

export default {
  layout: "layoutBalquimia",
  components: {
    HeaderProductos,
    Footer,
    CardProductoDestacado,
    SectoresMain
  },

  data: () => ({
    formData: { idlinea: 0 },
    errors: [],
    clasesProductos: [],
    lineasProductos: [],
    productos: []
  }),

  mounted() {
    Lineas.activas().then(response => {
      this.lineasProductos = response.data;
    });
    this.getClasesProductosPorLinea(3); // Linea inocuida alimentaria
  },

  methods: {
    getClasesProductosPorLinea(idLinea) {
      this.formData.idlinea = idLinea;
      ClasesProductos.getClasesPorLinea(this.formData).then(response => {
        this.clasesProductos = response.data;
      });
      this.getProductosPorLinea(idLinea);
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
</style>
