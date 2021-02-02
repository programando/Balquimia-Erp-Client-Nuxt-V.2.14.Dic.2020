<template>
  <div>
    <label class="block">{{ textLabel }}</label>
    <input
      type="text"
      class="px-4 py-1 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:shadow-outline"
      :class="width"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'InputLabel',
  props: {
    textLabel: String,
    placeholder: String,
    width: String
  }
};
</script>

<style>
</style>