<template>
  <table class="w-full text-left">
    <thead class="flex w-full text-white border margen">
      <tr class="flex w-full">
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
    
    <tbody
      class="flex flex-col w-full overflow-y-scroll bg-grey-light"
      style="height: 55vh;"
    >
      <tr v-for="producto in productos" :key="producto.id" class="flex w-full bg-white ">
        <td class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400">
          {{ producto.fecha }}
        </td>
        <td class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400 ">
          {{ producto.factura }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400">
          {{ producto.valor }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{ producto.plazo }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{ producto.lleva }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{ producto.treinta }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{ producto.treintaMas }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{ producto.sesentaMas }}
        </td>
        <td
          class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-r border-gray-400 "
        >
          {{ producto.noventaMas }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableList',

  data() {
    return {
      productos: [
        { id: 0, fecha: '04/10/2015', factura: '256388', valor: '35000', plazo: '10', lleva: '40', treinta: '25', treintaMas: '40', sesentaMas: '65', noventaMas: '85'  },
        { id: 0, fecha: '04/10/2015', factura: '256388', valor: '35000', plazo: '10', lleva: '40', treinta: '25', treintaMas: '40', sesentaMas: '65', noventaMas: '85'  }
      ]
    }
  },
};
</script>

<style>
.margen {
  padding-right: 10px;
  
}
</style>
