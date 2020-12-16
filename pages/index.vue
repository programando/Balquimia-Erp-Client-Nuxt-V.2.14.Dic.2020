<template>
  <div>
    <Header></Header>

    <!-- slider -->
    <div class="contenedor max-h-screen">
      <div class="slider-contenedor leading-tight mt-16 lg:mt-20">
        <div
          class="contenido-slider bg-no-repeat bg-cover bg-center"
          style="background-image: url(/images/landing-page/slider/slide3.webp)"
        >
          <!-- imagen de fondo de malla -->
          <div
            class="bg-no-repeat bg-cover "
            style="background-image: url(/images/landing-page/slider/malla1.webp)"
          >
            <div
              class="px-16 py-64 lg:py-64 lg:px-48 mt-40 lg:mt-20 min-h-screen"
            >
              <div class="-ml-20 md:-ml-16 -mt-32">
                <div
                  class="boder border-b-2 border-yellow-500 w-12 lg:w-16 inline-block ml-3 lg:-ml-4  "
                ></div>
                <p
                  class="text-yellow-500 font-semibold inline text-xs  uppercase md:text-sm ml-6 lg:ml-4 "
                >
                  Balquimia Chemical Solution
                </p>
              </div>
              <h1
                class="text-white ml-2  md:ml-8 md:mt-5 md:mb-3 lg:ml-0  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold lg:pr-36 xl:pr-56"
              >
                Respeto al medio ambiente
              </h1>
              <p
                class="text-white m-2 md:my-2 md:ml-8  md:text-base lg:text-lg lg:w-2/3 lg:ml-0 "
              >
                Nuestra experiencia durante más de dos décadas le garantizan la
                óptima implementación y manejo de nuestros productos
              </p>
              <div
                class="bg-yellow-700 transition duration-700 ease-in-out hover:bg-indigo-900 text-white w-2/3 sm:w-1/2  md:w-2/5 lg:w-6/12 xl:w-4/12 mx-2 md:ml-8 px-3 py-2 lg:mt-4 lg:ml-0 "
              >
                <a href="#" class="flex justify-center items-center">
                  <p
                    class="mr-4 font-medium text-base md:text-lg lg:text-xl md:px-6"
                  >
                    Politicas de Calidad
                  </p>
                  <img
                    class="h-5"
                    src="/images/landing-page/slider/icono-flecha.png"
                    alt="bandera"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- aside -->
    <Aside></Aside>

    <!-- section -->
    <Section></Section>

    

  </div>
</template>

<script>
import Header from "@/components/landing-page/header/indexHeader";
import Aside from "@/components/landing-page/aside/aside";
import Section from "@/components/landing-page/section/section";
export default {
  // data: () => ({
  //   intervalo: 3000,
  //   contador: 1,
  //   width: 0,
  //   slider: "",
  //   sliderIndividual: ""
  // }),
  components: { Header },
  mounted() {
    this.sliderPlay();
  },

  methods: {
    sliderPlay() {
      this.sliderIndividual = "";
      this.slider = document.querySelector(".slider-contenedor");
      this.sliderIndividual = document.querySelectorAll(".contenido-slider");
      this.width = this.sliderIndividual[0].clientWidth;

      //this.clientResize();
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


</style>
