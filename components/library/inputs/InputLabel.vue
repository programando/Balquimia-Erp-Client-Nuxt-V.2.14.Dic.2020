<template>
  <div>
    <label class="block">{{ textLabel }}</label>
    <input
        type       = "text"
        class      = "px-4 py-1 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:shadow-outline"
      :class       = "width"
      :placeholder = "placeholder"
        v-model    = "recordSource"
    />
  </div>
</template>

<script>
  export default {
    name: 'InputLabel',
    props: {
      placeholder: String,
      textLabel  : String,
      vmodel     : String,
      width      : String,
      },
        data () {
        return {
          recordSource: this.vmodel
        }
      },
      
      watch :{
          recordSource ( newDate ){
              this.$emit('input', newDate);
          },
          vmodel ( newDate ) {
              this.recordSource = newDate;
          },
      },

  };
</script>

<style>
</style>