<template>
  <div class="font-latos">
    <div class="min-h-screen px-4 pt-24 pb-40 bg-gray-100">
      <div class="pb-4 mx-2 bg-white border-2 rounded-lg">
        <h2
          class="items-center py-2 text-lg font-semibold text-center text-white bg-primary"
        >
           {{ nombreCliente }}
        </h2>
      </div>
      <div class="mx-2 text-sm border rounded-lg lg:grid lg:grid-cols-6">
        <div class="col-span-2 mr-1 bg-gray-300">
          <div class="container col-span-2">
            <TableCustomers @facturasPorCliente="facturasPorCliente"></TableCustomers>
          </div>
        </div>
        <div class="col-span-4 mt-10 text-sm bg-gray-300 lg:mt-0">
          <div class="container">
            <TableList :Facturas="Facturas"></TableList>
          </div>
        </div>
      </div>

       <TableTotals :Totales="Totales"></TableTotals>

    </div>
  </div>
</template>

<script>
  import TableCustomers   from "../comercial/carteraClientesPartials/customers";
  import TableList        from "../comercial/carteraClientesPartials/invoices";
  import TableTotals      from "../comercial/carteraClientesPartials/totals";

    export default {
          layout: "layoutComputron",
          name: "index",
          components: { TableCustomers, TableList, TableTotals },
          data: () => ({
                Facturas:[],
                nombreCliente:'Cartera Clientes',
                Totales : {'_00_30' : 0, 
                            '_31_60'  : 0, 
                            '_61_90' : 0, 
                            '_91_180' : 0    
                  }
          }),
          methods: {
              facturasPorCliente ( listadoFacturas, nombreCliente) {
                this.nombreCliente = nombreCliente;
                this.Facturas      = listadoFacturas;
                this.totalesCartera();
              },
              totalesCartera () {
                  this.Facturas.forEach((item) => {
                      this.Totales['_00_30']  += parseFloat(item._00_30 )    ;
                      this.Totales['_31_60']  += parseFloat(item._31_60 )    ;
                      this.Totales['_61_90']  += parseFloat(item._61_90 )    ;
                      this.Totales['_91_180'] += parseFloat(item._91_180 )    ;
              });
          },
      }
    }

</script>

<style>
    .margen {
      margin-right: 14px;
      margin-left: -1px;
      margin-bottom: -1px;
    }
</style>
