/* <template>
  <div
    v-swiper="swiperOption"
    class="relative w-full z-100"
    :loadtheme="false"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div
          class="w-full bg-center bg-no-repeat bg-contain py-44 lg:py-80"
          style="background-image: url('/images/home/slider/Slider-Alimentaria-1.png')"    >
          <div class="px-16">
            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul" >
            </button>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div
          class="bg-center bg-no-repeat bg-contain py-44 lg:py-80"
          style="background-image: url('/images/home/slider/Alimentaria-2.jpg')"
        >
          <div class="px-16">
            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
            
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-no-repeat bg-contain py-44 lg:py-80"
          style="background-image: url('/images/home/slider/Industrial-1.jpg')"
        >
          <div class="px-16">

            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
              
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-no-repeat bg-contain py-44 lg:py-80"
          style="background-image: url('/images/home/slider/Industrial-2.jpg')"
        >
          <div class="px-16">

            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
              
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-no-repeat bg-contain py-44 lg:py-80"
          style="background-image: url('/images/home/slider/Ferreterias-1.jpg')"
        >
          <div class="px-16">
  
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
          delay: 4000
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