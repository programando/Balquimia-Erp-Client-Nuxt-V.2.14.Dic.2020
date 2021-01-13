<template>
  <div class="flex">
    <span><img 
      src="/images/comunes/gmail.svg" 
      alt="icono gmail"
      class="h-10 bg-gray-200" 
    />
    </span>
    <input
      class="px-4 py-2 bg-gray-200"
      :class="width"
      type="text"
      :placeholder="text"
    />
  </div>
</template>
<script>
export default {
  name: "InputGmail",
  props: {
    text: String,
    width: String,
  },
};
</script>
<style>
</style>