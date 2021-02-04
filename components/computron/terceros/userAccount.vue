<template>
 
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
        class="absolute flex flex-col p-2 pt-1 bg-gray-200 rounded-lg top-10 md:top-14 lg:top-16 right-1"
      >
        <nuxt-link class="px-2 py-1 rounded-lg hover:text-white hover:bg-primary" to="#"> Perfil </nuxt-link>
        <nuxt-link class="px-2 py-1 rounded-lg hover:text-white hover:bg-primary" to="#"> Configuración </nuxt-link>
        <nuxt-link class="px-2 py-1 rounded-lg hover:text-white hover:bg-primary" to="#"> Salir </nuxt-link>
      </div>
    </div>

</template>

<script>

export default {
  name: "userAccounts",
  data() {
    return {
      menuUser: false,
    };
  },

  methods: {
    userBoton() {
      this.menuUser = !this.menuUser;
    },
  },
};
</script>

<style>
</style>