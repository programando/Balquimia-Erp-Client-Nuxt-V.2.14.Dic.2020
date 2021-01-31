<template>
  <div class="pb-10 bg-white border-2 lg:mx-20">
    <h2
      class="py-2 text-lg font-semibold text-center text-white uppercase bg-primary"
    >
      Registro de Pedidos
    </h2>
    <div class="flex">
      <div class="mt-2 mr-6">
      <label class="block mx-10">Cliente</label>
      <i class="mx-2 fa fa-search"></i>
      <input
        type="text"
        class="px-4 py-1 border "
        placeholder="Nombre del Cliente"
      />
    </div>
    <div class="mt-2">
      <label class="block">Sucursal</label>

      <input
        type="text"
        class="px-4 py-1 border"
        placeholder="Sucursal"
      />
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "RegistroPedidos",
  components: {},
};
</script>

<style>
</style>