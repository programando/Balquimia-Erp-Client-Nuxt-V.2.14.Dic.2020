<template>
  <div class="font-latos">
    <div class="min-h-screen px-4 pt-24 pb-40 bg-gray-100">
      <div class="pb-4 mx-2 bg-white border-2 rounded-lg">
        <h2
          class="items-center py-2 text-lg font-semibold text-center text-white bg-primary"
        >
          Cartera de Clientes
        </h2>
      </div>
      <div class="mx-2 text-sm border rounded-lg lg:grid lg:grid-cols-6">
        <div class="col-span-2 mr-1 bg-gray-300">      
          <div class="container col-span-2">  
            <TableCustomers></TableCustomers>
          </div>
        </div>
        <div class="col-span-4 mt-10 text-sm bg-gray-300 lg:mt-0">
          <div class="container">
            <TableList></TableList>
          </div>
        </div>
      </div>
      <div class="flex items-center mt-1 text-sm">
          <table class="w-10/12 col-span-2 ml-40 ">
              <thead class="flex w-full text-white">
                <tr class="grid w-full grid-cols-7 border">
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black"
                  >
                    0 - 30 dias
                  </th>
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black "
                  >
                    31 - 60 dias
                  </th>
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
                  >
                    61 - 90 dias
                  </th>
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
                  >
                    90 dias o Más
                  </th>
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
                  >
                    Total Cartera
                  </th>
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
                  >
                    Cartera Vencida
                  </th>
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
                  >
                    % Cartera
                  </th>
                </tr>
              </thead>
          </table>
      </div>
      <div class="flex items-center -mt-1 text-sm">
          <label class="px-10 py-2 ml-6 text-lg text-white border-gray-400 bg-primary">Totales</label>
          <table class="w-10/12 col-span-2 text-left">
              <thead class="flex w-full text-white">
                <tr class="grid w-full grid-cols-7 border">
                  <th
                    class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
                  >
                    123123
                  </th>
                  <th
                    class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
                  >
                    2143423432
                  </th>
                  <th
                    class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black "
                  >
                    23424
                  </th>
                  <th
                    class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
                  >
                    23424444
                  </th>
                  <th
                    class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
                  >
                    435345345435
                  </th>
                  <th
                    class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
                  >
                    Cartera Vencida
                  </th>
                  <th
                    class="px-2 py-2 text-right bg-gray-700 border-t border-b border-l border-black"
                  >
                    % Cartera
                  </th>
                </tr>
              </thead>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
  import TableCustomers  from "../comercial/carteraClientesPartials/tableCustomers";
  import TableList  from "../comercial/carteraClientesPartials/tableList";
export default {
  
  layout: "layoutComputron",
  name: "index",
  components: { TableCustomers, TableList },
  data: ()=> ({

  }),
};
</script>

<style>
.margen {
  margin-right: 14px;
  margin-left: -1px;
  margin-bottom: -1px;
}
</style>
