<template>
  <div>
    <Header></Header>

    <div class="pt-20 pb-8 bg-gray-200">
      <div class="lg:flex lg:mt-6 lg:mx-8  ">
        <div class="my-10 sm:grid sm:grid-cols-3 xl:grid-cols-4 sm:gap-1  lg:order-last">
          <CardProductoDestacado></CardProductoDestacado>
          <CardProductoDestacado></CardProductoDestacado>
          <CardProductoDestacado></CardProductoDestacado>
          <CardProductoDestacado></CardProductoDestacado>
          <CardProductoDestacado></CardProductoDestacado>
          <CardProductoDestacado></CardProductoDestacado>
        </div>
        <div class="mx-4 px-4 xl:mx-6 lg:ml-10 xl:ml-8">
          <div class="bg-black border flex justify-center  lg:pt-10 xl:pt-6">
            <h3 class="text-white text-xl py-2 px-3 lg:py-5 font-bold">
              Por Sectores
            </h3>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 "
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
            class="flex justify-start border px-3 py-2  hover:bg-gray-300 text-gray-700"
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
    CardProductoDestacado
  }
};
</script>
<style></style>
