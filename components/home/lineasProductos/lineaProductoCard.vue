<template>
  <div class="relative mx-4 my-4">
    <div class="card">
      <div class="image">
        <div
          class="relative px-10 py-10 bg-center bg-no-repeat bg-cover border-2 md:px-6 lg:px-4 md:py-8 hover:text-white img"
          :style="getImage(imagen)"
        ></div>
      </div>
      <div class="details bg-primary">
        <div class="center">
          <h2 class="mt-2 mb-4 text-base font-bold text-black uppercase">
            {{ nom_linea }}
          </h2>
          <p class="text-lg text-black">
            {{ slogan }}
          </p>

          <nuxt-link to="/store/productos">
            <div class="inline-block px-4 py-2 font-semibold bg-primary">
              Mas información
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardLineasProductos",
  props: {
    nom_linea: String,
    id_linea: Number,
    slogan: String,
    imagen: String,
  },
  methods: {
    getImage(imageName) {
      return 'background-image: url("' + imageName + '")';
    },
  },
};
</script>

<style>
.card {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); 
    height: 350px;
    
    background: #000;
}

.card .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.card .image .img {
    width: 100%;
    height: 100%;
    transition: .5s;
}

.card:hover .image .img {
    opacity: .5;
    transform: translateX(30%);/*100%*/
}

.card .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;/*100%*/
    height: 100%;
    transition: .5s;
    transform-origin: left;
    transform: perspective(2000px) rotateY(-90deg);
}

.card:hover .details {
    transform: perspective(2000px) rotateY(0deg);
}

.card .details .center {
    padding: 20px;
    text-align: center;
    background: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>
