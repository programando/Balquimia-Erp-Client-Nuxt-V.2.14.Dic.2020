<template>
  <div class="pb-10 bg-white border-2 rounded-lg">
    <h2
      class="py-2 text-lg font-semibold text-center text-white uppercase bg-primary"
    >
      Registro de Pedidos
    </h2>
    <div class="grid gap-2 lg:gap-0 md:grid-cols-2 lg:flex lg:justify-center ">
      <div class="mt-2 ml-4 sm:ml-8 lg:ml-2 lg:mr-2 ">
        <label class="block mx-5">Cliente</label>
        <i class="mx-2 lg:mx-0 fa fa-search"></i>
        <input
          type="text"
          class="px-4 py-1 text-sm border "
          placeholder="Nombre del Cliente"
        />
      </div>
      <div class="mt-2 ml-12 sm:ml-16 lg:ml-2 lg:mr-4">
        <label class="block">Sucursal</label>

        <input
          type="text"
          class="px-4 py-1 text-sm border"
          placeholder="Sucursal"
        />
      </div>
      <div class="mt-2 ml-12 sm:ml-16 md:ml-15 lg:ml-4 lg:mr-4">
        <label class="block">Vendedor</label>

        <input
          type="text"
          class="px-4 py-1 text-sm border"
          placeholder="Sucursal"
        />
      </div>
      <div class="mt-2 ml-12 sm:ml-16 lg:ml-4 lg:mr-4">
        <label class="block">fecha Despacho</label>

        <input
          type="date"
          class="px-4 py-1 text-sm border"
          placeholder="Sucursal"
          v-model="fecha"
        />
      </div>
      <button @click="ver"> Ver </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistroPedidos",
  components: {},
  data: () => ({
      fecha:''
  }),
  methods:{
        ver() {
            console.log( this.fecha );
        }
  },
};
</script>

<style>
</style>