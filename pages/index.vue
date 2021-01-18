<template>
  <div>
    <Header></Header>
    <!-- sliderss -->
    <Slider></Slider>

    <!-- aside -->
    <Experiencia></Experiencia>

    <!-- section -->
    <LineasProductos></LineasProductos>

    <Diferenciadores></Diferenciadores>

    <ProductosDestacados></ProductosDestacados>

    <Clientes></Clientes>

    <Footer></Footer>
  </div>
</template>

<script>
import Header               from "@/components/home/header/indexHeader";
import Experiencia          from "@/components/home/experiencias";
import LineasProductos      from "@/components/home/lineasProductos/lineasProductos";
import Slider               from "@/components/home/slider/slider";
import Diferenciadores      from "@/components/home/diferenciadores.vue";
import ProductosDestacados  from "@/components/home/productosDestacados/productosDestacados.vue";
import Clientes             from "@/components/home/clientesList.vue";
import Footer               from "@/components/home/footer/footer.vue";
import Productos            from "@/models/Prdcto";
export default {
  components: {
    Header,
    Slider,
    Experiencia,
    LineasProductos,
    Diferenciadores,
    ProductosDestacados,
    Clientes,
    Footer,
  },

  data: () => ({}),
 

  methods: {
 
    },

 
};
</script>
