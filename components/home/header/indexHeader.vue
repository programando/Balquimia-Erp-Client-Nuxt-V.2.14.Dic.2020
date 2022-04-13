<template>
  <div class="fixed z-20 w-full">
    <header class="bg-white">
      <!-- Icono de la empresa -->
      <div
        class="flex justify-center -mt-3 lg:flex lg:justify-between lg:mt:0 lg:py-0"
      >
        <div class="flex justify-center flex-grow lg:flex-grow-0">
          <nuxt-link to="/">
            <div class="">
              <img
                class="h-20 logo lg:ml-10 lg:h-auto"
                src="/images/home/header/balquimia-logo.png"
                alt="logo"
              />
            </div>
          </nuxt-link>
        </div>

        <!-- Navbar en pantalla completa, en pantalla pequeña esta oculto -->
        <div class="hidden bg-white lg:flex">
          <NavFullScreen></NavFullScreen>
        </div>

        <!-- Icono svg del menu hamburguesa -->
        <div class="pt-6 lg:hidden ">
          <button @click="menuBurger">
            <label
              for="menu-togle"
              class="cursor-pointer lg:hidden block border border-gray-300 rounded-full p-2 col-start-7 col-end-8 mr-4"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </button>
        </div>
      </div>

      <!-- un checkbox para detectar mediante CSS cuando ocultar o desplegar el menu hambueguesa -->
      <input type="checkbox" class="hidden" id="menu-togle" />

      <!-- Navbar en pantallas pequeñas y medianas -->
      <div v-if="menu" class="fixed w-full lg:hidden " id="menu">
        <NavResponsive></NavResponsive>
      </div>
    </header>
    <div class="flex justify-center lg:block lg:ml-4">
      <img src="/images/home/header/arr.png" alt="arr1" class="h-10 lg:mt-0" />
    </div>
  </div>
</template>

<script>
import NavFullScreen from "@/components/home/header/navFullScreen";
import NavResponsive from "@/components/home/header/navResponsive";
import HamburguerIcon from "@/components/home/navOptions/hamburguerIcon";
export default {
  components: { NavFullScreen, NavResponsive },
  data() {
    return {
      menu: false
    }
  },

  methods: {
    menuBurger() {
      console.log('click');
      this.menu = !this.menu
    }
  }
  

};
</script>

<style scoped>
.logo {
  position: relative;
  left: 6px;
  top: 20px;
  z-index: 100;
}

.logo-full {
  left: 0px;
}
</style>
