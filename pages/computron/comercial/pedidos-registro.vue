<template>
  <div class="font-latos">
    <div class="min-h-screen px-4 pt-24 pb-40 bg-gray-100">
      <div class="pb-10 mx-2 bg-white border-2 rounded-lg">
        <h2
          class="py-2 text-lg font-semibold text-center text-white bg-primary"
        >
          Registro de Pedidos
        </h2>
        <div class="grid gap-2 lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-2">
            <InputSearch
              textLabel="Cliente"
              placeholder="Nombre del Cliente"
              width="w-full"
            ></InputSearch>
          </div>

          <div class="mx-12 mt-2 sm:ml-16 lg:ml-2 lg:mr-4">
            <InputLabel
              textLabel="Sucursal"
              placeholder="Sucursal"
              width="w-full"
            ></InputLabel>
          </div>

          <div class="mx-12 mt-2 sm:ml-16 md:ml-15 lg:ml-4 lg:mr-4">
            <InputLabel
              textLabel="Vendedor"
              placeholder="Vendedor"
              width="w-full"
            ></InputLabel>
          </div>
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-4">
            <!-- <InputDate textLabel="Fecha Despacho" width="w-full"></InputDate> -->
            <label>Fecha Despacho</label>
            <VueTailWindPicker :init="false" @change="v => (value = v)">
              <input class="w-full px-4 py-1 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:shadow-outline focus:border-primary" v-model="value" placeholder="fecha" />
            </VueTailWindPicker>
          </div>
        </div>
        <div class="grid gap-2 lg:gap-6 md:grid-cols-2 lg:grid-cols-5 ">
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-2 lg:col-span-2">
            <InputLabel
              textLabel="Orden de Compra"
              placeholder="Numero orden de compra"
              width="w-full"
            ></InputLabel>
          </div>
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-4 lg:col-span-3">
            <InputLabel
              textLabel="Observaciones del pedido"
              placeholder="Observaciones del pedido"
              width="w-full"
            ></InputLabel>
          </div>
        </div>

        <div
          class="grid mx-10 mt-10 text-center gap 2 md:grid-cols-3 lg:grid-cols-6"
        >
          <p>Últimas Ventas</p>
          <p>Pedido Generado</p>
          <p>Estado de Cuenta</p>
          <p>Observaciones Ventas</p>
          <p>Notas Cartera</p>
          <p>Contactos</p>
        </div>

        <!-- tabla Ultimas Ventas -->
        <div>
          <table class="w-full mt-4 text-left">
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
              class="flex flex-col w-full overflow-y-scroll bg-grey-light"
              style="height: 55vh;"
            >
              <tr
                v-for="producto in productos"
                :key="producto.id"
                class="flex w-full bg-white "
              >
                <td
                  class="w-2/6 px-2 py-1 border-t border-b border-l border-gray-400"
                >
                  {{ producto.fecha }}
                </td>
                <td
                  class="w-2/6 px-2 py-1 border-t border-b border-l border-gray-400 "
                >
                  {{ producto.factura }}
                </td>
                <td
                  class="w-4/6 px-2 py-1 text-right border-t border-b border-l border-gray-400"
                >
                  {{ producto.producto }}
                </td>
                <td
                  class="w-4/6 px-2 py-1 text-right border-t border-b border-l border-gray-400 "
                >
                  {{ producto.presentacion }}
                </td>
                <td
                  class="w-2/6 px-2 py-1 text-right border-t border-b border-l border-gray-400 "
                >
                  {{ producto.cantidad }}
                </td>
                <td
                  class="w-2/6 px-2 py-1 text-right border-t border-b border-l border-gray-400 "
                >
                  {{ producto.base }}
                </td>
                <td
                  class="w-2/6 px-2 py-1 text-right border-t border-b border-l border-gray-400 "
                >
                  {{ producto.flete }}
                </td>
                <td
                  class="w-2/6 px-2 py-1 text-right border-t border-b border-l border-gray-400 "
                >
                  {{ producto.mayor }}
                </td>
                <td
                  class="w-2/6 px-2 py-1 text-right border-t border-b border-l border-r border-gray-400 "
                >
                  {{ producto.unit }}
                </td>
                <td
                  class="w-1/6 px-2 py-1 text-right border-t border-b border-l border-r border-gray-400 "
                >
                  <ButtonIcon
                    urlIcon="/images/dashboard/carrito-compras.svg"
                  ></ButtonIcon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputSearch from "@/components/library/inputs/InputSearch";
import InputLabel from "@/components/library/inputs/InputLabel";
import InputDate from "@/components/library/inputs/InputDate";
import ButtonIcon from "@/components/library/buttons/buttonIcon";
export default {
  layout: "layoutComputron",
  name: "index",
  components: {
    InputSearch,
    InputLabel,
    InputDate,
    ButtonIcon,
    VueTailWindPicker: () => import('vue-tailwind-picker'),
  },
  data() {
    return {
      isOpen: false,
      registro: false,
      fecha: "",
      value: '',
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

<style scoped>
.margen {
  padding-right: 14px;
}
</style>
