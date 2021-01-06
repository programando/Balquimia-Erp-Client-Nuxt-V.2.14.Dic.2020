<template>
    <li :class="[cssResponsiveLi, cssNotResponsiveLi]">
      <div :class="[cssResponsiveDiv, cssNotResponsiveDiv]">
        <nuxt-link to="/"
            :class="[ cssResponsiveLink, cssNotResponsiveLink]">
              <img
                class="h-6 ml-1"
                src="/images/home/header/icono-carrito.png"
                alt="carrito"
              />
              <span :class="[cssResponsiveSpan, cssNotResponsiveSpan ]">
                Carrito
              </span>        
        </nuxt-link>

      </div>
    </li>
</template>
<script>
 
  export default {
      props: {
          responsive: {
              type: Boolean,
              default: false
          },
      },
      data: () => ({

      }),
      computed:{
        cssResponsiveLi      () { return { "" : this.responsive === true } },
        cssNotResponsiveLi   () { return { "" : this.responsive === false } },
        cssResponsiveDiv     () { return { "" : this.responsive === true } },
        cssNotResponsiveDiv  () { return { "px-2 hover:bg-gray-200 mx-2" : this.responsive === false } },
        cssResponsiveLink    () { return { "flex justify-between hover:bg-gray-300 p-2" : this.responsive === true } },
        cssNotResponsiveLink () { return { "hover:text-indigo-900" : this.responsive === false } },
        cssResponsiveSpan    () { return { "text-sm font-semibold text-gray-500" : this.responsive === true } },
        cssNotResponsiveSpan () { return { "text-xs text-gray-500 hover:text-indigo-900" : this.responsive === false } },  
      },

      

  }
</script>