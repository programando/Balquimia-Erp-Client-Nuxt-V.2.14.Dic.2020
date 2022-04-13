<template>
  <!-- Navbar en pantallas pequeñas y medianas -->
  <nav class="px-4 py-3 bg-white">
    <ul class="pt-4 text-base">
      <SimpleLink  textMenu='Inicio'    urlDestino='/'    :responisve = "true"></SimpleLink>    <!-- / -->
      <SimpleLink  textMenu='Productos' urlDestino='/store/productos'    :responisve = "true"></SimpleLink>    <!-- "/store/productos" -->
      <SimpleLink  textMenu='Servicios' urlDestino='/home/servicios'    :responisve = "true"></SimpleLink>    <!-- "/home/servicios" -->
      <SimpleLink  textMenu='Contacto'    urlDestino='/home/contacto'    :responisve = "true"></SimpleLink>    <!-- "/home/contacto" --> 
    </ul>
    
    <!--
    <ul class="mt-4">
      <Computron :responsive = "true"></Computron>
      <Carrito   :responsive = "true"> </Carrito>
    </ul>
    -->
    
  </nav>
</template>

<script>
 
import Carrito        from "@/components/home/navOptions/carrito";
import SimpleLink     from "@/components/library/links/simple";
 import Computron         from "@/components/home/navOptions/computron";

export default {
  data: () => ({}),
  components: {

    Carrito,Computron,
    SimpleLink
     
  }
};
</script>
