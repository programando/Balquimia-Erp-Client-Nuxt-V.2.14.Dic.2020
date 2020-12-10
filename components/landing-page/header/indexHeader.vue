<template>

  <div>
      <header class="fixed w-full mb-2 bg-white z-10">
        <!-- Icono de la empresa -->
        <div class="grid grid-cols-3 md:flex md:justify-between items-center">

          <nuxt-link class="col-start-2 col-end-3 ml-8 md:ml-4 mt-2"
            to="/">       
              <img class="" src="/images/landing-page/header/balquimia-logo.png" alt="logo" />
          </nuxt-link>

          <!-- Navbar en pantalla completa, en pantalla pequeña esta oculto -->
          <div class="hidden md:flex bg-white">
            <NavFullScreen></NavFullScreen>
          </div>

          <!-- Icono svg del menu hamburguesa -->
            <HamburguerIcon></HamburguerIcon>

        </div>

        <!-- un checkbox para detectar mediante CSS cuando ocultar o desplegar el menu hambueguesa -->
        <input type="checkbox" class="hidden" id="menu-togle" />

        <!-- Navbar en pantallas pequeñas y medianas -->
        <div class="hidden md:hidden md:items-center md:w-auto w-full px-8 mb-4 fixed"
            id="menu">
              <NavResponsive></NavResponsive>
        </div>
      </header>
  </div>
    
</template>

<script>
    import NavFullScreen  from '@/components/landing-page/header/navFullScreen';
    import NavResponsive  from '@/components/landing-page/header/navResponsive';
    import HamburguerIcon from '@/components/landing-page/navOptions/hamburguerIcon';
    export default {
      data: () => ({

      }),
      components : { NavFullScreen, HamburguerIcon, NavResponsive },
    }
</script>