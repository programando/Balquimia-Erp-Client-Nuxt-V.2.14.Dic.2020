<template>
  <div class="bg-gray-900">
    <div
      class="bg-center bg-no-repeat bg-cover"
      style="background-image: url(/images/comunes/malla2.webp)"
    >
      <div class="px-10 pt-20 md:px-16 lg:px-0 lg:pl-16 ">
        <div class="-ml-20 md:-ml-16">
          <div
            class="inline-block w-20 border-b-2 border-yellow-500 boder md:ml-1 lg:ml-12 "
          ></div>
          <p
            class="inline ml-1 text-xs font-semibold text-yellow-500 uppercase md:text-sm lg:ml-2"
          >
            Expericencia validada
          </p>
        </div>
        <div class="lg:flex lg:mt-10">
          <div class="lg:w-2/3 lg:px-10 xl:px-20">
            <div class="mt-8 lg:mb-2">
              <h2 class="text-2xl text-white md:text-3xl xl:text-4xl ">
                Durante <span class="font-bold">más de 20 años</span>, hemos
                estado desarrollando las mejores soluciones de limpieza,
                desinfección y mantenimiento industrial.
              </h2>
            </div>
            <div class="mt-2 sm:flex  seccion-1">
              <div class="hidden sm:block ">
                <img
                  class="w-full h-full mr-40 "
                  src="/images/inicio/experiencia/lab1.webp"
                  alt="imagen-lab"
                />
              </div>
              <div class="px-5 py-5 text-white bg-yellow-800">
                <nuxt-link to="/">
                  <p class="mr-20">
                    Aplicamos calidad, eficiencia y durabilidad en nuestros
                    servicios para superar los objetivos de nuestros clientes.
                  </p>
                  <p class="mt-4 ml-40">
                    Ver servicios
                    <span
                      ><img
                        class="inline ml-4"
                        src="/images/comunes/arrR.webp"
                        alt=""
                    /></span>
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="hidden w-1/3 mt-20 lg:flex  xl:px-1 xl:-mt-10">
            <div class="">
              <img
                class="h-auto seccion-2"
                src="images/inicio/experiencia/hexa1.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.seccion-1 {
  position: relative;
  top: 50px;
}

.seccion-2 {
  position: relative;
  top: 60px;
}

@media (min-width: 1200px) {
  .seccion-2 {
    top: 33px;
  }
}
</style>
