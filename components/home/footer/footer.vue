<template>
  <div class="pb-10 bg-white">
    <div
      class="bg-center bg-no-repeat bg-cover lg:py-20 "
      style="background-image:url(/images/home/footer/footer.jpg)"
    >
      <div
        class="bg-center bg-no-repeat bg-cover "
        
      >
        <div class="py-20">
          <div class="mx-10">
            <h2 class="text-2xl font-bold text-center text-white">
              Estamos listos para asesorarte, ¿Qué necesidad tienes en tu empresa?
            </h2>

            <AppButton
                class = "w-40 px-3 py-2 lg:w-48"
                to    = "/home/contacto"
              :center = "true"
            >
              Contáctenos
            </AppButton>
          </div>
        </div>
      </div>
    </div>
    <div class="-mt-10 ">
      <img class="mx-auto " src="/images/home/footer/arr2.webp" alt="" />
    </div>
    <div class="relative -mt-8 -ml-14">
      <img
        class="mx-auto"
        src="/images/home/footer/balquimia-logo.webp"
        alt=""
      />
    </div>
    <div class="gap-20 sm:grid sm:grid-cols-1 lg:grid-cols-3 lg:mx-20 ">
      <div class="mt-10 text-gray-700 sm:mt-4 ">
        <div class="flex justify-center lg:justify-start lg:ml-10">
          <h3 class="font-bold uppercase">Sectores industriales</h3>
        </div>
        <div class="flex justify-center mt-2 lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos"
            > Inocuidad alimentaria</nuxt-link
          >
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos"> Artes gráficas</nuxt-link>
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos"> Materias primas</nuxt-link>
        </div>
 
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos"
            > Mantenimiento industrial</nuxt-link
          >
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos">Sanidad portátil</nuxt-link>
        </div>
        
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos"> Automotriz</nuxt-link>
        </div>

        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos"> Construcción y obras civiles</nuxt-link>
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos"> Motos y bicicletas</nuxt-link>
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos"> Ferreterías</nuxt-link>
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos"> Institucional</nuxt-link>
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos"> Reencauche de llantas</nuxt-link>
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <nuxt-link to="/store/productos"> Retail</nuxt-link>
        </div>


      </div>
      <div class="mt-10 text-gray-700 sm:mt-8 lg:mt-4 ">
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <h3 class="font-bold uppercase">Legal</h3>
        </div>

        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">

        <PoliticaTratamientoDatos></PoliticaTratamientoDatos>

        </div>

      </div>
      <div class="mt-10 text-gray-700 sm:mt-8 lg:mt-4">
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <h3 class="font-bold uppercase">Contáctenos</h3>
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <p class="font-bold">Balquimia Chemical Solutions</p>
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <p>Linea de atención al cliente</p>
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <p class="font-bold">01 8000 18 8766</p>
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <p>Dirección: Cll 35 # 4-31</p>
        </div>
        <div class="flex justify-center lg:justify-start lg:ml-10 lg:mt-1">
          <p>Cali - Colombia</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-20">
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/home/footer/facebook.svg" alt="" />
      </nuxt-link>
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/home/footer/instagram.svg" alt="" />
      </nuxt-link>
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/home/footer/twitter.svg" alt="" />
      </nuxt-link>
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/home/footer/linkedin.svg" alt="" />
      </nuxt-link>
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/home/footer/youtube.svg" alt="" />
      </nuxt-link>
    </div>
    <div class="flex justify-center">
      <p class="text-xs text-gray-700">© Balquimia Chemical Solutions 2022</p>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/library/buttons/button";
import PoliticaTratamientoDatos from "@/components/comun/politicaDatos";
export default {
  components: { AppButton, PoliticaTratamientoDatos },

  data: () => ({}),

 
};
</script>
<style>
.logo {
  position: relative;
  bottom: 30px;
  right: 30px;
}
</style>
