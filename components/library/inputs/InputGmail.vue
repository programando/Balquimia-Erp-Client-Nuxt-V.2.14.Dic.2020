<template>
  <div class="flex border">
    <div class="px-2 pt-1 bg-gray-200">
      <span>
        <i aria-hidden="true" class="fa fa-envelope fa-2x"></i>
      </span>
    </div>
    
    <input
      class="px-4 py-2 bg-gray-200 focus:outline-none"
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