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
      class="py-1 pl-8 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:shadow-outline"
      :class="width"
      :placeholder="placeholder"
    />

    <!-- Modal search -->
    <div
      v-if="modal"
      class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="w-4/6 pb-10 bg-white rounded-lg">
        <div class="flex items-center justify-between px-4 bg-primary">
          <h2
            class="py-2 text-lg font-semibold text-white uppercase "
          >
            Busqueda de Clientes
          </h2>
          <div @click="modal = false" class="cursor-pointer ">
            <img class="h-6" src="/images/dashboard/close-repo.svg" alt="close">
          </div>
          
        </div>

        <div class="px-4 py-2">
          <InputLabel
            textLabel="Puede realizar la busqueda por: Nombre/Razón Social, Nit, Sucursal, Nombre Comercila"
            placeholder="Digite "
            width="w-5/6"
          ></InputLabel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputLabel from "@/components/library/inputs/InputLabel";
export default {
  name: "InputSearch",
  components: {
    InputLabel,
  },
  props: {
    textLabel: String,
    placeholder: String,
    width: String,
  },

  data() {
    return {
      modal: false,
    };
  },
};
</script>

<style>
</style>