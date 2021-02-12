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
        <div class="col-span-2 mr-1 bg-gray-300">
          <div class="container col-span-2">  
            <div class="px-4 py-2 ">
              <label class="font-semibold text-extra">Buscar</label>
              <input class="w-5/6 ml-2 rounded-lg" type="text" />
            </div>
            <table class="w-full col-span-2 text-left">
              <thead class="flex w-full text-white border">
                <tr class="flex w-full margen">
                  <th
                    class="flex justify-center w-3/5 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
                  >
                    Fecha
                  </th>
                  <th
                    class="flex justify-center w-2/5 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
                  >
                    Factu
                  </th>
                </tr>
              </thead>
              <tbody
                class="flex flex-col w-full overflow-y-scroll bg-grey-light"
                style="height: 50vh"
              >
                <tr class="flex w-full bg-white ">
                  <td
                    class="w-3/5 px-2 py-1 border-t border-b border-l border-gray-400"
                  >
                    Dogs
                  </td>
                  <td class="w-2/5 px-2 py-1 border border-gray-400 ">
                    Cats
                  </td>
                </tr>
                <tr class="flex w-full bg-white ">
                  <td
                    class="w-3/5 px-2 py-1 border-t border-b border-l border-gray-400"
                  >
                    Dogs
                  </td>
                  <td class="w-2/5 px-2 py-1 border border-gray-400 ">
                    Cats
                  </td>
                </tr>
                <tr class="flex w-full bg-white ">
                  <td
                    class="w-3/5 px-2 py-1 border-t border-b border-l border-gray-400"
                  >
                    Dogs
                  </td>
                  <td class="w-2/5 px-2 py-1 border border-gray-400 ">
                    Cats
                  </td>
                </tr>
                <tr class="flex w-full bg-white ">
                  <td
                    class="w-3/5 px-2 py-1 border-t border-b border-l border-gray-400"
                  >
                    Dogs
                  </td>
                  <td class="w-2/5 px-2 py-1 border border-gray-400 ">
                    Cats
                  </td>
                </tr>
                <tr class="flex w-full bg-white ">
                  <td
                    class="w-3/5 px-2 py-1 border-t border-b border-l border-gray-400"
                  >
                    Dogs
                  </td>
                  <td class="w-2/5 px-2 py-1 border border-gray-400 ">
                    Cats
                  </td>
                </tr>
                <tr class="flex w-full bg-white ">
                  <td
                    class="w-3/5 px-2 py-1 border-t border-b border-l border-gray-400"
                  >
                    Dogs
                  </td>
                  <td class="w-2/5 px-2 py-1 border border-gray-400 ">
                    Cats
                  </td>
                </tr>
                <tr class="flex w-full bg-white ">
                  <td
                    class="w-3/5 px-2 py-1 border-t border-b border-l border-gray-400"
                  >
                    Dogs
                  </td>
                  <td class="w-2/5 px-2 py-1 border border-gray-400 ">
                    Cats
                  </td>
                </tr>
                <tr class="flex w-full bg-white ">
                  <td
                    class="w-3/5 px-2 py-1 border-t border-b border-l border-gray-400"
                  >
                    Dogs
                  </td>
                  <td class="w-2/5 px-2 py-1 border border-gray-400 ">
                    Cats
                  </td>
                </tr>
                <tr class="flex w-full bg-white ">
                  <td
                    class="w-3/5 px-2 py-1 border-t border-b border-l border-gray-400"
                  >
                    Dogs
                  </td>
                  <td class="w-2/5 px-2 py-1 border border-gray-400 ">
                    Cats
                  </td>
                </tr>
                
                
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-span-4 mt-10 bg-gray-300 lg:mt-0">
          <div class="container">
            <table class="w-full text-left">
              <thead class="flex w-full text-white border">
                <tr class="flex w-full margen">
                  <th
                    class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
                  >
                    Fecha
                  </th>
                  <th
                    class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
                  >
                    Factu
                  </th>
                  <th
                    class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
                  >
                    Valor
                  </th>
                  <th
                    class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
                  >
                    Plazo 
                  </th>
                  <th
                    class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
                  >
                    Lleva
                  </th>
                  <th
                    class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
                  >
                    0 - 30
                  </th>
                  <th
                    class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
                  >
                    31 - 60
                  </th>
                  <th
                    class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
                  >
                    61 - 90
                  </th>
                  <th
                    class="flex justify-center w-1/4 px-2 py-2 border border-gray-700 bg-primary"
                  >
                    90 o Más
                  </th>
                </tr>
              </thead>
              <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
              <tbody
                class="flex flex-col w-full overflow-y-scroll bg-grey-light"
                style="height: 55vh;"
              >
                <tr class="flex w-full bg-white ">
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400"
                  >
                    Dogs
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400 "
                  >
                    Cats
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400 "
                  >
                    Birds
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400 "
                  >
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400 "
                  >
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400 "
                  >
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400 "
                  >
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400 "
                  >
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-t border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
                <tr class="flex w-full bg-white">
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400">
                    Dogs
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Cats
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Birds
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td class="w-1/4 px-2 py-1 border-b border-l border-gray-400 ">
                    Fish
                  </td>
                  <td
                    class="w-1/4 px-2 py-1 border-b border-l border-r border-gray-400 "
                  >
                    Fish
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
      <div class="flex items-center mt-1">
          <table class="w-full col-span-2 ml-40 text-left">
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
      <div class="flex items-center -mt-1">
          <label class="px-10 py-2 ml-6 text-lg text-white border-gray-400 bg-primary">Totales</label>
          <table class="w-full col-span-2 text-left">
              <thead class="flex w-full text-white">
                <tr class="grid w-full grid-cols-7 border">
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black"
                  >
                    123123
                  </th>
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black "
                  >
                    2143423432
                  </th>
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
                  >
                    23424
                  </th>
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
                  >
                    23424444
                  </th>
                  <th
                    class="flex justify-center py-2 bg-gray-700 border-t border-b border-l border-black w-1/7"
                  >
                    435345345435
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
    </div>
  </div>
</template>
<script>
export default {
  layout: "layoutComputron",
  name: "index",
  components: {},
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
