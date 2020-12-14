<template>
  <div class="bg-gray-900">
    <div
      class="bg-no-repeat bg-cover bg-center"
      style="background-image: url(/images/landing-page/aside/malla2.webp)"
    >
      <div class="pt-20 px-10 md:px-16 lg:px-0 lg:pl-16 ">
        <div class="-ml-20 md:-ml-16">
          <div
            class="boder border-b-2 border-yellow-500 w-20 inline-block md:ml-1 lg:ml-12 "
          ></div>
          <p
            class="text-yellow-500 font-semibold inline text-xs  uppercase md:text-sm ml-1 lg:ml-2"
          >
            Expericencia validada
          </p>
        </div>
        <div class="lg:flex lg:mt-10">
          <div class="lg:w-2/3 lg:px-10 xl:px-20">
            <div class="mt-8 lg:mb-2">
              <h2 class="text-white text-2xl md:text-3xl xl:text-4xl ">
                Durante <span class="font-bold">más de 20 años</span>, hemos
                estado desarrollando las mejores soluciones de limpieza,
                desinfección y mantenimiento industrial.
              </h2>
            </div>
            <div class=" sm:flex mt-2 seccion-1 ">
              <div class="hidden sm:block ">
                <img
                  class="w-full h-full  mr-40 "
                  src="/images/landing-page/aside/lab1.webp"
                  alt="imagen-lab"
                />
              </div>
              <div class="bg-yellow-800 py-5 px-5  text-white">
                <a href="#">
                  <p class="mr-20">
                    Aplicamos calidad, eficiencia y durabilidad en nuestros
                    servicios para superar los objetivos de nuestros clientes.
                  </p>
                  <p class="mt-4 ml-40">
                    Ver servicios
                    <span
                      ><img
                        class="inline ml-4"
                        src="/images/landing-page/aside/arrR.webp"
                        alt=""
                    /></span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="hidden lg:block mt-20 w-1/3 xl:px-1 xl:-mt-10">
            <div class="">
              <img
                class=" h-auto seccion-2 "
                src="images/landing-page/aside/hexa1.webp"
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
  top: 30px;
}
</style>
