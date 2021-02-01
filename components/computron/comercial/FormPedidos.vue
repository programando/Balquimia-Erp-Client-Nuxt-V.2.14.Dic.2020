<template>
  <div class="pb-10 bg-white border-2 rounded-lg">
    <h2
      class="py-2 text-lg font-semibold text-center text-white uppercase bg-primary"
    >
      Registro de Pedidos
    </h2>
    <div class="grid gap-2 lg:gap-0 md:grid-cols-2 lg:flex">
      <div class="mt-2 ml-12 sm:ml-16 lg:ml-4 lg:mr-2">
        <label class="block ">Cliente</label>

        <input
          type="text"
          class="px-4 py-1 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:shadow-outline"
          placeholder="Nombre del Cliente"
        />
        <img class="inline h-6 cursor-pointer -ml-9 " src="/images/dashboard/search-repo.svg" alt=""/>
      </div>
      <div class="mt-2 ml-12 sm:ml-16 lg:ml-2 lg:mr-4">
        <label class="block">Sucursal</label>

        <input
          type="text"
          class="px-4 py-1 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:shadow-outline"
          placeholder="Sucursal"
        />
      </div>
      <div class="mt-2 ml-12 sm:ml-16 md:ml-15 lg:ml-4 lg:mr-4">
        <label class="block">Vendedor</label>

        <input
          type="text"
          class="px-4 py-1 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:shadow-outline"
          placeholder="Sucursal"
        />
      </div>
      <div class="mt-2 ml-12 sm:ml-16 lg:ml-4 lg:mr-4">
        <label class="block">fecha Despacho</label>

        <input
          type="date"
          class="px-4 py-1 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:shadow-outline"
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