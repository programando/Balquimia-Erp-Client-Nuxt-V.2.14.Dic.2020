<template>
  <div class="font-latos">
    <HeaderDash></HeaderDash>
    <div class="min-h-screen px-4 pb-40 bg-gray-100 pt-36">
      <div class="mx-2">
        <p class="mx-10 text-lg font-bold lg:text-xl">Comercial</p>
        <div class="grid grid-cols-1 gap-8 mx-6 mt-6 lg:gap-4 lg:mx-0 xl:mx-8 xl:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <nuxt-link to="/computron/dashboard/registroPedido">
            <div
              class="p-4 mx-4 transition-shadow bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-lg"
            >
              <div class="flex items-center justify-center space-x-4">
                <div class="rounded-md">
                  <img
                    class="h-12"
                    src="/images/dashboard/web-search.svg"
                    alt=""
                  />
                </div>
                <div class="">
                  <span class="text-gray-900 ">Registro de Pedidos</span>
                </div>
              </div>
            </div>
          </nuxt-link>

          <div
            class="p-4 mx-4 transition-shadow bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-lg"
          >
            <div class="flex items-center justify-center space-x-4">
              <div class="rounded-md">
                <img
                  class="h-12"
                  src="/images/dashboard/sales.svg"
                  alt=""
                />
              </div>
              <div class="">
                <span class="text-gray-900">Ventas por Cliente</span>
              </div>
            </div>
          </div>
          <div
            class="p-4 mx-4 transition-shadow bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-lg"
          >
            <div class="flex items-center justify-center space-x-4">
              <div class="rounded-md">
                <img
                  class="h-12"
                  src="/images/dashboard/list.svg"
                  alt=""
                />
              </div>
              <div class="">
                <span class="text-gray-900">Lista de Precios</span>
              </div>
            </div>
          </div>
          <div
            class="p-4 mx-4 transition-shadow bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-lg"
          >
            <div class="flex items-center justify-center space-x-4">
              <div class="rounded-md">
                <img
                  class="h-12"
                  src="/images/dashboard/pass.svg"
                  alt=""
                />
              </div>
              <div class="">
                <span class="text-gray-900">Autorizacíon Cartera</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


     
  </div>
</template>
<script>
import HeaderDash from '@/components/computron/HeaderDash'
export default {
  name: "index",
  components: {
    HeaderDash
  },
  data() {
    return {
      isOpen: false,
      registro: false,
      
    };
  },

  
};
</script>
<style>
.logo {
  position: relative;
  left: 6px;
  top: 20px;
  z-index: 100;
}

.logo-full {
  left: 0px;
}
</style>