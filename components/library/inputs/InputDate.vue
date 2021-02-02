<template>
  <div>
    <label class="block">{{ textLabel }}</label>

    <input
      type="date"
      class="px-4 py-1 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:shadow-outline"
      :class="width"
      placeholder="Sucursal"
      v-model="fecha"
    />
  </div>
</template>

<script>
export default {
  name: 'InputDate',
  props: {
    textLabel: String,
    width: String
  }


};
</script>

<style>
</style>