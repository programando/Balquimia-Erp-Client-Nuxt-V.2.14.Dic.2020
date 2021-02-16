<template>
  <div>
    <div class="px-4 py-2 ">
      <label class="font-semibold text-extra">Buscar :</label>
      <input class="w-5/6 px-2 py-1 ml-2 rounded-lg" type="text" v-model="busqueda" placeholder="Buscar Clientes" />
    </div>
    <table class="w-full col-span-2 text-left">
      <thead class="flex w-full text-white margen">
        <tr class="flex w-full ">
          <th
            class="flex justify-center w-4/6 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
          >
            Cliente
          </th>
          <th
            class="flex justify-center w-2/6 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
          >
            Cartera
          </th>
        </tr>
      </thead>
      <tbody
        class="flex flex-col w-full overflow-y-scroll bg-grey-light"
        style="height: 50vh"
      >
        <tr
          v-for="cliente in buscarCliente"
          :key="cliente.id"
          class="flex w-full bg-white cursor-pointer "
          @click="buscarFaturasCliente(cliente.id)"
        >
          <td
            class="w-4/6 px-2 py-1 border-t border-b border-l border-gray-400"
          >
            {{ cliente.nombre | Capitalize }}
          </td>
          <td class="w-2/6 px-2 py-1 text-right border border-gray-400">
            {{ cliente.deuda | NumeroEntero }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data: () => ({
    clientes: [
      { id: "0", nombre: "alfredo lopez", deuda: 452525 },
      { id: "1", nombre: "jose gonzalez", deuda: 952525 },
      { id: "2", nombre: "juan arribas", deuda: 952525 },
      { id: "3", nombre: "carlos queiroz", deuda: 952525 },

    ],
    busqueda: ''
  }),

  methods: {
    buscarFaturasCliente(idCliente) {
      alert(idCliente);
    }
  },

  computed: {

    // pasar el varlo de la busqueda a minuscula
    busquedaMin(){
      return this.busqueda.toLowerCase()
      
    },

    // aplicar un filtro con el valor de la busqueda ya en minuscula
    buscarCliente() {
      return this.clientes.filter((cliente)=> {
        return cliente.nombre.match(this.busquedaMin);
      })
    }
  },
};
</script>
<style scoped>
.margen {
  /* margin-right: 40px; */
  /* margin-left: 40px; */
  padding-right: 11px;
}
</style>
