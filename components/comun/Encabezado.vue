<template>
  <div>
    <div
      class="inline-block w-20 border-b-2 border-primary boder md:ml-1 lg:ml-12 alineacion "
    ></div>
    <p
      class="inline ml-1 text-xs font-semibold uppercase text-primary md:text-sm lg:ml-2 "
    >
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  props:{
    text: String
  }
};
</script>
<style>
.alineacion {
  position: relative;
  bottom: 4px;
}
</style>
