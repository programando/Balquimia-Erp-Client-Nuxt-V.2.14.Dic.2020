<template>
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
              class="h-4 md:h-5"
              src="/images/dashboard/headerDash/notification-repo.svg"
              alt=""
            />
          </div>
          <div class="mx-1 cursor-pointer md:mx-2">
            <img
              class="h-4 md:h-5"
              src="/images/dashboard/headerDash/email-repo.svg"
              alt=""
            />
          </div>
          <div class="relative flex flex-col">
            <div
              @click="userBoton"
              class="flex items-center mx-1 cursor-pointer md:mx-2"
            >
              <img
                class="h-8 md:h-12"
                src="/images/dashboard/headerDash/user-repo.svg"
                alt=""
              />
            </div>
            <div
              v-if="menuUser"
              class="absolute flex flex-col p-2 pt-1 bg-gray-200 rounded-lg top-16 right-1"
            >
              <nuxt-link class="px-2 py-1 rounded-lg hover:text-white hover:bg-primary" to="#"> Perfil </nuxt-link>
              <nuxt-link class="px-2 py-1 rounded-lg hover:text-white hover:bg-primary" to="#"> Configuracion </nuxt-link>
              <nuxt-link class="px-2 py-1 rounded-lg hover:text-white hover:bg-primary" to="#"> Salir </nuxt-link>
            </div>
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
</template>

<script>
export default {
  name: "HeaderDash",
  data() {
    return {
      menuUser: false,
    };
  },

  methods: {
    userBoton() {
      console.log("click");
      this.menuUser = !this.menuUser;
    },
  },
};
</script>

<style>
</style>