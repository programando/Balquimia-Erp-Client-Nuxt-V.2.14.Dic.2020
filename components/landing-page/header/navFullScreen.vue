<template>
  <!-- Navbar en pantalla completa, en pantalla pequeña esta oculto -->
  <nav class="flex ">
    <ul class="flex justify-center items-center  xl:mr-64">
      <Inicio></Inicio>
      <Productos></Productos>
      <Servicios></Servicios>
      <Experiencia></Experiencia>
      <Contacto></Contacto>
    </ul>

    <ul class="flex justify-center items-center">
      <Idioma></Idioma>
      <Carrito></Carrito>
      <Clientes></Clientes>
    </ul>
  </nav>
</template>

<script>
import Inicio from "@/components/landing-page/navOptions/inicio";
import Productos from "@/components/landing-page/navOptions/productos";
import Servicios from "@/components/landing-page/navOptions/servicios";
import Experiencia from "@/components/landing-page/navOptions/experiencia";
import Contacto from "@/components/landing-page/navOptions/contacto";
import Idioma from "@/components/landing-page/navOptions/idioma";
import Carrito from "@/components/landing-page/navOptions/carrito";
import Clientes from "@/components/landing-page/navOptions/clientes";
export default {
  data: () => ({}),
  components: {
    Inicio,
    Productos,
    Servicios,
    Experiencia,
    Contacto,
    Idioma,
    Carrito,
    Clientes
  }
};
</script>
