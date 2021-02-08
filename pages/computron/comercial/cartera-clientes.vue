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
      <div class="mx-2 border rounded-lg lg:grid lg:grid-cols-6">
        <div class="col-span-2 mr-1 bg-gray-300 lg:grid lg:grid-cols-2">
          <div class="col-span-2 px-4 py-2">
            <input class="w-full" type="text" />
          </div>
          <div class="col-span-2">
            <table class="w-full text-left">
		        <thead class="flex w-full overflow-y-scroll text-white bg-grey-light">
              <tr class="flex items-center justify-center w-full">
                <th class="w-2/4 px-2 py-1 bg-gray-700 border border-black">Cliente</th>
                <th class="w-2/4 px-2 py-1 bg-gray-700 border-t border-b border-r border-black">Deuda</th> 
              </tr>
		        </thead>
    
		        <tbody class="flex flex-col w-full overflow-y-scroll bg-grey-light" style="height: 50vh;">
			        <tr class="flex w-full">
                <td class="w-2/4 px-2 py-1 bg-white border-t border-b border-l border-black">Dogs</td>
                <td class="w-2/4 px-2 py-1 bg-white border-t border-b border-l border-r border-black">Cats</td>
              </tr>
              <tr class="flex w-full">
                <td class="w-2/4 px-2 py-1 bg-white border-b border-l border-black">Dogs</td>
                <td class="w-2/4 px-2 py-1 bg-white border-b border-l border-r border-black">Cats</td>
              </tr>
            </tbody>
            </table>
          </div>
          
        </div>
        <div class="col-span-4 bg-gray-300 ">
          <div class="container">
            <table class="w-full text-left">
              <thead
                class="flex w-full overflow-y-scroll text-white border bg-grey-light"
              >
                <tr class="flex w-full ">
                  <th
                    class="w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
                  >
                    Fecha
                  </th>
                  <th
                    class="w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
                  >
                    Factu
                  </th>
                  <th
                    class="w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
                  >
                    Valor
                  </th>
                  <th
                    class="w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
                  >
                    Plazo
                  </th>
                  <th
                    class="w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
                  >
                    Lleva
                  </th>
                  <th
                    class="w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
                  >
                    0 - 30
                  </th>
                  <th
                    class="w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
                  >
                    31 - 60
                  </th>
                  <th
                    class="w-1/4 px-2 py-2 bg-gray-700 border-t border-b border-l border-black"
                  >
                    61 - 90
                  </th>
                  <th
                    class="w-1/4 px-2 py-2 bg-gray-700 border border-black"
                  >
                    90 o Más
                  </th>
                </tr>
              </thead>
              <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
              <tbody
                class="flex flex-col w-full overflow-y-scroll bg-grey-light"
                style="height: 50vh;"
              >
                <tr class="flex w-full bg-white ">
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-black"
                  >
                    Dogs
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-black "
                  >
                    Cats
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-black "
                  >
                    Birds
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-black "
                  >
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-black "
                  >
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-black "
                  >
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-black "
                  >
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-black "
                  >
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-black ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-black "
                  >
                    Fish
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "layoutComputron",
  name: "index",
  components: {}
};
</script>
