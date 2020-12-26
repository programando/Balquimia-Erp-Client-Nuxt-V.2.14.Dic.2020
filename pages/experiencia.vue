<template>
  <div class="bg-gray-200">
    <Header></Header>
    <div
      class="bg-center bg-no-repeat bg-cover "
      style="background-image: url(/images/experiencia/experiencia.webp)"
    >
      <div
        class="bg-center bg-no-repeat bg-cover pt-64 lg pb-10 lg:pb-32"
        style="background-image: url(/images/comunes/malla1.webp)"
      >
        <div class="px-10 md:px-16">
          <div class="-ml-20 -mt-20 md:-ml-16 relative">
            <Encabezado text="Experiencia"></Encabezado>
          </div>

          <div class="my-8 lg:my-14">
            <h2
              class="px-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold text-white"
            >
              Ofrecemos soluciones químicas para todas las industrias
            </h2>
            <p class="text-white text-center pt-6 md:text-lg lg:text-xl lg:px-16 xl:px-20">En Balquimia S.A.S. Estamos comprometidos en ofrecer productos que impulsen el desarrollo de las industrias en diversos sectores. Siendo la base para el desarrollo de miles de productos que usamos día a día en nuestras vidas.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black my-6 mx-6">
      <div class="py-10 px-4 text-center">
        <p class="text-white text-2xl leading-7">Brindamos garantías en los resultados de limpieza, desinfección y mantenimiento en todas las áreas, equipos y superficies, con productos químicos especializados y comprometidos con el medio ambiente.</p>
      </div>
    </div>
    <div class="mx-6 lg:mx-10 mt-6 bg-gray-200">
      <div>
        <h2 class="text-gray-700 text-xl font-bold">Algunos de nuestros clientes</h2>
      </div>
      <div class="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <SectoresClientes
          url="/images/experiencia/sector0.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/experiencia/sector1.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/experiencia/sector2.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/experiencia/sector3.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/experiencia/sector4.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/experiencia/sector5.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/experiencia/sector6.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/experiencia/sector7.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/experiencia/sector8.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/experiencia/sector9.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/experiencia/sector10.webp"
        ></SectoresClientes>
        <SectoresClientes
          url="/images/experiencia/sector11.webp"
        ></SectoresClientes> 
      </div>
    </div>
    
    <div class="mt-4 bg-gray-200 mx-4 lg:mx-10">
    <div class="flex justify-between mb-4">
      <h2 class="text-2xl font-bold text-primary ">Productos Destacados</h2>
      <div class="hidden mr-10 lg:inline">
        <img class="inline" src="/images/comunes/arrL.webp" alt="fecha-izquierda">
        <img class="inline" src="/images/comunes/arrR.webp" alt="fecha-derecha">
      </div>
    </div>
    <div class="flex flex-wrap lg:-mx-2 ">
      <CardProductoDestacado></CardProductoDestacado>
      <CardProductoDestacado></CardProductoDestacado>
      <CardProductoDestacado></CardProductoDestacado>
    </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/inicio/header/indexHeader";
import Footer from "@/components/inicio/footer/footer";
import SectoresClientes from "@/components/experiencia/sectoresClientes";
import Encabezado from '@/components/comun/Encabezado'
export default {
  components:{
    Header,
    Footer,
    SectoresClientes
  }
}
</script>
<style>
  
</style>