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
      class="absolute flex flex-col p-2 pt-1 bg-gray-100 rounded-lg w-44 top-10 md:top-14 lg:top-16 right-1"
    >
      <nuxt-link
        to="#"
        class="flex items-center space-x-1 rounded-lg hover:bg-gray-400 hover:text-white"
      >
        <img
          class="h-3 ml-2 md:h-4"
          src="/images/dashboard/headerDash/user-blank.svg"
          alt=""
        />
        <div class="px-2 py-2 ">
          Mis Datos
        </div>
      </nuxt-link>

      <nuxt-link
        to="#"
        class="flex items-center space-x-1 rounded-lg hover:bg-gray-400 hover:text-white"
      >
        <img
          class="h-3 ml-2 md:h-4"
          src="/images/dashboard/headerDash/task-repo.svg"
          alt=""
        />
        <div class="px-2 py-2 ">
          Tareas
        </div>
      </nuxt-link>

      <div class="my-2 -mx-2 border-b-2 border-gray-500"></div>
      <nuxt-link
        to="#"
        class="flex items-center space-x-1 rounded-lg hover:bg-gray-400 hover:text-white"
      >
        <img
          class="h-3 ml-2 md:h-4"
          src="/images/dashboard/headerDash/close-repo.svg"
          alt=""
        />
        <div class="px-2 py-2 ">
          Cerrar Sistema
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "userAccounts",
  data() {
    return {
      menuUser: false
    };
  },

  methods: {
    userBoton() {
      this.menuUser = !this.menuUser;
    }
  }
};
</script>

<style></style>
