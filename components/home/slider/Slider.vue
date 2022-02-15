<template>
  <div v-swiper="swiperOption" class="relative w-full ml-auto" :loadtheme="false">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div
          class="bg-center bg-no-repeat bg-cover py-44 lg:py-80"
          style="background-image: url('/images/home/slider/1 - Tron 500 HD.jpg')"
        >
          <div class="px-16">
            <div class="lg:mx-10">
              <p
                class="text-xl text-center text-white lg:text-4xl 2xl:text-5xl"
              >
                Detergentes Liquidos Biodegradables
              </p>
              <p
                class="mt-32 text-xl text-center text-white lg:text-4xl 2xl:text-5xl"
              >
                Completo lavado y desinfección de instalaciones incluyendo
                equipos e implementos
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div
          class="bg-center bg-no-repeat bg-cover py-44 lg:py-80"
          style="background-image: url('/images/home/slider/2 - Tron 20 - 20.jpg')"
        >
          <div class="px-16">
            <div class="lg:mx-10">
              <p
                class="text-xl text-center text-white lg:text-4xl 2xl:text-5xl"
              >
                Detergentes Liquidos Biodegradables
              </p>
              <p
                class="mt-32 text-xl text-center text-white lg:text-4xl 2xl:text-5xl"
              >
                Completo lavado y desinfección de instalaciones incluyendo
                equipos e implementos
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-no-repeat bg-cover py-44 lg:py-56"
          style="background-image: url('/images/home/slider/3 - Oxytron.jpg')"
        >
          <div class="px-16">
            <div class="lg:mx-10">
              <p
                class="text-xl text-right text-white lg:text-4xl 2xl:text-5xl"
              >
                Mezcla balanceada
              </p>
              <p
                class="text-xl text-right text-white lg:text-4xl 2xl:text-5xl"
              >
                de detergente +
              </p>
              <p
                class="text-xl text-right text-white lg:text-4xl 2xl:text-5xl"
              >
                desinfectante
              </p>

              <p
                class="mt-4 text-xl text-right text-white lg:text-4xl 2xl:text-5xl"
              >
                Ofrece todos los beneficios
              </p>
              <p
                class="text-xl text-right text-white lg:text-4xl 2xl:text-5xl"
              >
                del oxigeno activo
              </p>
              <p
                class="mt-40 text-xl text-center text-white lg:text-4xl 2xl:text-5xl"
              >
                Inocuidad alimentaria
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div
          class="bg-center bg-no-repeat bg-cover py-44 lg:py-80"
          style="background-image: url('/images/home/slider/6 - Rax 6-86.jpg')"
        >
          <div class="px-16">
            <div class="lg:mx-10">
              <p
                class="text-xl text-center text-white lg:text-4xl 2xl:text-5xl"
              >
                Detergentes Liquidos Biodegradables
              </p>
              <p
                class="mt-32 text-xl text-center text-white lg:text-4xl 2xl:text-5xl"
              >
                Completo lavado y desinfección de instalaciones incluyendo
                equipos e implementos
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div
          class="bg-center bg-no-repeat bg-cover py-44 lg:py-80"
          style="background-image: url('/images/home/slider/4 -  Ferreterias.jpg')"
        >
          <div class="px-16">
            <div class="lg:mx-10">
              <p
                class="text-xl text-center text-white lg:text-4xl 2xl:text-5xl"
              >
                Productos químico especializados para mentenimineto industrial 
              </p>
              <p
                class="text-xl text-center text-white mt-44 lg:text-4xl 2xl:text-5xl"
              >
                Ferretería
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div
          class="bg-center bg-no-repeat bg-cover py-44 lg:py-80"
          style="background-image: url('/images/home/slider/5 - Iron Cleaner.jpg')"
        >
          <div class="px-16">
            <div class="lg:mx-10">
              <p
                class="mt-20 text-xl text-center text-white lg:text-4xl 2xl:text-5xl"
              >
                Desoxidantes de superficies
              </p>
              <p
                class="text-xl text-center text-white mt-36 lg:text-4xl 2xl:text-5xl"
              >
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "Slider",
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: -10,
        slidesPerGroup: 1,
        loop: true,
        // autoplay: {
        //   delay: 4000
        // },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  }
};
</script>

<style scoped>
/* .swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48;
} */
</style>

