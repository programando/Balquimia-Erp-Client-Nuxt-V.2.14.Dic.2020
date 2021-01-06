<template>
  <!-- Navbar en pantallas pequeñas y medianas -->
  <nav class="px-4 py-3 bg-white">
    <ul class="pt-4 text-base">
      <Inicio      :responisve = "true"></Inicio>
      <Productos   :responsive = "true"></Productos>
      <Servicios   :responsive = "true"></Servicios>
      <Experiencia :responsive = "true"></Experiencia>
      <Contacto    :responsive = "true"></Contacto>
    </ul>
    <ul class="mt-4">
      <Computron :responsive = "true"></Computron>
      <Carrito   :responsive = "true"> </Carrito>
    </ul>
  </nav>
</template>

<script>
import Inicio         from "@/components/home/navOptions/inicio";
import Productos      from "@/components/home/navOptions/productos";
import Servicios      from "@/components/home/navOptions/servicios";
import Experiencia    from "@/components/home/navOptions/experiencia";
import Contacto       from "@/components/home/navOptions/contacto";
import Carrito        from "@/components/home/navOptions/carrito";
import Computron      from "@/components/home/navOptions/computron";
 

export default {
  data: () => ({}),
  components: {
    Inicio,
    Productos,
    Servicios,
    Experiencia,
    Contacto,
    Carrito,
     
  }
};
</script>
