<template>
  <div >
    <Header></Header>
      <!-- sliderss -->
      <Slider></Slider>

    <!-- aside -->
    <Experiencia></Experiencia>

    <!-- section -->
    <Industrias></Industrias>

    <Diferenciadores></Diferenciadores>
    
    <ProductosDestacados></ProductosDestacados>
    

    <Clientes></Clientes>

    <Footer></Footer>

    
  </div>
</template>

<script>
    import Header               from "@/components/home/header/indexHeader";
    import Experiencia          from "@/components/home/experiencias";
    import Industrias           from "@/components/home/industrias/industrias";
    import  Slider              from "@/components/home/slider/slider"
    import Diferenciadores      from '@/components/home/diferenciadores.vue';
    import ProductosDestacados  from '@/components/home/productosDestacados/productosDestacados.vue';
    import Clientes             from '@/components/home/clientesList.vue';
    import Footer               from '@/components/home/footer/footer.vue';
    
    import Productos from '@/models/Productos';
    export default {
     components: { Header, Slider,Experiencia,Industrias,Diferenciadores,ProductosDestacados, Clientes, Footer }, 
    
      data: () => ({
 
        }),
      created() {
        //this.listaPrecios();
      },
  
       methods: {
            listaPrecios() {
                Productos.listaPrecios()
                .then (response =>{
                    //this.depurarListaPrecios( response.data );
                    console.log(response.data  );
                })
            },

            depurarListaPrecios (Productos){
                   
                  const Datos = Productos.map((Producto) =>{
                      return { 
                          Producto    : Producto.nom_prdcto,
                          Presentacion: Producto.nom_prsntcion,
                          Valor       : Producto.vr_vta,
                      }
                  }) ;
                   
            },
           
      }

    };

</script>
