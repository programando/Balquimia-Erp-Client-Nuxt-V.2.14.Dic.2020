<template>
  <div>
    <Header></Header>

    <div class="pb-8 bg-gray-200 ">
      <div class="lg:flex  lg:mx-0">
        <div class="lg:order-last mx-4 lg:mx-10">
          <div class="pt-20 bg-gray-200">
            <div class="my-10 border bg-white ml-2 mr-4  lg:ml-2 lg:mr-4">
              <div
                class="bg-center bg-no-repeat bg-cover"
                style="background-image: url(/images/comunes/malla2.webp)"
              >
                <div class="flex">
                  <div class="mx-4 md:mx-8 my-6">
                    <h2
                      class="text-primary text-2xl mt-4 leading-5 md:leading-none md:text-3xl font-bold px-4 lg:text-4xl "
                    >
                      Productos para el sector Inocuidad de Alimentos
                    </h2>
                    <div class="border my-4 mx-4"></div>
                    <p class="px-4 text-lg text-gray-700 leading-6">
                      Sistema de limpieza, desinfección y mantenimiento
                      preventivo
                    </p>
                  </div>
                  <div class="flex relative -ml-10 mr-16 lg:ml-4">
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

          <div class="my-10 sm:grid sm:grid-cols-3 xl:grid-cols-4 sm:gap-1">
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
            <CardProductoDestacado></CardProductoDestacado>
          </div>
        </div>

        <div class="mx-4 px-4   lg:mt-20 xl:mt-10 lg:py-10 xl:py-12 xl:ml-8 lg:w-3/6 xl:w-2/6">
          <div class="bg-black border flex justify-center lg:pt-10 xl:pt-6">
            <h3 class="text-white text-xl py-2 px-3 lg:py-5 font-bold">
              Por Sectores
            </h3>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
          >
            <nuxt-link to="/">Linea Inocuidad Alimentaria</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
          >
            <nuxt-link to="/">Linea Artes gráficas</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
          >
            <nuxt-link to="/">Linea Automotriz</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
          >
            <nuxt-link to="/">Linea Hotelera</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
          >
            <nuxt-link to="/">Linea Mantenimiento Industrial</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
          >
            <nuxt-link to="/">Linea Materias Primas</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
          >
            <nuxt-link to="/">Linea Sanidad Portatil</nuxt-link>
          </div>
          <div class="hidden lg:inline">
            <div class="bg-black border flex justify-center mt-8">
              <h3 class="text-white text-xl py-2 px-3 lg:py-5 font-bold">
                Por Marcas
              </h3>
            </div>
            <div
              class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
            >
              <nuxt-link to="/">RAX</nuxt-link>
            </div>
            <div
              class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
            >
              <nuxt-link to="/">Lito-TRON</nuxt-link>
            </div>
            <div
              class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
            >
              <nuxt-link to="/">Retrocho</nuxt-link>
            </div>
            <div
              class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
            >
              <nuxt-link to="/">Tawax</nuxt-link>
            </div>
            <div
              class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700"
            >
              <nuxt-link to="/">Tron</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/inicio/header/indexHeader";
import Footer from "@/components/inicio/footer/footer";
import CardProductoDestacado from "@/components/inicio/productosDestacados/cardProductoDestacado";
export default {
  components: {
    Header,
    Footer,
    CardProductoDestacado,
  },
};
</script>
<style>
.pico {
  position: relative;
  left: 73px;
}
</style>
