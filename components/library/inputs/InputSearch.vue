<template>
  <div>
    <label class="block"> {{ textLabel }}</label>
    <div @click="modal = !modal" class="relative z-10 inline cursor-pointer">
      <img
        class="inline h-6 -mr-8"
        src="/images/dashboard/search-repo.svg"
        alt=""
      />
    </div>

    <input
      type="text"
      class="py-1 pl-8 text-sm bg-gray-100 border rounded-lg focus:border-primary focus:outline-none focus:shadow-outline"
      :class="width"
      :placeholder="placeholder"
    />

    <!-- Modal -->
    <div
      v-if="modal"
      class="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="w-4/6 pb-10 -mt-48 bg-white rounded-lg">
        <div class="flex items-center justify-between px-4 bg-primary">
          <h2 class="py-2 text-lg font-semibold text-white ">
            Búsqueda de Clientes
          </h2>
          <div @click="modal = false" class="cursor-pointer ">
            <img
              class="h-6"
              src="/images/dashboard/close-repo.svg"
              alt="close"
            />
          </div>
        </div>

        <div class="px-4 py-2">
          <InputLabel
            textLabel="Puede realizar la busqueda por: Nombre/Razón Social, Nit, Sucursal, Nombre comercial"
            placeholder="Digite para iniciar la búsqueda..."
            width="w-5/6"
          ></InputLabel>
        </div>

        <div class="grid px-4 lg:grid-cols-9">
          <div class="w-full col-span-2 px-4 py-1 border-2">
            <p>Nit</p>
          </div>
          <div class="w-full col-span-4 px-4 py-1 border-t-2 border-b-2">
            <p>Nombre/Razón Social</p>
          </div>
          <div class="w-full col-span-2 px-4 py-1 border-2">
            <p>Sucursal</p>
          </div>
          <div class="border-t-2 border-b-2 border-r-2">

          </div>
        </div>

        <div class="grid px-4 lg:grid-cols-9">
          <div class="w-full col-span-2 px-4 py-1 text-gray-700 border-2">
            <p> </p>
          </div>
          <div class="w-full col-span-4 px-4 py-1 text-gray-700 border-t-2 border-b-2">
            <p> </p>
          </div>
          <div class="w-full col-span-2 px-4 py-1 text-gray-700 border-2">
            <p> </p>
          </div>
          <div class="flex items-center justify-center border-t-2 border-b-2 border-r-2 ">
            <ButtonIcon
              urlIcon="/images/dashboard/left-arrow-repo.svg"
              variant="success"
            ></ButtonIcon>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import InputLabel from "@/components/library/inputs/InputLabel";
import ButtonIcon from "@/components/library/buttons/buttonIcon";

export default {
  name: "InputSearch",
  components: {
    InputLabel,
    ButtonIcon
  },
  props: {
    textLabel: String,
    placeholder: String,
    width: String
  },

  data() {
    return {
      modal: false
    };
  },

  methods: {}
};
</script>

<style></style>
