<template>
    <!-- slider -->
    <div class="max-h-screen contenedor">
      <div class="mt-16 leading-tight slider-contenedor lg:mt-20">

    <div
          class="bg-center bg-no-repeat bg-cover contenido-slider"
          style="background-image: url(/images/landing-page/slider/slide3.webp)"
        >
          <!-- imagen de fondo de malla -->
          <div
            class="bg-no-repeat bg-cover "
            style="background-image: url(/images/landing-page/slider/malla1.webp)"
          >
            <div
              class="min-h-screen px-16 py-64 mt-40 lg:py-64 lg:px-48 lg:mt-20"
            >
              <div class="-mt-32 -ml-20 md:-ml-16">
                <div
                  class="inline-block w-12 ml-3 border-b-2 border-yellow-500 boder lg:w-16 lg:-ml-4 "
                ></div>
                <p
                  class="inline ml-6 text-xs font-semibold text-yellow-500 uppercase md:text-sm lg:ml-4 "
                >
                  Balquimia Chemical Solution
                </p>
              </div>
              <h1
                class="ml-2 text-3xl font-bold text-white md:ml-8 md:mt-5 md:mb-3 lg:ml-0 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl lg:pr-36 xl:pr-56"
              >
                Respeto al medio ambiente
              </h1>
              <p
                class="m-2 text-white md:my-2 md:ml-8 md:text-base lg:text-lg lg:w-2/3 lg:ml-0 "
              >
                Nuestra experiencia durante más de dos décadas le garantizan la
                óptima implementación y manejo de nuestros productos
              </p>
              <div
                class="w-2/3 px-3 py-2 mx-2 text-white transition duration-700 ease-in-out bg-yellow-700 hover:bg-indigo-900 sm:w-1/2 md:w-2/5 lg:w-6/12 xl:w-4/12 md:ml-8 lg:mt-4 lg:ml-0 "
              >
                <a href="#" class="flex items-center justify-center">
                  <p
                    class="mr-4 text-base font-medium md:text-lg lg:text-xl md:px-6"
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
    
</template>

<script>
    
    export default {
      name: "landingPageSlider",
       data: () => ({
         intervalo: 3000,
         contador: 1,
         width: 0,
         slider: "",
         sliderIndividual: ""
       }),
       
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
