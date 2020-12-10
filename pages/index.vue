<template>
  <div >
    <header class="fixed w-full mb-2 bg-white z-10">
      <!-- Icono de la empresa -->
      <div class="grid grid-cols-3 md:flex md:justify-between items-center">
        <a href="#" class="col-start-2 col-end-3 ml-8 md:ml-4 mt-2">
          <img class="h-16 lg:h-20" src="/images/landing-page/header/balquimia-logo.png" alt="logo" />
        </a>

        <!-- Navbar en pantalla completa, en pantalla pequeña esta oculto -->
        <div class="hidden md:flex bg-white">
          <nav class="flex">
            <ul
              class="flex justify-center items-center  lg:mr-40 xl:mr-64"
            >
              <li>
                <a
                  href="#"
                  class="md:p-4 py-3 px-0 block text-gray-500 hover:text-indigo-900"
                  >Inicio</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="md:p-4 py-3 px-0 block text-gray-500 hover:text-indigo-900"
                  >Productos</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="md:p-4 py-3 px-0 block text-gray-500 hover:text-indigo-900"
                  >Servicios</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="md:p-4 py-3 px-0 block text-gray-500 hover:text-indigo-900"
                  >Experiencia</a
                >
              </li>
              <li class="">
                <a
                  href="#"
                  class="md:p-4 py-3 px-0 block text-gray-500 hover:text-indigo-900"
                  >Contacto</a
                >
              </li>
            </ul>
            <ul class="flex justify-center items-center">
              <li>
                <div
                  class="border py-2 px-3 mx-6 transition duration-700 ease-in-out hover:bg-indigo-900 hover:text-white"
                >
                  <a href="#">
                    <img class="-mb-2" src="/images/landing-page/header/eng.png" alt="bandera" />
                    <span class="text-xs text-gray-500">ENG</span>
                  </a>
                </div>
              </li>
              <li>
                <div class="px-2 hover:bg-gray-200 mx-2">
                  <a href="#" class="hover:text-indigo-900">
                    <img
                      class="h-6 ml-1"
                      src="/images/landing-page/header/icono-carrito.png"
                      alt="carrito"
                    />
                    <span
                      class="text-xs text-gray-500 block ml-2 -mb-2 hover:text-indigo-900"
                      >Mi</span
                    >
                    <span class="text-xs text-gray-500 hover:text-indigo-900"
                      >Carrito</span
                    >
                  </a>
                </div>
              </li>
              <li>
                <div
                  class="bg-yellow-700 transition duration-700 ease-in-out hover:bg-indigo-900 text-white py-10 px-6"
                >
                  <a href="#" class="flex justify-center items-center">
                    <p class="text-sm mr-4">Acceso clientes</p>
                    <img
                      class="h-3"
                      src="/images/landing-page/header/icono-flecha.png"
                      alt="bandera"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Icono svg del menu hamburguesa -->
        <label
          for="menu-togle"
          class="cursor-pointer md:hidden block border border-gray-300 rounded-full p-2 col-start-7 col-end-8 mr-4"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>

      <!-- un checkbox para detectar mediante CSS cuando ocultar o desplegar el menu hambueguesa -->
      <input type="checkbox" class="hidden" id="menu-togle" />

      <!-- Navbar en pantallas pequeñas y medianas -->
      <div
        class="hidden md:hidden md:items-center md:w-auto w-full px-8 mb-4 fixed"
        id="menu"
      >
        <nav>
          <ul class="text-base pt-4">
            <li class="">
              <a
                href="#"
                class="py-2 px-2 block text-gray-500 hover:bg-gray-200 text-sm"
                >Inicio</a
              >
            </li>
            <li>
              <a
                href="#"
                class="py-2 px-2 block text-gray-500 hover:bg-gray-200 text-sm"
                >Productos</a
              >
            </li>
            <li>
              <a
                href="#"
                class="py-2 px-2 block text-gray-500 hover:bg-gray-200 text-sm"
                >Servicios</a
              >
            </li>
            <li>
              <a
                href="#"
                class="py-2 px-2 block text-gray-500 hover:bg-gray-200 text-sm"
                >Experiencia</a
              >
            </li>
            <li>
              <a
                href="#"
                class="md:p-4 py-2 px-2 block text-gray-500 hover:bg-gray-200 text-sm"
                >Contacto</a
              >
            </li>
          </ul>
          <ul class="mt-4">
            <li class="p-2 hover:bg-gray-300">
              <div
                class="grid grid-cols-5 border transition duration-700 ease-in-out hover:bg-indigo-900 hover:text-white"
              >
                <a href="#" class="col-start-3 col-end-4 px-4 ml-5">
                  <img class="-mb-2" src="/images/landing-page/header/eng.png" alt="bandera" />
                  <span class="text-xs">ENG</span>
                </a>
              </div>
            </li>
            <li class="mt-2">
              <a href="#" class="flex justify-between hover:bg-gray-300 p-2">
                <p class="text-sm font-semibold text-gray-500">Mi carrito</p>
                <img class="h-6" src="/images/landing-page/header/icono-carrito.png" alt="carrito" />
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex p-2 items-center bg-yellow-700 hover:bg-indigo-900 text-white"
              >
                <p class="text-sm">Acceso a clientes</p>
                <img
                  class="h-3 ml-2"
                  src="/images/landing-page/header/icono-flecha.png"
                  alt="bandera"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="mx-auto">
      <img
        src="/images/landing-page/header/arr.png"
        alt="arr1"
        class="mx-auto md:mx-8 w-52 h-8 -mt-2"
      />
    </div>

     <!-- imagen de fondo del primer slider -->
    <div class="contenedor">
      <div class="slider-contenedor">
        <div
          class="contenido-slider min-h-sceen bg-no-repeat bg-cover bg-center -mt-8"
          style="background-image: url(/images/landing-page/slider/slide3.webp)"
        >
          <!-- imagen de fondo de malla -->
          <div
            class="bg-no-repeat bg-cover bg-center"
            style="background-image: url(/images/landing-page/slider/malla1.webp)"
          >
            <div class="min-h-screen py-64 px-10 md:px-20">
              <div class="-ml-8">
                <div
                  class="boder border-b-2 border-yellow-500 w-16 inline-block mr-2"
                ></div>
                <p
                  class="text-yellow-500 font-semibold inline text-xs uppercase md:text-sm"
                >
                  Balquimia Chemical Solution
                </p>
              </div>
              <h1
                class="text-white m-4 text-3xl md:text-5xl font-semibold pr-10"
              >
                Respeto al medio ambiente
              </h1>
              <p class="text-white m-4 md:text-lg">
                Nuestra experiencia durante más de dos décadas le garantizan la
                óptima implementación y manejo de nuestros productos
              </p>
              <div
                class="bg-yellow-700 transition duration-700 ease-in-out hover:bg-indigo-900 text-white w-56 mx-4 px-3 py-2"
              >
                <a href="#" class="flex justify-center items-center">
                  <p class="mr-4 font-medium text-base md:text-lg md:px-6">
                    Politicas de Calidad
                  </p>
                  <img class="h-5" src="/images/landing-page/slider/icono-flecha.png" alt="bandera" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="contenido-slider min-h-sceen bg-no-repeat bg-cover bg-center -mt-8"
          style="background-image: url(/images/landing-page/slider/slide4.webp)"
        >
          <!-- imagen de fondo de malla -->
          <div
            class="bg-no-repeat bg-cover bg-center"
            style="background-image: url(/images/landing-page/slider/malla1.webp)"
          >
            <div class="min-h-screen py-56 px-10 md:px-20">
              <div class="-ml-8">
                <div
                  class="boder border-b-2 border-yellow-500 w-16 inline-block mr-2"
                ></div>
                <p
                  class="text-yellow-500 font-semibold inline text-xs uppercase md:text-sm"
                >
                  Salud Industrial
                </p>
              </div>
              <h1
                class="text-white m-4 text-3xl md:text-5xl font-semibold pr-10"
              >
                Ofrecemos una amplia gama de desinfectantes para garantizar la
                inocuidad en sus procesos
              </h1>
              <p class="text-white m-4 md:text-lg">
                Nos respalda nuestro equipo interdisciplinario con amplia
                experiencia
              </p>
              <div
                class="bg-yellow-700 transition duration-700 ease-in-out hover:bg-indigo-900 text-white w-48 mx-4 px-3 py-2"
              >
                <a href="#" class="flex justify-center items-center">
                  <p class="mr-4 font-medium text-base md:text-lg md:px-6">
                    Conocenós
                  </p>
                  <img class="h-5" src="/images/landing-page/slider/icono-flecha.png" alt="bandera" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="contenido-slider min-h-sceen bg-no-repeat bg-cover bg-center -mt-8"
          style="background-image: url(/images/landing-page/slider/slide1.webp)"
        >
          <!-- imagen de fondo de malla -->
          <div
            class="bg-no-repeat bg-cover bg-center"
            style="background-image: url(/images/landing-page/slider/malla1.webp)"
          >
            <div class="min-h-screen py-56 px-10 md:px-20">
              <div class="-ml-8">
                <div
                  class="boder border-b-2 border-yellow-500 w-16 inline-block mr-2"
                ></div>
                <p
                  class="text-yellow-500 font-semibold inline text-xs uppercase md:text-sm"
                >
                  Soluciones Quimicas
                </p>
              </div>
              <h1
                class="text-white m-4 text-3xl md:text-5xl font-semibold pr-10"
              >
                Innovación y desarrollo de acuerdo a sus necesidades puntuales
              </h1>
              <p class="text-white m-4 md:text-lg">
                Fabricamos productos químicos especializados en desinfección,
                mantenimiento y limpieza industrial
              </p>
              <div
                class="bg-yellow-700 transition duration-700 ease-in-out hover:bg-indigo-900 text-white w-48 mx-4 px-3 py-2"
              >
                <a href="#" class="flex justify-center items-center">
                  <p class="mr-4 font-medium text-base md:text-lg md:px-6">
                    Conocenós
                  </p>
                  <img class="h-5" src="/images/landing-page/slider/icono-flecha.png" alt="bandera" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="contenido-slider min-h-sceen bg-no-repeat bg-cover bg-center -mt-8"
          style="background-image: url(/images/landing-page/slider/slide2.webp)"
        >
          <!-- imagen de fondo de malla -->
          <div
            class="bg-no-repeat bg-cover bg-center"
            style="background-image: url(/images/landing-page/slider/malla1.webp)"
          >
            <div class="min-h-screen py-56 px-10 md:px-20">
              <div class="-ml-8">
                <div
                  class="boder border-b-2 border-yellow-500 w-16 inline-block mr-2"
                ></div>
                <p
                  class="text-yellow-500 font-semibold inline text-xs uppercase md:text-sm"
                >
                  Tienda Virtual
                </p>
              </div>
              <h1
                class="text-white m-4 text-3xl md:text-5xl font-semibold pr-10"
              >
                Ofrecemos un portafolio con más de un centenar de productos en
                diversos sectores
              </h1>
              <p class="text-white m-4 md:text-lg">
                Participamos en los procesos productivos ofreciendo eficacia y
                economí
              </p>
              <div
                class="bg-yellow-700 transition duration-700 ease-in-out hover:bg-indigo-900 text-white w-48 mx-4 px-3 py-2"
              >
                <a href="#" class="flex justify-center items-center">
                  <p class="mr-4 font-medium text-base md:text-lg md:px-6">
                    Sectores Industriales
                  </p>
                  <img class="h-5" src="/images/landing-page/slider/icono-flecha.png" alt="bandera" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="contenido-slider min-h-sceen bg-no-repeat bg-cover bg-center -mt-8"
          style="background-image: url(/images/landing-page/slider/slide3.webp)"
        >
          <!-- imagen de fondo de malla -->
          <div
            class="bg-no-repeat bg-cover bg-center"
            style="background-image: url(/images/landing-page/slider/malla1.webp)"
          >
            <div class="min-h-screen py-64 px-10 md:px-20">
              <div class="-ml-8">
                <div
                  class="boder border-b-2 border-yellow-500 w-16 inline-block mr-2"
                ></div>
                <p
                  class="text-yellow-500 font-semibold inline text-xs uppercase md:text-sm"
                >
                  Balquimia Chemical Solution
                </p>
              </div>
              <h1
                class="text-white m-4 text-3xl md:text-5xl font-semibold pr-10"
              >
                Respeto al medio ambiente
              </h1>
              <p class="text-white m-4 md:text-lg">
                Nuestra experiencia durante más de dos décadas le garantizan la
                óptima implementación y manejo de nuestros productos
              </p>
              <div
                class="bg-yellow-700 transition duration-700 ease-in-out hover:bg-indigo-900 text-white w-56 mx-4 px-3 py-2"
              >
                <a href="#" class="flex justify-center items-center">
                  <p class="mr-4 font-medium text-base md:text-lg md:px-6">
                    Politicas de Calidad
                  </p>
                  <img class="h-5" src="/images/langing-page/slider/icono-flecha.png" alt="bandera" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
   data: () => ({
        intervalo       : 3000,
        contador        : 1,
        width           : 0,
        slider          : '',
        sliderIndividual: ''
    }),
    
    mounted() {
        this.sliderPlay();
    },
    
    methods: {
        sliderPlay() {
            this.sliderIndividual='';
            this.slider           = document.querySelector(".slider-contenedor");
            this.sliderIndividual = document.querySelectorAll(".contenido-slider");
            this.width            = this.sliderIndividual[0].clientWidth;
            
            //this.clientResize(); 
              setInterval(() => {
                  this.slideMove();  
                  }, this.intervalo);         
        },
        clientResize() {   
          window.addEventListener('resize', ()=>{
              this.width  = sliderIndividual[0].clientWidth;
          })
        },

        slideMove() {
          
              this.slider.style.transform ="translate("+(-this.width*this.contador) +"px)";
              this.slider.style.transition = "transform .8s";
              this.contador ++;      
  
          if ( this.contador === this.sliderIndividual.length){
 
              setTimeout (() => {
                    this.slider.style.transform ="translate(0px)";
                    this.slider.style.transition = "transform .0s";
                    this.contador = 1;
              },1500);

          }
        }
        
        
    }


}
</script>


<style>
  #menu-togle:checked + #menu {
    display: block;
  }

  
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
  padding: 40px;
  flex-shrink: 0;
}

</style>