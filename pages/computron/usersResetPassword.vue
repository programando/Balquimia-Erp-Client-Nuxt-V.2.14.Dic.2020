<template>
  <div>
    <div>
      <div
        class="bg-center bg-no-repeat bg-cover"
        style="background-image: url('/images/home/slider/investigacion.webp')"
      >
        <div
          class="h-screen py-10 pb-40 bg-no-repeat bg-cover lg:pt-20"
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
                  description="Enviaremos un correo electronico a la cuentra registrada en nuestro sistema con las instrucciones para que cambie los datos de acceso"
                  align="center"
                  color="extra"
                >
                </LabelTitle>

                <div class="px-4 mt-4 lg:px-8 xl:px-10">
                  <!-- inputGmail -->
                  <InputGmail
                    text="Cuenta de correo electronico o email"
                    width="w-full"
                  >
                  </InputGmail>


                  <div class="flex justify-center mt-4">
                    <ButtonLoad
                      text="Enviar Correo"
                      to="/"
                      variant="primary"
                    ></ButtonLoad>
                  </div>
                </div>
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
import InputGmail from "@/components/library/InputGmail";
import ButtonLoad from "@/components/library/ButtonLoad";
export default {
  name: "Contraseña",
  components: {
    LabelTitle,
    InputGmail,
    ButtonLoad
  }
};
</script>
<style lang="">
</style>