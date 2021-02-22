<template>
  <div class="flex flex-wrap mx-4 font-latos">
    <div class="w-full">
      <ul class="flex flex-row flex-wrap pt-1 pb-2 mb-0 list-none">
        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-3 font-bold leading-normal rounded shadow-lg"
                @click="toggleTabs(1)"
                :class="{
                    'text-red-600 bg-white': openTab !== 1,
                    'text-white bg-red-600': openTab === 1
                }"
          >
            Ultimas Ventas
          </div>
        </li>
       
        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-3 font-bold leading-normal rounded shadow-lg"
                @click="toggleTabs(2)"
                :class="{
                    'text-red-600 bg-white': openTab !== 2,
                    'text-white bg-red-600': openTab === 2
                }"
          >
            Pedido Generado
          </div>
        </li>

        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-3 font-bold leading-normal rounded shadow-lg"
                @click="toggleTabs(3)"
                :class="{
                    'text-red-600 bg-white': openTab !== 3,
                    'text-white bg-red-600': openTab === 3
                }"
          >
            Estado de Cuenta
          </div>
        </li>
        
        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-3 font-bold leading-normal rounded shadow-lg"
                @click="toggleTabs(4)"
                :class="{
                    'text-red-600 bg-white': openTab !== 4,
                    'text-white bg-red-600': openTab === 4
                }"
          >
            Observaciones de Ventas
          </div>
        </li>
        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-3 font-bold leading-normal rounded shadow-lg"
                @click="toggleTabs(5)"
                :class="{
                    'text-red-600 bg-white': openTab !== 5,
                    'text-white bg-red-600': openTab === 5
                }"
          >
            Notas Cartera
          </div>
        </li>
        <li class="flex-auto -mb-px text-center cursor-pointer last:mr-0">
          <div class="block px-5 py-3 font-bold leading-normal rounded shadow-lg"
                @click="toggleTabs(6)"
                :class="{
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
        <div class="flex-auto">
          <div class="tab-content tab-space">
            <div :class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <ClienteUltimasVentas></ClienteUltimasVentas>
            </div>
            <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <p>
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa voluptate veniam nihil. Alias modi sit, quasi dolore molestias odit beatae nostrum, accusamus ex iste itaque obcaecati tempora placeat dignissimos.
                Labore praesentium doloribus illum, sequi voluptates id ex eius optio. Explicabo perferendis quam officiis, deserunt repellat placeat nostrum ab quas cupiditate perspiciatis, animi dolor tenetur accusantium! Porro harum accusantium alias.
                Aspernatur libero voluptatem soluta consequuntur molestiae quod! Ut corporis at vero iusto fuga fugiat, facere tempora dolorem, perferendis animi aliquam fugit quod nobis commodi veniam sequi possimus modi ad! Quas?
                Sed dolorem fuga enim. Culpa, ab accusantium illo dolores odit, omnis magnam, maiores dignissimos repudiandae iusto facilis molestiae minus nisi voluptatibus ut cum debitis dolore tenetur porro asperiores numquam quas!
                Voluptatibus magni aspernatur rem, ea quia, et a magnam suscipit vero voluptatum sed cum recusandae ipsam qui enim aut dignissimos at pariatur quod voluptates minima! Necessitatibus perspiciatis laudantium tenetur harum?
                Esse inventore nesciunt in itaque earum rerum nam voluptatem aliquam mollitia, accusamus molestias facilis? Excepturi deserunt soluta veniam praesentium est distinctio voluptates fugit, cupiditate earum officia, harum cumque delectus blanditiis.
                Repellendus porro reiciendis possimus consequuntur saepe molestiae dicta maiores corporis, numquam ex ullam voluptatibus architecto, qui dolor sequi dolores non officiis doloremque vitae id officia magni? Enim debitis autem molestias?
                Eaque vel natus soluta itaque, dicta recusandae atque vero maxime unde sequi tempora ad cupiditate odio ipsa repellendus enim dolore molestias autem exercitationem sint quis aliquid. Cum, ratione ad! Enim.
                Dolore maiores alias doloribus laboriosam ipsum facere quos at quaerat nihil cum atque dicta soluta, illum ex tenetur quod nisi dignissimos eveniet laborum aut vitae. Quos tempora pariatur cupiditate quibusdam.
                Voluptatem, assumenda labore veniam eum esse, perspiciatis beatae perferendis sint quaerat nostrum non natus. Harum minima esse omnis explicabo qui molestiae obcaecati, voluptatem reprehenderit, hic aspernatur consectetur dolorum, sed similique!
              </p>
            </div>
            <div :class="{ hidden: openTab !== 3, block: openTab === 3 }">
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
            <div :class="{ hidden: openTab !== 4, block: openTab === 4 }">
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
            <div :class="{ hidden: openTab !== 5, block: openTab === 5}">
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
            <div :class="{ hidden: openTab !== 6, block: openTab === 6}">
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
import ClienteUltimasVentas from '@/components/computron/terceros/clienteUltimasVentas'
export default {
  name: "DataTable",
  components: {
    ClienteUltimasVentas
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
