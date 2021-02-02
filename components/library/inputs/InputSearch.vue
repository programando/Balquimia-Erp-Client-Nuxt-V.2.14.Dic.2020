<template>
  <div class="relative">
    <label class="block"> {{ textLabel }}</label>
    <img
      class="relative z-10 inline h-6 -mr-8 cursor-pointer"
      src="/images/dashboard/search-repo.svg"
      alt=""
    />

    <input
      type="text"
      class="py-1 pl-8 text-sm bg-gray-100 border rounded-lg  focus:outline-none focus:shadow-outline"
      :class="width"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'InputSearch',
  props:{
    textLabel: String,
    placeholder: String,
    width: String
  }
};
</script>

<style>
</style>