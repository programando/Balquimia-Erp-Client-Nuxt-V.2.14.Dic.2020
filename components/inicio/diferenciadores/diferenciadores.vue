<template>
  <div
    class="pt-20 -mb-48 bg-center bg-no-repeat bg-cover"
    style="background-image: url(/images/inicio/diferenciadores/baru.webp)"
  >
    <div
      class="bg-no-repeat bg-cover bg-center"
      style="background-image: url(/images/inicio/diferenciadores/malla2.webp)"
    >
      <div class="-ml-16 md:-ml-16">
        <div
          class="boder border-b-2 border-yellow-500 w-20 inline-block md:ml-1 lg:ml-12 "
        ></div>
        <p
          class="text-yellow-500 font-semibold inline text-xs  uppercase md:text-sm ml-1 lg:ml-2"
        >
          Expericencia validada
        </p>
      </div>
      <div class="my-10 mx-6 w-1/2">
        <h2 class="text-white text-2xl font-semibold md:text-2xl lg:text-5xl">
          Nuestros productos ofrecen alta calidad, eficiencia y durabilidad.
        </h2>
        <div class="py-2 px-6 mt-4 bg-yellow-700 text-white w-64 sm:w-64 font-semibold">
          <a href="#"
            >Mas informacion
            <span
              ><img
                class="inline ml-4"
                src="images/landing-page/section/icono-flecha.png"
                alt=""/></span
          ></a>
        </div>
      </div>

      <div class="mt-10 -mb-8 md:grid md:grid-cols-4 lg:grid-cols-3  ">
        <div class="md:ml-4 lg:ml-0 xl:ml-0 md:col-start-1 col-span-2 lg:col-span-1 ">
          <div class="hexagon-wrapper">
            <div class="hexagon items-center">
              <div class="z-10 ">
                <img
                  class="mx-auto mb-4 "
                  src="images/inicio/diferenciadores/fortaleza1.webp"
                  alt="fortaleza1"
                />
                <p class="px-4 text-center z-10 leading-4">
                  Disminuimos el consumo de los recursos naturales para ayudar
                  en la protección del Medio Ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="-mt-20 md:mt-0 md:mr-4  col-span-2 lg:col-span-1 ">
          <div class="hexagon-wrapper">
            <div class="hexagon items-center">
              <div class="z-10 my-10 px-2">
                <img
                  class="mx-auto mb-4 z-10 "
                  src="images/inicio/diferenciadores/fortaleza2.webp"
                  alt="fortaleza1"
                />
                <p class="px-4 text-center z-10 leading-4">
                  Realizamos acompañamiento técnico para optimizar la implementación de los productos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="-mt-20  md:mx-4 lg:mx-0 xl:mx-0 md:col-start-2 md:-mt-10 lg:mt-0 col-span-2 lg:col-span-1 "
        >
          <div class="hexagon-wrapper">
            <div class="hexagon items-center">
              <div class="z-10 my-10 px-2">
                <img
                  class="mx-auto mb-4 z-10 "
                  src="images/inicio/diferenciadores/fortaleza3.webp"
                  alt="fortaleza1"
                />
                <p class="px-4 text-center z-10 leading-4">
                  Somos Garantía en resultados porque conocemos las dinámicas de los sectores y las necesidades de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=""></div>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style>
.imagen {
  position: relative;
  top: 50px;
}

.hexagon-wrapper {
  margin: auto;
  display: flex;
  text-align: initial;
  width: 450px;
  height: 450px;
  cursor: pointer;
}

.hexagon {
  position: relative;
  width: 46%;
  height: 80%;
  margin: auto;
  border: 1px solid black;
  /*background: linear-gradient(-180deg, white, #fda3b2); */
  background-color: white;
  display: flex;
  align-content: center;
  justify-content: center;
  transition: 0.5s;
}

.hexagon i {
  z-index: 1;
  margin: auto;
  font-size: 50px;
  color: transparent;
  background: linear-gradient(45deg, #a58fe9, #e37682);
  background-clip: text;
  -webkit-background-clip: text;
}

.hexagon:before,
.hexagon:after {
  position: absolute;
  content: "";
  background: inherit;
  height: 100%;
  width: 100%;
  border-radius: 0;
  transition: 0.5s;
  transform-origin: center;
}
.hexagon:before {
  transform: rotateZ(60deg);
}
.hexagon:after {
  transform: rotateZ(-60deg);
}

@media (min-width: 600px) {
  .hexagon-wrapper {
    width: 550px;
    height: 550px;
  }
}

@media (min-width: 768px) {
  .hexagon-wrapper {
    width: 420px;
    height: 420px;
  }
}

@media (min-width: 1025px) {
  .hexagon-wrapper {
    width: 360px;
    height: 360px;
  }
}

@media (min-width: 1200px) {
  .hexagon-wrapper {
    width: 480px;
    height: 480px;
  }
}
</style>
