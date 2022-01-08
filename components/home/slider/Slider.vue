/* <template>
  <div
    v-swiper="swiperOption"
    class="relative w-full z-100"
    :loadtheme="false"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div
          class="bg-center bg-cover py-96"
          style="background-image: url('/images/home/slider/1.png')"
        >
          <div class="px-16">
            <h2 class="text-4xl font-bold uppercase md:text-5xl">
              Balquimia
            </h2>
            <h3 class="mx-4 mt-2 text-xl text-white md:text-2xl">
             
            </h3>
            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
              
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-cover py-96"
          style="background-image: url('/images/home/slider/1.png')"
        >
          <div class="px-16">
            <h2 class="text-4xl font-bold text-white uppercase md:text-5xl">
              Balquimia
            </h2>
            <h3 class="mx-4 mt-2 text-xl text-white md:text-2xl">
              
            </h3>
            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
            
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-cover py-96"
          style="background-image: url('/images/home/slider/2.png')"
        >
          <div class="px-16">
            <h2 class="text-4xl font-bold text-white uppercase md:text-5xl">
              Balquimia
            </h2>
            <h3 class="mx-4 mt-2 text-xl text-white md:text-2xl">
             
            </h3>
            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
              
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-cover py-96"
          style="background-image: url('/images/home/slider/3.png')"
        >
          <div class="px-16">
            <h2 class="text-4xl font-bold text-white uppercase md:text-5xl">
              Balquimia
            </h2>
            <h3 class="mx-4 mt-2 text-xl text-white md:text-2xl">
              
            </h3>
            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
              
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-cover py-96"
          style="background-image: url('/images/home/slider/4.png')"
        >
          <div class="px-16">
            <h2 class="text-4xl font-bold text-white uppercase md:text-5xl">
              Balquimia
            </h2>
            <h3 class="mx-4 mt-2 text-xl text-white md:text-2xl">
             
            </h3>
            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
              
            </button>
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
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: -10,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
          delay: 3000
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
/* .swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48;
} */
</style> */