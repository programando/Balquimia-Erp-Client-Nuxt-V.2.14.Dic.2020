<template>
  <div class="fixed z-10 w-full ">
    <header class="bg-white">
      <!-- Icono de la empresa -->
      <div class="flex justify-center -mt-3 lg:flex lg:justify-between lg:mt:0 lg:py-0">
        <nuxt-link class="flex justify-center flex-grow lg:flex-grow-0" to="/">
          <div class="">
            <img
              class="h-20 logo lg:ml-10 lg:h-auto"
              src="/images/landing-page/header/balquimia-logo.png"
              alt="logo"
            />
          </div>
        </nuxt-link>

        <!-- Navbar en pantalla completa, en pantalla pequeña esta oculto -->
        <div class="hidden bg-white lg:flex">
          <NavFullScreen></NavFullScreen>
        </div>

        <!-- Icono svg del menu hamburguesa -->
        <div class="pt-6 lg:hidden ">
          <HamburguerIcon></HamburguerIcon>
      </div>
      </div>
      
      <!-- un checkbox para detectar mediante CSS cuando ocultar o desplegar el menu hambueguesa -->
      <input type="checkbox" class="hidden" id="menu-togle" />

      <!-- Navbar en pantallas pequeñas y medianas -->
      <div class="fixed hidden w-full lg:hidden " id="menu">
        <NavResponsive></NavResponsive>
      </div>
    </header>
    <div class="flex justify-center lg:block lg:ml-4">
      <img
        src="/images/landing-page/header/arr.png"
        alt="arr1"
        class="h-10 lg:mt-0 w-52"
      />
    </div>
  </div>
</template>

<script>
import NavFullScreen from "@/components/landing-page/header/navFullScreen";
import NavResponsive from "@/components/landing-page/header/navResponsive";
import HamburguerIcon from "@/components/landing-page/navOptions/hamburguerIcon";
export default {
  data: () => ({}),
  components: { NavFullScreen, HamburguerIcon, NavResponsive }
};
</script>

<style scoped>
 .logo {
  position: relative;
  top: 20px;
  z-index: 100;
} 

.logo-full {
  
  
  left: 40px;
} 
</style>
