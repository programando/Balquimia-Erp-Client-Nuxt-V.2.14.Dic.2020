<template>
  <div class="bg-gray-300 -mt-4 pt-56">
    <div class="mx-10 flex justify-between mb-4">
      <h2 class="text-2xl font-bold text-yellow-700 ">Productos Destacados</h2>
      <div class="hidden lg:inline mr-10">
        <img class="inline" src="/images/inicio/productosDestacados/arrL.webp" alt="fecha-izquierda">
        <img class="inline" src="/images/inicio/productosDestacados/arrR.webp" alt="fecha-derecha">
      </div>
    </div>
    <div class="mx-10 flex flex-wrap">
      <CardProductoDestacado></CardProductoDestacado>
      <CardProductoDestacado></CardProductoDestacado>
      <CardProductoDestacado></CardProductoDestacado>
      
    </div>
    
    
  </div>
</template>
<script>
import CardProductoDestacado from '@/components/inicio/productosDestacados/cardProductoDestacado'
export default {};
</script>
<style>
.fondo:hover {
  background-color: darkgoldenrod;
}

.fondo:hover > p,
h2 {
  color: white;
}

.fondo:hover > h2 {
  color: white;
}

.fondo:hover > div {
  opacity: 100;
}


</style>
