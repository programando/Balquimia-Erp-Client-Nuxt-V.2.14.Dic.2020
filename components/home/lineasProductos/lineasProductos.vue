<template>
  <section class="pt-10">
    
      <div class="mb-8">
        <h2
          class="mx-auto mt-20 text-3xl font-bold text-center md:mb-4 lg:text-5xl text-primary"
        >
          Sectores industriales
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardIndustrias
            v-for    = "linea in lineas"
          :key       = "linea.id_linea"
          :imagen    = "linea.imagen"
          :slogan    = "linea.slogan"
          :nom_linea = "linea.nom_linea"
        >
        </CardIndustrias>
      </div>
    
  </section>
</template>
<script>
import CardIndustrias from "@/components/home/lineasProductos/lineaProductoCard";


export default {
  components: { CardIndustrias },
  data: () => ({
    lineas: [
      {
        id_linea: 1,
        cod_linea: "03  ",
        nom_linea: "INOCUIDAD ALIMENTARIA",
        orden_local: 1,
        orden_web: 1,
        imagen: "/images/home/industrias/_inocuidad_alimentaria.png",
        slogan:
          "Brindamos garantías en los resultados de limpieza y desinfección.",
        inactivo: 0,
      },
      {
        id_linea: 2,
        cod_linea: "07  ",
        nom_linea: "ARTES GRÁFICAS",
        orden_local: 2,
        orden_web: 2,
        imagen: "/images/home/industrias/_artes-graficas.png",
        slogan:
          "Optimizamos sus alistamientos.",
        inactivo: 0,
      },
      {
        id_linea: 3,
        cod_linea: "MP  ",
        nom_linea: "MATERIAS PRIMAS",
        orden_local: 3,
        orden_web: 3,
        imagen: "/images/home/industrias/materias_primas.jpg",
        slogan:
          "Productos para ser incorporados como marca blanca en sus portafolios.",
        inactivo: 0,
      },
      {
        id_linea: 4,
        cod_linea: "04  ",
        nom_linea: "MANTENIMIENTO INDUSTRIAL",
        orden_local: 4,
        orden_web: 4,
        imagen: "/images/home/industrias/_mantenimiento-industrial.png",
        slogan:
          "Diseñados para el cuidado preventivo y/o correctivo de su empresa, sin contaminar el medio ambiente.",
        inactivo: 0,
      },
            {
        id_linea: 5,
        cod_linea: "04  ",
        nom_linea: "SANIDAD PORTÁTIL",
        orden_local: 4,
        orden_web: 4,
        imagen: "/images/home/industrias/_sanidad-portatil.jpg",
        slogan:
          "Productos químicos especializados para mantenimiento de baños portátiles ",
        inactivo: 0,
      },
      {
        id_linea: 6,
        cod_linea: "AUT ",
        nom_linea: "AUTOMOTRIZ",
        orden_local: 93,
        orden_web: 93,
        imagen: "/images/home/industrias/_automotriz.png",
        slogan:
          "Diseñados especialmente para el cuidado de sus vehículos.",
        inactivo: 0,
      },
      {
        id_linea: 7,
        cod_linea: "CON ",
        nom_linea: "CONSTRUCCIÓN Y OBRAS CIVILES",
        orden_local: 94,
        orden_web: 94,
        imagen: "/images/home/industrias/_construccion.png",
        slogan:
          "Productos biodegradables que contribuyen a que pueda seguir construyendo.",
        inactivo: 0,
      },
      {
        id_linea: 8,
        cod_linea: "SAN ",
        nom_linea: "MOTOS Y BICICLETAS",
        orden_local: 95,
        orden_web: 95,
        imagen: "/images/home/industrias/_motos_bicicletas.png",
        slogan:
          "Diseñados especialmente para el cuidado de sus vehículos.",
        inactivo: 0,
      },
            {
        id_linea: 9,
        cod_linea: "RET",
        nom_linea: "FERRETERÍAS",
        orden_local: 4,
        orden_web: 4,
        imagen: "/images/home/industrias/_ferreterias.png",
        slogan:
          "Línea de productos químicos especializados para mantenimiento industrial ",
        inactivo: 0,
      },
       {
        id_linea: 10,
        cod_linea: "RET",
        nom_linea: "INSTITUCIONAL",
        orden_local: 4,
        orden_web: 4,
        imagen: "/images/home/industrias/_institucional.png",
        slogan:
          "Productos ideales para la limpieza de vidrios, espejos y vitrinas",
        inactivo: 0,
      },
       {
        id_linea: 11,
        cod_linea: "RET",
        nom_linea: "REENCAUCHE DE LLANTAS",
        orden_local: 4,
        orden_web: 4,
        imagen: "/images/home/industrias/_reencauche.png",
        slogan:
          "Productos químicos especialmente desarrollados para extender durabilidad en los procesos de reencauche",
        inactivo: 0,
      },   
       {
        id_linea: 12,
        cod_linea: "RET",
        nom_linea: "SECTOR RETAIL",
        orden_local: 4,
        orden_web: 4,
        imagen: "/images/home/industrias/_retail.png",
        slogan:
          "Exigencias industriales al alcance de su hogar.",
        inactivo: 0,
      },         
    ],
  }),

  mounted() {
    /*      this.lineas = LineasProductos.activas()
      .then ( response => {
          this.lineas = response.data ;
      }) */
  },
};
</script>
<style></style>
