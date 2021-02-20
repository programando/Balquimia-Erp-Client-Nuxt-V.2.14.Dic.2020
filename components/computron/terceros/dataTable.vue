<template>
    <div class="flex flex-wrap">
      <div class="w-full">
        <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
          <li
            class="flex-auto mr-2 -mb-px text-center cursor-pointer last:mr-0"
          >
            <div
              class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
              v-on:click="toggleTabs(1)"
              v-bind:class="{
                'text-red-600 bg-white': openTab !== 1,
                'text-white bg-red-600': openTab === 1
              }"
            >
              Ultimas Ventas
            </div>
          </li>
          <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
            <div
              class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
              v-on:click="toggleTabs(2)"
              v-bind:class="{
                'text-red-600 bg-white': openTab !== 2,
                'text-white bg-red-600': openTab === 2
              }"
            >
              Pedido Generado
            </div>
          </li>
          <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
            <div
              class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
              v-on:click="toggleTabs(3)"
              v-bind:class="{
                'text-red-600 bg-white': openTab !== 3,
                'text-white bg-red-600': openTab === 3
              }"
            >
              Estado de Cuenta
            </div>
          </li>
          <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
            <div
              class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
              v-on:click="toggleTabs(4)"
              v-bind:class="{
                'text-red-600 bg-white': openTab !== 4,
                'text-white bg-red-600': openTab === 4
              }"
            >
              Observaciones de Ventas
            </div>
          </li>
          <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
            <div
              class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
              v-on:click="toggleTabs(5)"
              v-bind:class="{
                'text-red-600 bg-white': openTab !== 5,
                'text-white bg-red-600': openTab === 5
              }"
            >
              Notas Cartera
            </div>
          </li>
          <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
            <div
              class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
              v-on:click="toggleTabs(6)"
              v-bind:class="{
                'text-red-600 bg-white': openTab !== 6,
                'text-white bg-red-600': openTab === 6
              }"
            >
              Contactos
            </div>
          </li>
        </ul>
        <div
          class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
        >
          <div class="flex-auto px-4 py-5">
            <div class="tab-content tab-space">
              <div
                v-bind:class="{
                  hidden: openTab !== 1,
                  block: openTab === 1
                }"
              >
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
              <div
                v-bind:class="{
                  hidden: openTab !== 2,
                  block: openTab === 2
                }"
              >
                <p>
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service with robust ideas.
                  <br />
                  <br />
                  Dynamically innovate resource-leveling customer service for
                  state of the art customer service.
                </p>
              </div>
              <div
                v-bind:class="{
                  hidden: openTab !== 3,
                  block: openTab === 3
                }"
              >
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions without
                  functional solutions.
                </p>
              </div>
              <div
                v-bind:class="{
                  hidden: openTab !== 4,
                  block: openTab === 4
                }"
              >
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions without
                  functional solutions.
                </p>
              </div>
              <div
                v-bind:class="{
                  hidden: openTab !== 5,
                  block: openTab === 5
                }"
              >
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions without
                  functional solutions.
                </p>
              </div>
              <div
                v-bind:class="{
                  hidden: openTab !== 6,
                  block: openTab === 6
                }"
              >
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions without
                  functional solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DataTable',

  data() {
    return {
      openTab: 1,
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
    }
  },

  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    }
  }
};
</script>

<style></style>
