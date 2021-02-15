<template>
       <table class="w-full col-span-2 text-left">
          <thead
               class="flex w-full text-white margen">
                <tr class="flex w-full ">
                  <th class="flex justify-center w-4/6 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary">
                    Cliente
                  </th>
                  <th class="flex justify-center w-2/6 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary">
                    Cartera
                  </th>
                </tr>
          </thead>
          <tbody class="flex flex-col w-full overflow-y-scroll bg-grey-light" style="height: 50vh" >
                <tr v-for="cliente in terceros" :key="cliente.id" class="flex w-full bg-white cursor-pointer "
                    @click="buscarFaturasCliente (cliente.id )">
                  <td class="w-4/6 px-2 py-1 border-t border-b border-l border-gray-400" >
                    {{ cliente.nombre }}
                  </td>
                  <td class="w-2/6 px-2 py-1 text-right border border-gray-400">
                    {{ cliente.deuda | NumeroEntero }}
                  </td>
                </tr>
           </tbody>
      </table>
              
</template>
<script>
  
  export default {
      data: () =>({
            terceros : [
                    { 'id':'0', 'nombre':'clientes 1', 'deuda':452525 },
                    { 'id':'1', 'nombre':'clientes 2', 'deuda':952525 },
            ]
      }),
      
      methods: {
            buscarFaturasCliente ( idCliente ) {
                alert (idCliente );
            }
      },  

  }
</script>
<style scoped>
.margen {
  /* margin-right: 40px; */
  /* margin-left: 40px; */
  padding-right: 11px;

  
}
</style>
