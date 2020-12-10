<template>
   <!-- Navbar en pantallas pequeñas y medianas -->
    <nav>
          <ul class="text-base pt-4">
              <Inicio      :responisve="true"></Inicio>
              <Productos   :responsive="true"></Productos>
              <Servicios   :responsive="true"></Servicios>
              <Experiencia :responsive="true"></Experiencia>
              <Contacto    :responsive="true"></Contacto>  
          </ul>
          <ul class="mt-4">

            <Idioma   :responsive="true"> </Idioma>
            <Carrito  :responsive="true"> </Carrito>
            <Clientes :responsive="true"> </Clientes>
          </ul>
        </nav>
</template>

<script>
  import Inicio       from '@/components/landing-page/navOptions/inicio';
  import Productos    from '@/components/landing-page/navOptions/productos';
  import Servicios    from '@/components/landing-page/navOptions/servicios';
  import Experiencia  from '@/components/landing-page/navOptions/experiencia';
  import Contacto     from '@/components/landing-page/navOptions/contacto';
  import Idioma       from '@/components/landing-page/navOptions/idioma';
  import Carrito      from '@/components/landing-page/navOptions/carrito';
  import Clientes     from '@/components/landing-page/navOptions/clientes';

  export default {
    data: ()=> ({

    }),
    components : { Inicio, Productos, Servicios, Experiencia, Contacto, Idioma, Carrito, Clientes }
  }
</script>