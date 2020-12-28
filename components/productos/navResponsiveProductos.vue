<template>
  <!-- Navbar en pantallas pequeñas y medianas -->
  <nav class="px-4 py-3 bg-white">
    <ul class="pt-4 text-base">
      <InocuidadAlimentaria></InocuidadAlimentaria>
      <ArtesGraficas></ArtesGraficas>
      <Automotriz></Automotriz>
      <Hotelera></Hotelera>
      <MantenimientoIndustrial></MantenimientoIndustrial>
      <MateriasPrimas></MateriasPrimas>
      <SanidadPortatil></SanidadPortatil>
    </ul>
    <ul class="mt-4">
      <Idioma :responsive="true"> </Idioma>
      <Carrito :responsive="true"> </Carrito>
      <Clientes :responsive="true"> </Clientes>
    </ul>
  </nav>
</template>

<script>
import InocuidadAlimentaria from "@/components/productos/menu/inocuidadAlimentaria";
import ArtesGraficas from "@/components/productos/menu/artesGraficas"
import Automotriz from "@/components/productos/menu/automotriz"
import Hotelera from "@/components/productos/menu/hotelera"
import MantenimientoIndustrial from "@/components/productos/menu/mantenimientoIndustrial"
import MateriasPrimas from "@/components/productos/menu/materiasPrimas"
import SanidadPortatil from "@/components/productos/menu/sanidadPortatil"
import Idioma from "@/components/inicio/navOptions/idioma";
import Carrito from "@/components/inicio/navOptions/carrito";
import Clientes from "@/components/inicio/navOptions/clientes";

export default {
  data: () => ({}),
  components: {
    InocuidadAlimentaria,
    ArtesGraficas,
    Automotriz,
    Hotelera,
    MantenimientoIndustrial,
    MateriasPrimas,
    SanidadPortatil,
    Idioma,
    Carrito,
    Clientes
  }
};
</script>