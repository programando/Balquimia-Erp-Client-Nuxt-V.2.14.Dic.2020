<template>
    <table class="w-full text-left">
      <thead class="flex w-full text-white border margen">
        <tr class="flex w-full">
          <th
            class="flex justify-center w-2/6 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
          >
            Fecha
          </th>
          <th
            class="flex justify-center w-2/6 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
          >
            Factura
          </th>
          <th
            class="flex justify-center w-4/6 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
          >
            Producto
          </th>
          <th
            class="flex justify-center w-4/6 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
          >
            Presentacion
          </th>
          <th
            class="flex justify-center w-2/6 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
          >
            Cantida
          </th>
          <th
            class="flex justify-center w-2/6 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
          >
            $Base
          </th>
          <th
            class="flex justify-center w-2/6 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
          >
            Flete
          </th>
          <th
            class="flex justify-center w-2/6 px-2 py-2 border-t border-b border-l border-gray-700 bg-primary"
          >
            Mayor Vr
          </th>
          <th
            class="flex justify-center w-2/6 px-2 py-2 border border-gray-700 bg-primary"
          >
            Vr.Unit
          </th>
          <th
            class="flex justify-center w-1/6 px-2 py-2 border border-gray-700 bg-primary"
          ></th>
        </tr>
      </thead>
      <tbody
        class="flex flex-col w-full overflow-y-scroll text-sm bg-grey-light"
        style="height: 55vh;"
      >
        <tr
          v-for="producto in productos"
          :key="producto.id"
          class="flex w-full bg-white"
        >
          <td
            class="w-2/6 px-2 pt-2 border-t border-b border-l border-gray-400"
          >
            {{ producto.fecha }}
          </td>
          <td
            class="w-2/6 px-2 pt-2 border-t border-b border-l border-gray-400 "
          >
            {{ producto.factura }}
          </td>
          <td
            class="w-4/6 px-2 pt-2 text-right border-t border-b border-l border-gray-400"
          >
            {{ producto.producto }}
          </td>
          <td
            class="w-4/6 px-2 pt-2 text-right border-t border-b border-l border-gray-400 "
          >
            {{ producto.presentacion }}
          </td>
          <td
            class="w-2/6 px-2 pt-2 text-right border-t border-b border-l border-gray-400 "
          >
            {{ producto.cantidad }}
          </td>
          <td
            class="w-2/6 px-2 pt-2 text-right border-t border-b border-l border-gray-400 "
          >
            {{ producto.base }}
          </td>
          <td
            class="w-2/6 px-2 pt-2 text-right border-t border-b border-l border-gray-400 "
          >
            {{ producto.flete }}
          </td>
          <td
            class="w-2/6 px-2 pt-2 text-right border-t border-b border-l border-gray-400 "
          >
            {{ producto.mayor }}
          </td>
          <td
            class="w-2/6 px-2 pt-2 text-right border-t border-b border-l border-r border-gray-400 "
          >
            {{ producto.unit }}
          </td>
          <td
            class="w-1/6 px-2 pt-2 text-right border-t border-b border-l border-r border-gray-400 "
          >
            <ButtonIcon
              urlIcon="/images/dashboard/carrito-compras.svg"
            ></ButtonIcon>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: "clienteUltimasVentas",
  props: {
    
  },
  data() {
    return {
      productos: [
        {
          id: 0,
          fecha: "04/10/2015",
          factura: "256388",
          producto: "RAX SHAMPOO",
          presentacion: "20 LTS ORIGINAL",
          cantidad: 6,
          base: "117,311",
          flete: "0",
          mayor: "20,702",
          unit: "138,013"
        }
      ]
    };
  }
};
</script>

<style>
.margen {
  padding-right: 14px;
}
</style>
