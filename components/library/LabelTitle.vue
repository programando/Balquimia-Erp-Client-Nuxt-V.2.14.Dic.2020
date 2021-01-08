<template>
  <div>
    <div 
      class="flex"
      :class="[setAlign, setColor]"
    >
      <h3 class="font-bold md:text-lg lg:text-xl xl:text-2xl"> {{ title }}</h3>
    </div>
    
    <div 
      class="flex"
      :class="[setAlign, setColor]"
    >
      <p class="text-sm lg:text-base ">{{ description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "LabelTitle",

  props: {
    title      : String,
    description: String,
    align      : String,
    color      : String
  },

  computed: {
    setAlign(){
      switch (this.align) {
        case 'center':
          return 'justify-center'
          break;
      
        case 'start':
          return 'justify-start'
          break;
        
        case 'end':
          return 'justify-end'
      }
    },

    setColor(){
      switch (this.color) {
        case 'primary':
          return 'text-primary'
          break;
      
        case 'secondary':
          return 'text-secondary'
          break;
        
        case 'extra':
          return 'text-extra'
          break;
      }
    }
  }
};
</script>
<style></style>
