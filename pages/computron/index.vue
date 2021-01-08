<template>
  <div>
    <div
      class="bg-center bg-no-repeat bg-cover "
      style="background-image: url('/images/home/slider/investigacion.webp')"
    >
      <div
        class="pt-10 pb-40 bg-no-repeat bg-cover lg:pt-20 "
        style="background-image: url('/images/comunes/malla1.webp')"
      >
        <div class="mt-10">
          <div class="flex justify-center text-4xl text-white">
            <h2>BALQUIMIA S.A.S</h2>
          </div>
          <div class="gap-6 mx-10 mt-10 md:mx-20 lg:grid lg:grid-cols-2">
            
            <div class="text-white">
              <p class="lg:text-lg">
                Se gana y se pierde, se sube y se baja, se nace y se muere. Y si
                la historia es tan simple, ¿por qué te preocupas tanto?
              </p>
              <h3 class="flex justify-end mt-1 mr-4 font-semibold lg:text-lg">-Fancundo Cabral</h3>
            </div>

            <div class="px-8 py-6 mt-6 bg-white border rounded-lg md:py-10 md:px-16 lg:mt-0">
              <LabelTitle
                title       = "Bienvenid@"
                description = "Registre sus credenciales para ingreso al sistema"
                align       = "center"
                color       = "extra">
              </LabelTitle>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LabelTitle from '@/components/library/LabelTitle' 

export default {
  layout: "dashboard",
  
  data() {
    return {
      
    }
  },
  
    
};
</script>
