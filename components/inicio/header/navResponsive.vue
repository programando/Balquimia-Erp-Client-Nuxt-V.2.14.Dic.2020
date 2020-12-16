<template>
  <!-- Navbar en pantallas pequeñas y medianas -->
  <nav class="px-4 py-3 bg-white">
    <ul class="pt-4 text-base">
      <Inicio :responisve="true"></Inicio>
      <Productos :responsive="true"></Productos>
      <Servicios :responsive="true"></Servicios>
      <Experiencia :responsive="true"></Experiencia>
      <Contacto :responsive="true"></Contacto>
    </ul>
    <ul class="mt-4">
      <Idioma :responsive="true"> </Idioma>
      <Carrito :responsive="true"> </Carrito>
      <Clientes :responsive="true"> </Clientes>
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
