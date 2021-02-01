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
        <FormPedidos></FormPedidos>

      </div>
    </div>
  </div>
</template>
<script>
import FormPedidos from "@/components/computron/comercial/FormPedidos";
export default {
  name: "index",
  components: {
    FormPedidos,
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