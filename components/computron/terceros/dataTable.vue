<template>
  <div class="flex flex-wrap font-latos">
    <div class="w-full">
      <ul class="flex flex-row flex-wrap pt-1 pb-2 mb-0 list-none">
        <li class="flex-auto mr-2 -mb-px text-center cursor-pointer last:mr-0">
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
        class="relative flex flex-col w-full min-w-0 mb-2 break-words bg-white rounded shadow-lg"
      >
        <div class="flex-auto px-4">
          <div class="tab-content tab-space">
            <div
              v-bind:class="{
                hidden: openTab !== 1,
                block: openTab === 1
              }"
            >
              <TablaUltimasVentas></TablaUltimasVentas>
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
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
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
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
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
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
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
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
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
import TableUltimasVentas from '@/components/computron/terceros/tablas/tablaUltimasVentas'
export default {
  name: "DataTable",
  components: {
    TableUltimasVentas
  },

  data() {
    return {
      openTab: 1,
      
    };
  },

  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    }
  }
};
</script>

<style>

</style>
