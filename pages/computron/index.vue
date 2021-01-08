<template>
  <div>
    <div
      class=" bg-center bg-no-repeat bg-cover"
      style="background-image: url('/images/home/slider/investigacion.webp')"
    >
      <div
        class="bg-no-repeat bg-cover pt-10 lg:pt-20 pb-40 "
        style="background-image: url('/images/comunes/malla1.webp')"
      >
        <div class="mt-10">
          <div class="flex justify-center text-4xl text-white">
            <h2>BALQUIMIA S.A.S</h2>
          </div>
          <div class="mt-10 mx-10 md:mx-20 lg:grid lg:grid-cols-2 gap-6">
            <div class="text-white">
              <p class="lg:text-lg">
                Se gana y se pierde, se sube y se baja, se nace y se muere. Y si
                la historia es tan simple, ¿por qué te preocupas tanto?
              </p>
              <h3 class="mt-1 flex justify-end mr-4 font-semibold lg:text-lg">-Fancundo Cabral</h3>
            </div>
            <div class="py-6 md:py-10 px-8 md:px-16 bg-white mt-6 lg:mt-0 border rounded-lg">
              <LabelTitle
                title="Bienvenid@"
                description="Registre sus credenciales para ingreso al sistema"
                align="center"
                color="extra"
              >
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
