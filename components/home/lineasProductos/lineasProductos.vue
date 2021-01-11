<template>
  <section class="pt-10 ">
    <div>
      <div class="flex mb-8">
        <h2 class="mx-auto mt-20 text-3xl font-bold text-center lg:text-5xl text-primary">
          Conocemos tu historia
        </h2>
      </div>

      <div class="flex-wrap md:flex">
        <CardIndustrias v-for="linea in lineas" :key="linea.id_linea"
                  :imagen    = linea.imagen
                  :slogan    = linea.slogan
                  :nom_linea = linea.nom_linea
        >         
        </CardIndustrias>
 
      </div>

<!--       <div class="md:flex lg:hidden">
        <CardIndustrias
          title="hoteleria"
          imgProducto="/images/home/industrias/icono3.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sector industrial"
          imgProducto="/images/home/industrias/icono4.webp"
        ></CardIndustrias>
      </div>
      <div class="md:flex lg:hidden ">
        <CardIndustrias
          title="materias primas"
          imgProducto="/images/home/industrias/icono5.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sanidad portatil"
          imgProducto="/images/home/industrias/icono6.webp"
        ></CardIndustrias>
      </div>

      <div class="hidden grid-cols-4 lg:grid">
        <CardIndustrias
          title="hoteleria"
          imgProducto="/images/home/industrias/icono3.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sector industrial"
          imgProducto="/images/home/industrias/icono4.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="materias primas"
          imgProducto="/images/home/industrias/icono5.webp"
        ></CardIndustrias>
        <CardIndustrias
          title="sanidad portatil"
          imgProducto="/images/home/industrias/icono6.webp"
        ></CardIndustrias>
      </div> -->

    </div>

  </section>
  
</template>
<script>
import CardIndustrias from "@/components/home/lineasProductos/lineaProductoCard";
import LineasProductos from "@/models/MstroLinea";

export default {
  components: { CardIndustrias },
  data: () => ({
        lineas: [],
  }),
  mounted()   {
      this.lineas = LineasProductos.activas()
      .then ( response => {
          this.lineas = response.data ;
      })
  }

};
</script>
<style></style>
