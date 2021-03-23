<template>
  <div>
    <table class="w-full text-left">
    <thead class="flex w-full text-xs text-white border margen">
      <tr class="flex w-full">
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Lote
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Ord.Cpra
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Factura
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Plazo
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          fecha
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Producto
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Present.
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Cant.
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Prec.Base
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Flete
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Financ.
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          My.Valor
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Dscto.
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Vr.unit
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Nota Cred
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
        >
          Sub Total
        </th>
        <th
          class="flex justify-center w-1/4 px-2 py-2 border border-gray-700 bg-primary"
        >
          Vr. Factura
        </th>
      </tr>
    </thead>
    <tbody
      class="flex flex-col w-full overflow-y-scroll text-xs bg-white"
      style="height: 64vh;"
    >
      <tr v-for="Factura in Facturas" :key="Factura.id" class="flex w-full bg-white ">
        <td class="w-1/4 px-2 py-1 border-t border-b border-l border-gray-400 border-l-t ">
           {{  }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400">
          {{  }} - {{ }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400">
          {{ }} 
        </td>

        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{ }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{  }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{  }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{  }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-gray-400 ">
          {{  }}
        </td>
        <td class="w-1/4 px-2 py-1 text-right border-t border-b border-l border-r border-gray-400 " >
          {{  }}
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'HistoricoVentas'
}
</script>

<style>

</style>