<template>
  <div>
    <textarea name="" id="" :cols="cols" :rows="rows" :placeholder="text"
    class="w-5/6 px-4 py-2 rounded-lg focus:border-inputsBorder focus:outline-none "
    >

    </textarea>
  </div>
</template>

<script>
export default {
  name: 'InputArea',
  props:{
    text: String,
    width: String,
    cols: String,
    rows: String
  }
}
</script>

<style>

</style>