<template>
  <!-- Navbar en pantalla completa, en pantalla pequeña esta oculto -->
  <nav class="flex ">
    <ul class="flex items-center justify-center xl:mr-64">
      <Inicio></Inicio>
      <Productos></Productos>
      <Servicios></Servicios>
      <Experiencia></Experiencia>
      <Contacto></Contacto>
    </ul>

    <ul class="flex items-center justify-center">
      <Idioma></Idioma>
      <Carrito></Carrito>
      <Clientes></Clientes>
    </ul>
  </nav>
</template>

<script>
import Inicio from "@/components/inicio/navOptions/inicio";
import Productos from "@/components/inicio/navOptions/productos";
import Servicios from "@/components/inicio/navOptions/servicios";
import Experiencia from "@/components/inicio/navOptions/experiencia";
import Contacto from "@/components/inicio/navOptions/contacto";
import Idioma from "@/components/inicio/navOptions/idioma";
import Carrito from "@/components/inicio/navOptions/carrito";
import Clientes from "@/components/inicio/navOptions/clientes";
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
