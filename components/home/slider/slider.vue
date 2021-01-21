<template>
  <div class="max-h-screen contenedor">
    <div class="mt-16 leading-tight slider-contenedor lg:mt-20">
      <div
        v-for="image in images"
        :key="image.id"
        class="bg-center bg-no-repeat bg-cover contenido-slider"
        :style="getImage(image.name)"
      >
        <!-- imagen de fondo de malla -->
        <div
          class="bg-no-repeat bg-cover "
          style="background-image: url(/images/comunes/malla1.webp)"
        >
          <div
            class="min-h-screen px-16 py-20 mt-40 md:pr-40 lg:py-40 lg:px-20 xl:px-32 lg:mt-20 "
          >
            <h1
              class="ml-2 text-3xl font-bold text-white md:ml-8 md:mt-5 md:mb-3 lg:ml-0 sm:text-4xl md:text-4xl lg:text-5xl lg:pr-40 xl:pr-56"
            >
              {{ image.primaryText }}
            </h1>
            <p
              class="m-2 text-white md:my-2 md:ml-8 md:text-lg lg:text-xl lg:w-2/3 lg:ml-0 "
            >
              {{ image.secondText }}
            </p>
            <div
              class="inline-block px-4 py-2 mx-2 mt-4 text-white transition duration-700 ease-in-out bg-primary hover:bg-indigo-900 md:ml-8 lg:mt-4 lg:ml-0 "
            >
              <nuxt-link
                :to="image.buttonLink"
                class="flex items-center justify-center"
              >
                <p
                  class="mr-4 text-base font-medium md:text-base lg:text-lg "
                >
                  {{ image.buttonText }}
                </p>
                <img
                  class="h-5"
                  src="/images/comunes/icono-flecha.png"
                  alt="bandera"
                />
              </nuxt-link>
            </div>
            <div id="arrows-wrapper">
              <p id="arrow-prev" class="slider-arrow center-y">
                  &#10094;
              </p>
              <p id="arrow-next" class="slider-arrow center-y">
                &#10095;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "landingPageSlider",
  data: () => ({
    intervalo: 3000,
    contador: 1,
    width: 0,
    slider: "",
    sliderIndividual: "",
    images: [
      {
        idimage: 0,
        name: "/images/home/slider/investigacion.webp",
        primaryText:
          "Fabricamos y formulamos productos químicos especializados para el mejoramiento de la eficiencia productiva empresarial",
        secondText:
          "Innovaciones y desarrollos basados en solicitudes específicas de años de atención personalizada a nuestros clientes",   
        buttonText: "Conócenos",
        buttonLink: "/store/productos"
      },
      {
        idimage: 1,
        name: "/images/home/slider/productos.webp",
        primaryText:
          "Ofrecemos un portafolio con más de un centenar de productos químicos comprobados en diversos sectores empresariales",
        secondText:
           "Detergentes, desinfectantes, desoxidantes, desmoldantes, desengrasantes, desencofrantes, destintantes y materias primas en procesos",
        buttonText: "Sectores industriales",
        buttonLink: "/store/productos"
      },
      {
        idimage: 2,
        name: "/images/home/slider/ambiente.webp",
        primaryText: "Respeto al planeta",
        secondText:
          "Nuestras formulaciones están diseñadas para respetar al medio ambiente y cumplen las normas establecidas para la seguridad industrial ",
        buttonText: "Conócenos",
        buttonLink: "/store/productos"
      },
      {
        idimage: 3,
        name: "/images/home/slider/equipo.webp",
        primaryText:
          "Despachos a cualquier parte del mundo",
        secondText:
          "Su pedido es importante para nosotros porque trabajamos para usted.",
        buttonText: "Conócenos",
        buttonLink: "/store/productos"
      },
      {
        idimage: 0,
        name: "/images/home/slider/investigacion.webp",
        primaryText:
          "Fabricamos y formulamos productos químicos especializados para el mejoramiento de la eficiencia productiva empresarial",
        secondText:
          "Innovaciones y desarrollos basados en solicitudes específicas de años de atención personalizada a nuestros clientes",   
        buttonText: "Conócenos",
        buttonLink: "/store/productos"
      },
    ]
  }),

  // mounted() {
  //   this.sliderPlay();
  // },

  methods: {
    getImage(imageName) {
      return 'background-image: url("' + imageName + '")';
    },

    sliderPlay() {
      this.sliderIndividual = "";
      this.slider = document.querySelector(".slider-contenedor");
      this.sliderIndividual = document.querySelectorAll(".contenido-slider");
      this.width = this.sliderIndividual[0].clientWidth;

      setInterval(() => {
        this.slideMove();
      }, this.intervalo);
    },
    clientResize() {
      window.addEventListener("resize", () => {
        this.width = sliderIndividual[0].clientWidth;
      });
    },

    slideMove() {
      this.slider.style.transform =
        "translate(" + -this.width * this.contador + "px)";
      this.slider.style.transition = "transform .8s";
      this.contador++;

      if (this.contador === this.sliderIndividual.length) {
        setTimeout(() => {
          this.slider.style.transform = "translate(0px)";
          this.slider.style.transition = "transform .0s";
          this.contador = 1;
        }, 1500);
      }
    }
  }
};
</script>

<style>
#menu-togle:checked + #menu {
  display: block;
}

/* slider */
.contenedor {
  overflow: hidden;
}

.slider-contenedor {
  width: 100%;
  display: flex;
}

.contenido-slider {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex-shrink: 0;
}

.center-y {
    position: relative;
    top: 50%;
    transform: translateX(-50%);
}

.center-x {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

.slider-arrow {
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    position: absolute;
}

#arrow-prev {
    left: 20px;

}

#arrow-next {
    right: 20px;

}

</style>
