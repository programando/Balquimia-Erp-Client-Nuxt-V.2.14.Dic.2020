<template>
  <div class="bg-gray-200">
    <Header></Header>
    <div class="bg-gray-900 ">
      <div
        class="bg-center bg-no-repeat bg-cover pt-64 lg pb-10 lg:pb-32"
        style="background-image: url(/images/comunes/malla2.webp)"
      >
        <div class="px-10 md:px-16">
          <div class="-ml-20 -mt-20 md:-ml-16 relative">
            <Encabezado text="Contacto"></Encabezado>
          </div>

          <div class="my-8 lg:my-14">
            <h2
              class="px-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold text-white"
            >
              Contáctenos
            </h2>
            <p
              class="px-4 text-white text-center pt-4 lg:pt-6 md:text-lg lg:text-xl lg:px-20 xl:px-40 xl:text-2xl"
            >
              En Estamos comprometidos con el mejoramiento continuo para
              optimizar sus recursos, escríbanos, nos contactaremos con ud.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:flex justify-center mt-4 lg:mx-10  ">
      <div class="py-10 px-4 mx-4 lg:w-3/5 lg:ml-16">
        <h2 class="text-gray-700 text-2xl lg:text-3xl">Comuniquese con nosotros</h2>
        <div class="mt-4">
          <p class="text-xs lg:text-sm">Dirección:</p>
          <p class="text-primary text-lg lg:text-xl ">CLL 35 N° 4-31</p>
          <p class="text-xs lg:text-sm text-gray-700">Cali, Valle del Cauca - Colombia</p>
        </div>
        <div class="mt-4">
          <p class="text-xs lg:text-sm">Línea gratuita al cliente:</p>
          <p class="text-primary text-lg lg:text-xl">01 8000 18 TRON ( 8766 )</p>
        </div>
        <div class="mt-4">
          <p class="text-xs lg:text-sm">PBX::</p>
          <p class="text-primary text-lg lg:text-xl ">(+57) 2 488 1616</p>
        </div>
        <div class="mt-4">
          <p class="text-xs lg:text-sm">Email:</p>
          <p class="text-primary text-lg lg:text-xl">ventas@balquimia.com</p>
        </div>
        <div class="mt-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15930.173410412854!2d-76.51313999999999!3d3.46053000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9fbbbe887df4bb2d!2sBALQUIMIA%20S.A.S.!5e0!3m2!1ses!2sco!4v1608775033961!5m2!1ses!2sco" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
      <div class="mb-20 px-4 mx-4  lg:mt-10 col-start-2 col-span-3">
        <h2 class="text-gray-700 text-2xl lg:text-4xl">Formulario de contacto</h2>
        <p class="mt-2 text-gray-600 w-2/3 lg:text-lg lg:w-4/5">
          Si tiene alguna solicitud o sugerencia por favor diligencie este
          formulario, y uno de nuestros ejecutivos se pondrá en contacto con
          usted en un tiempo máximo de 48 horas.
        </p>

        <form class="mt-6">
          <input
            class="border border-gray-500 w-2/3 lg:w-4/5 py-3 px-6 bg-white focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="Nombre"
          />
          <input
            class="border border-gray-500 w-2/3 lg:w-4/5 mt-2 py-3 px-6 bg-white focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="Empresa"
          />
          <input
            class="border border-gray-500 w-2/3 lg:w-4/5 mt-2 py-3 px-6 bg-white focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="Ciudad"
          />
          <input
            class="border border-gray-500 w-2/3 lg:w-4/5 mt-2 py-3 px-6 bg-white focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="E-mail"
          />
          <input
            class="border border-gray-500 w-2/3 lg:w-4/5 mt-2 py-3 px-6 bg-white focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="Telefono"
          />
          <input
            class="border border-gray-500 w-2/3 lg:w-4/5 mt-2 py-3 px-6 bg-white focus:ring-2 focus:ring-gray-200"
            type="text"
            placeholder="Celular"
          />
          <textarea
            class="mt-2 w-2/3 lg:w-4/5 pt-8 px-6 border border-gray-500"
            name=""
            id=""
            cols="22"
            rows="5"
            placeholder="¿En que podemos ayudarte?"
          ></textarea>
          <p class="w-2/3 text-gray-700 text-xs mt-2 ">
            Al llenar y enviar este formulario, acepto las Política de
            Tratamiento de datos personales de Balquimia SAS.
          </p>
          <input
            class="py-2 px-6 bg-primary hover:bg-indigo-900 text-white mt-4"
            type="submit"
            value="Enviar mensaje"
          />
        </form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/inicio/header/indexHeader";
import Footer from "@/components/inicio/footer/footer";
import Encabezado from '@/components/comun/Encabezado'
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style></style>
