<template>
  <div class="font-latos">
    <div class="min-h-screen px-4 pb-40 bg-gray-100 pt-36">
      <div class="mx-2">
        <p class="mx-10 text-lg font-bold lg:text-xl">Comercial</p>
        <div
          class="grid grid-cols-1 gap-8 mx-6 mt-6 lg:gap-2 lg:mx-0 xl:mx-4 xl:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          <CardDash
            text="Cartera"
            urlImg="/images/dashboard/cartera.svg"
            urlLink="#"
          ></CardDash>
          <CardDash
            text="Registro de Pedidos"
            urlImg="/images/dashboard/web-search.svg"
            urlLink="/computron/comercial/pedidos-registro"
          ></CardDash>
          <CardDash
            text="Ventas Clientes"
            urlImg="/images/dashboard/sales.svg"
            urlLink="#"
          ></CardDash>
          <CardDash
            text="Lista de Precios"
            urlImg="/images/dashboard/lista-precios.svg"
            urlLink="#"
          ></CardDash>
          <CardDash
            text="Autorización Cartera"
            urlImg="/images/dashboard/autorizacion-cartera.svg"
            urlLink="#"
          ></CardDash>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardDash from "@/components/computron/cardDash";
export default {
  layout: "layoutComputron",
  name: "index",
  components: {
    CardDash,
  },

  data() {
    return {};
  },
};
</script>
