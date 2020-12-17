<template>
  <div class="py-20">
    <div
      class="bg-center bg-no-repeat bg-cover lg:py-20 "
      style="background-image:url(/images/inicio/footer/footer-contact.webp)"
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
            <div
              class="w-56 px-3 py-2 mx-auto mt-4 text-white transition duration-700 ease-in-out bg-yellow-700 hover:bg-indigo-900 "
            >
              <nuxt-link to="/" class="flex items-center justify-center">
                <p
                  class="mr-4 text-base font-medium md:text-lg lg:text-xl md:px-6"
                >
                  Contáctenos
                </p>
                <img
                  class="h-5"
                  src="/images/comunes/icono-flecha.png"
                  alt="bandera"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="-mt-10 ">
      <img class="mx-auto" src="/images/inicio/footer/arr2.webp" alt="" />
    </div>
    <div class="relative">
      <img
        class="mx-auto logo"
        src="/images/inicio/footer/balquimia-logo.webp"
        alt=""
      />
    </div>
    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:mx-4 lg:mr-8">
      <div class="text-gray-700">
        <div class="flex justify-center">
          <h3 class="font-bold uppercase">Explorar</h3>
        </div>
        

        <div class="flex justify-center mt-2">
          <nuxt-link to="/">Inicio</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/">Productos</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/">Servicios</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/">Experiencia</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/">Contacto</nuxt-link> 
        </div>
      </div>
      <div class="mt-6 text-gray-700 sm:mt-0">
        <div class="flex justify-center">
          <h3 class="font-bold uppercase">Productos</h3>
        </div>
        <div class="flex justify-center mt-2">
          <nuxt-link to="/">Linea Inocuidad Alimentaria</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/">Linea Artes gráficas</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/">Linea Automotriz</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/">Linea Hotelera</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/">Linea Mantenimiento Industrial</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/">Linea Materias Primas</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/">Linea Sanidad Portatil</nuxt-link> 
        </div>
      </div>
      <div class="mt-2 text-gray-700 sm:mt-0">
        <div class="flex justify-center">
          <h3 class="font-bold uppercase">Legal</h3>
        </div>
        <div class="flex justify-center mt-2">
          <nuxt-link to="/">Términos y condiciones</nuxt-link> 
        </div>
        <div class="flex justify-center">
          <nuxt-link to="/">Politicas de privacidad</nuxt-link> 
        </div>
      </div>
      <div class="mt-6 text-gray-700 sm:mt-0">
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
        <img class="h-6 mx-1" src="/images/inicio/footer/facebook.svg" alt="">
      </nuxt-link>       
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/inicio/footer/instagram.svg" alt="">
      </nuxt-link>   
     <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/inicio/footer/twitter.svg" alt="">
      </nuxt-link>   
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/inicio/footer/linkedin.svg" alt="">
      </nuxt-link> 
      <nuxt-link to="/">
        <img class="h-6 mx-1" src="/images/inicio/footer/youtube.svg" alt="">
      </nuxt-link> 
        
      
    </div>
    <div class="flex justify-center">
      <p class="text-xs text-gray-700">© Balquimia Chemical Solutions 2020</p>
    </div>
  </div>

  
</template>
<script>
export default {};
</script>
<style>
.logo {
  position: relative;
  bottom: 30px;
  right: 30px;
}
</style>
