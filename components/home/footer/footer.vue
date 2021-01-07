<template>
  <div class="pb-10 bg-white">
    <div
      class="bg-center bg-no-repeat bg-cover lg:py-20 "
      style="background-image:url(/images/home/footer/footer-contact.webp)"
    >
      <div
        class="bg-center bg-no-repeat bg-cover "
        style="background-image:url(/images/comunes/malla1.webp)"
      >
        <div class="py-20">
          <div class="mx-10">
            <h2 class="text-2xl font-bold text-center">
              Estamos listos, ¿Que necesidad tienes en tu empresa?
            </h2>
<!--             <div
              class="w-40 px-3 py-2 mx-auto mt-4 text-white transition duration-700 ease-in-out lg:w-48 bg-primary hover:bg-indigo-900 "
            >
              <nuxt-link to="/home/contacto" class="flex items-center justify-center">  
                <p class="mr-4 text-base font-medium lg:text-lg ">
                  Contáctenos
                </p>
              </nuxt-link>
            </div> -->
            
            <AppButton 
                    class      = "w-40 px-3 py-2 lg:w-48"
                    to         = "/home/contacto"
                  :center    = "true"
                  > Contáctenos 
            </AppButton>

          </div>
        </div>
      </div>
    </div>
    <div class="-mt-10 ">
      <img class="mx-auto " src="/images/home/footer/arr2.webp" alt="" />
    </div>
    <div class="relative">
      <img
        class="mx-auto logo"
        src="/images/home/footer/balquimia-logo.webp"
        alt=""
      />
    </div>
    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:mx-4 lg:mr-8">

      <div class="mt-10 text-gray-700 sm:mt-4 ">
        <div class="flex justify-center">
          <h3 class="font-bold uppercase">Líneas de productos</h3>
        </div>
        <div class="flex justify-center mt-2">
          <nuxt-link to="/store/productos">Linea Inocuidad Alimentaria</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/store/productos">Linea Artes gráficas</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/store/productos">Linea Automotriz</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/store/productos">Linea Hotelera</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/store/productos">Linea Mantenimiento Industrial</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/store/productos">Linea Materias Primas</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/store/productos">Linea Sanidad Portatil</nuxt-link> 
        </div>
      </div>
      <div class="mt-10 text-gray-700 sm:mt-8 lg:mt-4 ">
        <div class="flex justify-center">
          <h3 class="font-bold uppercase">Legal</h3>
        </div>
 
        <div class="flex justify-center">
          <div class=""   @click="openPdf">Politicas tratamiento de la información</div>  
         </div>
         
      </div>
      <div class="mt-10 text-gray-700 sm:mt-8 lg:mt-4">
        <div class="flex justify-center">
          <h3 class="font-bold uppercase">Contáctenos</h3>
        </div>
        <div class="flex justify-center">
          <p class="font-bold">Balquimia Chemical Solutions</p>
        </div>
        <div class="flex justify-center">
          <p>Linea de atencion al cliente</p>
        </div>
        <div class="flex justify-center">
          <p class="font-bold">01 8000 18 TRON (8766)</p>
        </div>
        <div class="flex justify-center">
          <p>Dirección: Cll 35 #4-31</p>
        </div>
        <div class="flex justify-center">
          <p>Cali - Colombia</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-20">
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/home/footer/facebook.svg" alt="">
      </nuxt-link>       
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/home/footer/instagram.svg" alt="">
      </nuxt-link>   
     <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/home/footer/twitter.svg" alt="">
      </nuxt-link>   
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/home/footer/linkedin.svg" alt="">
      </nuxt-link> 
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/home/footer/youtube.svg" alt="">
      </nuxt-link> 
        
      
    </div>
    <div class="flex justify-center">
      <p class="text-xs text-gray-700">© Balquimia Chemical Solutions 2020</p>
    </div>
  </div>

  
</template>
<script>
  import AppButton from "@/components/library/button";
export default {
  components : { AppButton },

  data: ()=> ({

  }),

  methods: {
        openPdf() {
          let fileName ="/files/Politica.pdf";
          window.open(fileName , "_blank");
        }
  },  


};

</script>
  <style>
  .logo {
    position: relative;
    bottom: 30px;
    right: 30px;
  }
  </style>
