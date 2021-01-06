<template>
  <!-- Navbar en pantalla completa, en pantalla pequeña esta oculto -->
  <nav class="flex ">
    <ul class="flex items-center justify-center pt-5 xl:mr-40">
      <Inicio></Inicio>
      <Productos></Productos>
      <Servicios></Servicios>
      <Experiencia></Experiencia>
      <Contacto></Contacto>
    </ul>

    <ul class="flex items-center justify-center">
      <Computron></Computron>
      <Carrito></Carrito>
       
    </ul>
  </nav>
</template>

<script>
import Carrito        from "@/components/home/navOptions/carrito";
import Computron      from "@/components/home/navOptions/computron";
import Contacto       from "@/components/home/navOptions/contacto";
import Experiencia    from "@/components/home/navOptions/experiencia";
import Idioma         from "@/components/home/navOptions/idioma";
import Inicio         from "@/components/home/navOptions/inicio";
import Productos      from "@/components/home/navOptions/productos";
import Servicios      from "@/components/home/navOptions/servicios";
 
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
     
  }
};
</script>
