<template>
  <div>
    <div class="px-4 py-2 ">
      <label class="font-semibold text-extra">Buscar :</label>
      <input class="w-5/6 px-2 py-1 ml-2 rounded-lg focus:border-primary focus:outline-none focus:shadow-outline" type="text" v-model="busqueda" placeholder="Buscar Clientes" />
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
          :key="cliente.nro_identif"
          class="flex w-full bg-white cursor-pointer "
          @click="facturasPorCliente( cliente.nro_identif,  cliente.nom_full )"
        >
          <td
            class="w-4/6 px-2 py-1 border-t border-b border-l border-gray-400"
          >
            {{ cliente.nom_full | Capitalize }}
          </td>
          <td class="w-2/6 px-2 py-1 text-right border border-gray-400">
            {{ cliente.vr_saldo | NumeroEntero }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Terceros from "@/models/Terceros";
export default {
    
  data: () => ({
    clientes: [],
    busqueda: '',
    Facturas:[],
    
  }),
  mounted() {
      this.carteraClientes();
  },

  methods: {
    carteraClientes() {
        Terceros.carteraClientes( this.$store.state.User.User.id_terc  )
        .then( response => {
          this.clientes= response.data;
        })
    },
    facturasPorCliente( nitCliente, nombreCliente) {
        Terceros.carteraFacturasPorCliente( nitCliente)
       .then ( response => {
          this.Facturas = response.data;      
          this.$emit('facturasPorCliente',  this.Facturas, nombreCliente); 
       }) ;

    }
  },

  computed: {
    // pasar el varlo de la busqueda a minuscula
    busquedaMin(){
      return this.busqueda.toUpperCase()
      
    },

    // aplicar un filtro con el valor de la busqueda ya en minuscula
    buscarCliente() {
      return this.clientes.filter((cliente)=> {
        return cliente.nom_full.match(this.busquedaMin);
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
