<template>
  <div>
    <HeaderProductos></HeaderProductos>

    <div class="pb-8 bg-gray-200 ">
      <div class="grid-cols-4 gap-4 lg:grid lg:mx-0 ">
        <div class="col-start-2 col-end-5 mx-4 lg:-ml-2 lg:mx-0 ">
          <div class="pt-20 bg-gray-200">
            <div class="my-10 ml-2 mr-4 bg-white border lg:ml-2 lg:mr-4">
              <div
                class="bg-center bg-no-repeat bg-cover"
                style="background-image: url(/images/comunes/malla2.webp)"
              >
                <div class="flex">
                  <div class="mx-4 my-6 md:mx-8">
                    <h2
                      class="px-4 mt-4 text-2xl font-bold leading-5 text-primary md:leading-none md:text-3xl lg:text-4xl "
                    >
                      Productos para el sector Inocuidad de Alimentos
                    </h2>
                    <div class="mx-4 my-4 border"></div>
                    <p class="px-4 text-lg leading-6 text-gray-700">
                      Sistema de limpieza, desinfección y mantenimiento
                      preventivo
                    </p>
                  </div>
                  <div class="relative flex mr-16 -ml-10 lg:ml-4">
                    <img
                      class="h-64 pico"
                      src="/images/comunes/eu.webp"
                      alt=""
                    />
                    <img
                      class="h-64"
                      src="/images/comunes/linea0.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between mx-10 mb-4">
            <h2 class="text-2xl font-bold text-primary ">
              Lista de Productos
            </h2>
            <div class="hidden mr-10 lg:inline">
              <img
                class="inline"
                src="/images/comunes/arrL.webp"
                alt="fecha-izquierda"
              />
              <img
                class="inline"
                src="/images/comunes/arrR.webp"
                alt="fecha-derecha"
              />
            </div>
          </div>

          <div class="my-10 sm:grid sm:grid-cols-3 xl:grid-cols-4 sm:gap-1">
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
          </div>
        </div>

        <div class="px-4 mx-4 mb-4 lg:mt-12 xl:mt-16 lg:py-5 lg:mx-0 xl:ml-10 lg:fixed">
          <div class="flex justify-center bg-black border lg:pt-10 xl:pt-6">
            <h3 class="px-3 py-2 text-xl font-bold text-white lg:py-5">
              Por Sectores
            </h3>
          </div>
          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300"  >
            <nuxt-link to="/"> Inocuidad alimentaria</nuxt-link>
          </div>

          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300" >
            <nuxt-link to="/"> Artes gráficas</nuxt-link>
          </div>

          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300">
            <nuxt-link to="/"> Materias primas</nuxt-link>
          </div>
 
          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300" >
            <nuxt-link to="/"> Mantenimiento industrial</nuxt-link>
          </div>

          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300" >
            <nuxt-link to="/"> Sanidad portátils</nuxt-link>
          </div>

          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300" >
            <nuxt-link to="/"> Automotriz</nuxt-link>
          </div>

          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300" >
            <nuxt-link to="/"> Construcción y obras civiles</nuxt-link>
          </div>

          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300" >
            <nuxt-link to="/"> Motos y bicicletas</nuxt-link>
          </div>

          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300" >
            <nuxt-link to="/"> Ferreterías</nuxt-link>
          </div>

          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300" >
            <nuxt-link to="/"> Institucional</nuxt-link>
          </div>

          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300" >
            <nuxt-link to="/"> Reencauche de llantas</nuxt-link>
          </div>

          <div class="flex justify-start px-3 py-2 text-gray-700 bg-white border hover:bg-gray-300" >
            <nuxt-link to="/"> Retail</nuxt-link>
          </div>


        </div>

   
      </div>
    </div>
  </div>
</template>
<script>
import HeaderProductos from "@/components/productos/headerProductos";
import Footer from "@/components/home/footer/footer";
import CardProductoDestacado from "@/components/home/productosDestacados/cardProductoDestacado";
export default {
  
  components: {
    HeaderProductos,
    Footer,
    CardProductoDestacado
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
