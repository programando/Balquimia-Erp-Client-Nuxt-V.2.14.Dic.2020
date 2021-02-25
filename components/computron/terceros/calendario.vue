<template>
  <div>
    <no-ssr>
      <date-picker v-model="time" valueType="format"></date-picker>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: 'Calendario',
  data() {
    return {
      time: ''
    }
  },
};
</script>

<style></style>
