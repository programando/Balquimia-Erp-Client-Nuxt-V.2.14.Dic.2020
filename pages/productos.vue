<template>
  <div>
    <HeaderProductos></HeaderProductos>

    <div class="pb-8 bg-gray-200 ">
      <div class="lg:grid grid-cols-4 gap-4  lg:mx-0 ">
        <div class="mx-4 lg:-ml-2 lg:mx-0 col-start-2 col-end-5 ">
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

        <div class="mx-4 px-4 mb-4 lg:mt-12 xl:mt-16 lg:py-5 lg:mx-0 xl:ml-10 lg:fixed">
          <div class="bg-black border flex justify-center lg:pt-10 xl:pt-6">
            <h3 class="text-white text-xl py-2 px-3 lg:py-5 font-bold">
              Por Sectores
            </h3>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
          >
            <nuxt-link to="/">Linea Inocuidad Alimentaria</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
          >
            <nuxt-link to="/">Linea Artes gráficas</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
          >
            <nuxt-link to="/">Linea Automotriz</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
          >
            <nuxt-link to="/">Linea Hotelera</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
          >
            <nuxt-link to="/">Linea Mantenimiento Industrial</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
          >
            <nuxt-link to="/">Linea Materias Primas</nuxt-link>
          </div>
          <div
            class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
          >
            <nuxt-link to="/">Linea Sanidad Portatil</nuxt-link>
          </div>
          <div class="hidden lg:inline">
            <div class="bg-black border flex justify-center mt-2">
              <h3 class="text-white text-xl py-2 px-3 lg:py-5 font-bold">
                Por Marcas
              </h3>
            </div>
            <div
              class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
            >
              <nuxt-link to="/">RAX</nuxt-link>
            </div>
            <div
              class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
            >
              <nuxt-link to="/">Lito-TRON</nuxt-link>
            </div>
            <div
              class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
            >
              <nuxt-link to="/">Retrocho</nuxt-link>
            </div>
            <div
              class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
            >
              <nuxt-link to="/">Tawax</nuxt-link>
            </div>
            <div
              class="flex justify-start border px-3 py-2 hover:bg-gray-300 text-gray-700 bg-white"
            >
              <nuxt-link to="/">Tron</nuxt-link>
            </div>
          </div>
        </div>

        <!-- footer -->
        <div class=" lg:mx-0 col-start-2 col-end-5 order-last">
          <div class="pb-10 bg-white">
            <div
              class="bg-center bg-no-repeat bg-cover lg:py-20 "
              style="background-image:url(/images/inicio/footer/footer-contact.webp)"
            >
              <div
                class="bg-center bg-no-repeat bg-cover "
                style="background-image:url(/images/comunes/malla1.webp)"
              >
                <div class="py-20">
                  <div class="mx-10">
                    <h2 class="text-2xl font-bold text-center">
                      Estamos listos, ¿Que necesidad tienes en tu empresa?
                    </h2>
                    <div
                      class="w-56 px-3 py-2 mx-auto mt-4 text-white transition duration-700 ease-in-out bg-primary hover:bg-indigo-900 "
                    >
                      <nuxt-link
                        to="/"
                        class="flex items-center justify-center"
                      >
                        <p
                          class="mr-4 text-base font-medium md:text-lg lg:text-xl md:px-6"
                        >
                          Contáctenos
                        </p>
                        <img
                          class="h-5"
                          src="/images/comunes/icono-flecha.png"
                          alt="bandera"
                        />
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="-mt-10 ">
              <img
                class="mx-auto "
                src="/images/inicio/footer/arr2.webp"
                alt=""
              />
            </div>
            <div class="relative">
              <img
                class="mx-auto logo"
                src="/images/inicio/footer/balquimia-logo.webp"
                alt=""
              />
            </div>
            <div
              class="sm:grid sm:grid-cols-2 lg:grid-cols-2 lg:mx-4 lg:mr-8 xl:grid-cols-4"
            >
              <div class="text-gray-700 sm:mt-4">
                <div class="flex justify-center mt-2">
                  <h3 class="font-bold uppercase">Explorar</h3>
                </div>
                <div class="flex justify-center mt-2">
                  <nuxt-link to="/">Inicio</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Productos</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Servicios</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Experiencia</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Contacto</nuxt-link>
                </div>
              </div>
              <div class="mt-10 text-gray-700 sm:mt-4 ">
                <div class="flex justify-center">
                  <h3 class="font-bold uppercase">Productos</h3>
                </div>
                <div class="flex justify-center mt-2">
                  <nuxt-link to="/">Linea Inocuidad Alimentaria</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Artes gráficas</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Automotriz</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Hotelera</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Mantenimiento Industrial</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Materias Primas</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Linea Sanidad Portatil</nuxt-link>
                </div>
              </div>
              <div class="mt-10 text-gray-700 sm:mt-8 lg:mt-4 ">
                <div class="flex justify-center">
                  <h3 class="font-bold uppercase">Legal</h3>
                </div>
                <div class="flex justify-center mt-2">
                  <nuxt-link to="/">Términos y condiciones</nuxt-link>
                </div>
                <div class="flex justify-center">
                  <nuxt-link to="/">Politicas de privacidad</nuxt-link>
                </div>
              </div>
              <div class="mt-10 text-gray-700 sm:mt-8 lg:mt-4">
                <div class="flex justify-center">
                  <h3 class="font-bold uppercase">Contáctenos</h3>
                </div>
                <div class="flex justify-center">
                  <p class="font-bold">Balquimia Chemical Solutions</p>
                </div>
                <div class="flex justify-center">
                  <p>Linea de atencion al cliente</p>
                </div>
                <div class="flex justify-center">
                  <p class="font-bold">01 8000 18 TRON (8766)</p>
                </div>
                <div class="flex justify-center">
                  <p>Dirección: Cll 35 #4-31</p>
                </div>
                <div class="flex justify-center">
                  <p>Cali - Colombia</p>
                </div>
              </div>
            </div>
            <div class="flex justify-center mt-20">
              <nuxt-link to="/">
                <img
                  class="h-6 mx-1"
                  src="/images/inicio/footer/facebook.svg"
                  alt=""
                />
              </nuxt-link>
              <nuxt-link to="/">
                <img
                  class="h-6 mx-1"
                  src="/images/inicio/footer/instagram.svg"
                  alt=""
                />
              </nuxt-link>
              <nuxt-link to="/">
                <img
                  class="h-6 mx-1"
                  src="/images/inicio/footer/twitter.svg"
                  alt=""
                />
              </nuxt-link>
              <nuxt-link to="/">
                <img
                  class="h-6 mx-1"
                  src="/images/inicio/footer/linkedin.svg"
                  alt=""
                />
              </nuxt-link>
              <nuxt-link to="/">
                <img
                  class="h-6 mx-1"
                  src="/images/inicio/footer/youtube.svg"
                  alt=""
                />
              </nuxt-link>
            </div>
            <div class="flex justify-center">
              <p class="text-xs text-gray-700">
                © Balquimia Chemical Solutions 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderProductos from "@/components/productos/headerProductos";
import Footer from "@/components/inicio/footer/footer";
import CardProductoDestacado from "@/components/inicio/productosDestacados/cardProductoDestacado";
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
