<template>
  <div
    class="bg-center bg-no-repeat bg-cover"
    style="background-image: url('/images/home/slider/investigacion.webp')"
  >
    <div
      class="h-screen py-10 pb-40 bg-no-repeat bg-cover lg:pt-16"
      style="background-image: url('/images/comunes/malla1.webp')"
    >
      <div class="mt-40 lg:mx-20 xl:mx-56">
        <div class="mx-16 mt-10 md:mx-24 lg:mx-32 xl:mx-40">
          <div
            class="px-10 py-6 mt-6 bg-white border rounded-lg md:py-8 md:px-16 lg:mt-0"
          >
            <!-- label, titulo y descripcion -->

            <LabelTitle
              title="BALQUIMIA S.A.S"
              description="Por favor registra los nuevos datos de la contraseña con la que ingresastes a nuestro sistema"
              color="extra"
              align="center"
            >
            </LabelTitle>

            <div class="mt-4 ">
              <ButtonPassword
                  text="Nueva Contraseña"
                ></ButtonPassword>
              
                <ButtonPassword
                  text="Repetir Contraseña"
                ></ButtonPassword>
               
              <div class="flex justify-center mt-4">
                <ButtonLoad
                  text="Actualizar Contraseña"
                  to="/"
                  variant="success"
                ></ButtonLoad>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LabelTitle from "@/components/library/LabelTitle";
import InputBasic from "@/components/library/inputs/InputBasic";
import ButtonLoad from "@/components/library/buttons/buttonLoad";
import ButtonPassword from "@/components/library/buttons/buttonPassword";
import Password from 'vue-password-strength-meter';

export default {
  name: "CambioContraseña",
  components: {
    LabelTitle,
    InputBasic,
    ButtonLoad,
    Password,
    ButtonPassword
  },
  data: () => ({
      form :{
          password             : null,
          password_confirmation: null,
          token                : '',
      },
      errors : [],
  }),
      mounted() {
      this.form.token = this.$route.params.users_token;
  },
};
</script>
<style >
</style>