<template>
  <div class="mt-2">
    <div class="flex items-center">
      <div class="z-10 -mr-6">
        <img class="inline h-4" :src="img" alt="" />
      </div>
      <input
        class="px-8 py-2 bg-gray-200 border rounded-lg focus:border-primary focus:outline-none focus:shadow-outlin"
        :class="[width, setBorderColor]"
        :type="type"
        :placeholder="text"
      />
    </div>

    <div class="flex items-center">
      <img
        class="inline h-5 mr-1"
        src="/images/dashboard/acceso-negado.svg"
        alt=""
      />
      <p class="inline text-primary">
        Error al ingresar los datos. No puede ingresar al sistema
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputText",
  props: {
    type: String,
    text: String,
    width: String,
    borderColor: String,
    img: String
  },

  computed: {
    setBorderColor() {
      switch (this.borderColor) {
        case "primary":
          return "border border-primary";
          break;

        case "secondary":
          return "border border-secondary";
          break;

        case "extra":
          return "border border-extra";
          break;
      }
    },
  },
};
</script>
<style></style>
