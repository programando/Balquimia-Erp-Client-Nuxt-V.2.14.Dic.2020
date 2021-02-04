<template>
  <div class="font-latos">
    <div
      class="bg-center bg-no-repeat bg-cover"
      style="background-image: url('/images/home/slider/investigacion.webp')"
    >
      <div
        class="h-screen py-10 pb-40 bg-no-repeat bg-cover lg:pt-20"
        style="background-image: url('/images/comunes/malla1.webp')"
      >
        <div class="mt-10">
          <div class="flex justify-center text-4xl font-bold text-white">
            <h2>BALQUIMIA S.A.S</h2>
          </div>
          <div
            class="items-center gap-10 mx-10 mt-10 md:mx-20 lg:mx-24 xl:mx-32 lg:grid lg:grid-cols-2"
          >
            <FraseDiaria></FraseDiaria>

            <div
              class="px-8 py-6 mt-6 bg-white border rounded-lg md:py-8 md:px-12 lg:mt-0"
            >
              <!-- label, titulo y descripcion -->

              <LabelTitle
                title="Bienvenid@"
                description="Registre sus credenciales para ingreso al sistema"
                align="center"
                color="extra"
              >
              </LabelTitle>

              <div class="mt-4">
                <!-- inputText -->
                <InputBasic
                  type="text"
                  text="jhonjamesmg@hotmail.com"
                  width="w-full"
                  img="/images/dashboard/user-repo.svg"
                  :alert="true"
                ></InputBasic>

                <!-- inputPassword -->
                <InputBasic
                  type="password"
                  text="contraseña"
                  width="w-full"
                  img="/images/dashboard/candado-cerrado.svg"
                  :alert="true"
                ></InputBasic>  
              </div>

              <div class="flex justify-between mt-4">
                <ButtonBasic
                  text="Olvidé mi contraseña"
                  to="/computron/terceros/users-reset-password"
                ></ButtonBasic>

                <ButtonLoad
                  text="Ingresar al sistema"
                  to="/computron/dashboard"
                  variant="success"
                ></ButtonLoad>
              </div>
              
              <div>
                <ButtonBasic
                  text="Cambiar Contraseña"
                  to="/computron/terceros/users-change-password"
                  
                ></ButtonBasic>
              </div>

              <button @click="mensaje">Mensaje</button>
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
import ButtonBasic from "@/components/library/buttons/buttonBasic";
import ButtonLoad from "@/components/library/buttons/buttonLoad";

import Messages from "@/mixins/toastrMessages";

export default {
  layout: "dashboard",
  components: {
    ButtonLoad,
    ButtonBasic,
    InputBasic,
    LabelTitle,
    
  },

  data: () => ({
    fcha_dspcho: "",
  }),

  mixins: [Messages],

  methods: {
    mensaje() {
      this.MsgSuccess("dldl", "2309403940'3'023'030'3", 5);
    },
  },
};
</script>
