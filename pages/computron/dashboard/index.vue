<template>
  <div>
    <div class="fixed z-20 w-full">
      <header class="bg-white">
        <!-- Icono de la empresa -->
        <div class="flex justify-between -mt-3 lg:mt:0 lg:py-0">
          <div class="flex flex-grow lg:flex-grow-0">
            <div class="">
              <img
                class="h-16 md:h-20 logo lg:ml-10 lg:h-auto"
                src="/images/home/header/balquimia-logo.png"
                alt="logo"
              />
            </div>
          </div>
          <div class="flex items-center justify-center mt-6 mr-6">
            <div class="mx-1 cursor-pointer md:mx-2">
              <img
                class="h-6 md:h-8"
                src="/images/dashboard/headerDash/notification-repo.svg"
                alt=""
              />
            </div>
            <div class="mx-1 cursor-pointer md:mx-2">
              <img
                class="h-6 md:h-8"
                src="/images/dashboard/headerDash/email-repo.svg"
                alt=""
              />
            </div>
            <div class="flex items-center mx-1 cursor-pointer md:mx-2">
              <p class="mx-2">Jhon Montaño</p>
              <img
                class="h-8 md:h-12"
                src="/images/dashboard/headerDash/user-repo.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <div class="-ml-1 lg:block lg:ml-4">
        <img
          src="/images/home/header/arr.png"
          alt="arr1"
          class="h-7 lg:h-10 lg:mt-0"
        />
      </div>
    </div>
    <div class="px-4 pt-32 pb-40 bg-gray-100">
      <div class="mx-2">
        <p class="text-lg font-bold lg:text-xl">Comercial</p>
        <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
          <nuxt-link to="/computron/dashboard/registroPedido">
            <div
              class="p-4 transition-shadow bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-lg"
            >
              <div class="flex items-center justify-center space-x-4">
                <div class="rounded-md">
                  <img
                    class="h-12"
                    src="/images/dashboard/graph-repo.svg"
                    alt=""
                  />
                </div>
                <div class="">
                  <span class="text-gray-900">Registro de Pedidos</span>
                </div>
              </div>
            </div>
          </nuxt-link>

          <div
            class="p-4 transition-shadow bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-lg"
          >
            <div class="flex items-center justify-center space-x-4">
              <div class="rounded-md">
                <img
                  class="h-12"
                  src="/images/dashboard/cash-repo.svg"
                  alt=""
                />
              </div>
              <div class="">
                <span class="text-gray-900">Ventas por Cliente</span>
              </div>
            </div>
          </div>
          <div
            class="p-4 transition-shadow bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-lg"
          >
            <div class="flex items-center justify-center space-x-4">
              <div class="rounded-md">
                <img
                  class="h-12"
                  src="/images/dashboard/list-repo.svg"
                  alt=""
                />
              </div>
              <div class="">
                <span class="text-gray-900">Lista de Precios</span>
              </div>
            </div>
          </div>
          <div
            class="p-4 transition-shadow bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-lg"
          >
            <div class="flex items-center justify-center space-x-4">
              <div class="rounded-md">
                <img
                  class="h-12"
                  src="/images/dashboard/pass-repo.svg"
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

export default {
  name: "index",
  components: {
   
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