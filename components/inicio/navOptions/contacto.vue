<template>
  <li>
    <nuxt-link to="/contacto"
        :class="[ cssResponve, cssNotResponisve ]">
            Contacto
    </nuxt-link>


<!-- class= -->

  </li>
</template>
<script>
  export default {
      props: {
          responsive: {
            type: Boolean,
            default: false
        }
      },
      data: ()=> ({

      }),

      computed: {
        cssResponve() {
            return {
                "py-2 px-2 block text-gray-500 hover:bg-gray-200 text-sm":    this.responsive === true,           
            };
        },
        cssNotResponisve () {
            return {
                "md:p-4 py-3 px-0 block text-gray-500 hover:text-indigo-900": this.responsive === false
            };
        },

    }


  }
</script>