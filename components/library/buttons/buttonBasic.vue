<template>
  <div :class="[setBorderColor, width, setSizeText]" class="px-4 py-2 rounded-lg">
    <nuxt-link :to="to">
      <p>{{ text }}</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: "ButtonBasic",
  props: {
    text: String,
    to: String,
    borderColor: String,
    width: String,
    sizeText: String
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

    setSizeText() {
      switch (this.sizeText) {
        case "small":
          return "text-sm";
          break;

        case "normal":
          return "text-base";
          break;

        case "lg":
          return "text-lg";
          break;
      }
    }
  }
};
</script>
<style></style>
