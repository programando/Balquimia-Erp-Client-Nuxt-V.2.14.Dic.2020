<template>
    <li :class="[ cssResponsiveLi, cssNotResponsiveLi ]">

      <div :class="[ cssResponsiveDiv, cssNotResponsiveDiv ]">

        <nuxt-link   to="/computron/" :class="[ cssResponsiveLink, cssNotResponsiveLink ]">
            <img  class="w-8 -mb-2"  src='/images/servicios/ser2.webp' alt="computron" />
            <span :class="[cssResponsiveSpan,cssNotResponsiveSpan]">
              Computron
            </span>        
        </nuxt-link>

      </div>
    </li>
</template>

<script>
  export default {
    props : {
        responsive: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({

    }),

    computed: {
        cssResponsiveLi      () { return { "p-2 hover:bg-gray-300" : this.responsive === true } },
        cssNotResponsiveLi   () { return { "" : this.responsive === false } },
        cssResponsiveDiv     () { return { "grid grid-cols-5 border transition duration-700 ease-in-out hover:bg-indigo-900 hover:text-white" : this.responsive === true } },
        cssNotResponsiveDiv  () { return { "border py-2 px-3 mx-6 transition duration-700 ease-in-out hover:bg-indigo-900 hover:text-white" : this.responsive === false } },
        cssResponsiveLink    () { return { "col-start-3 col-end-4 px-4 ml-5" : this.responsive === true } },
        cssNotResponsiveLink () { return { "" : this.responsive === false } },
        cssResponsiveSpan    () { return { "text-xs" : this.responsive === true } },
        cssNotResponsiveSpan () { return { "text-xs text-gray-500" : this.responsive === false } },
    }
    
  }

</script>