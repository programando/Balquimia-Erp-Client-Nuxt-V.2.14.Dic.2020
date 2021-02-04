<template>
  <div class="font-latos">
    <div class="min-h-screen px-4 pt-24 pb-40 bg-gray-100">
      <div class="mx-2">
        <div class="pb-10 bg-white border-2 rounded-lg">
          <h2
            class="py-2 text-lg font-semibold text-center text-white  bg-primary"
          >
            Registro de Pedidos
          </h2>
          <div class="grid gap-2 lg:gap-0 md:grid-cols-2 lg:grid-cols-4">
            <div class="mt-2 ml-12 sm:ml-16 lg:ml-4 lg:mr-2">
              <InputSearch
                textLabel="Cliente"
                placeholder="Nombre del Cliente"
                width="w-5/6"
              ></InputSearch>
            </div>

            <div class="mt-2 ml-12 sm:ml-16 lg:ml-2 lg:mr-4">
              <InputLabel
                textLabel="Sucursal"
                placeholder="Sucursal"
                width="w-5/6"
              ></InputLabel>
            </div>

            <div class="mt-2 ml-12 sm:ml-16 md:ml-15 lg:ml-4 lg:mr-4">
              <InputLabel
                textLabel="Vendedor"
                placeholder="Vendedor"
                width="w-5/6"
              ></InputLabel>
            </div>
            <div class="mt-2 ml-12 sm:ml-16 lg:ml-4 lg:mr-4">
              <InputDate textLabel="Fecha Despacho" width="w-5/6"></InputDate>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputSearch from "@/components/library/inputs/InputSearch";
import InputLabel from "@/components/library/inputs/InputLabel";
import InputDate from "@/components/library/inputs/InputDate";
export default {
  layout:"layoutComputron",
  name: "index",
  components: {
    InputSearch,
    InputLabel,
    InputDate,
  },
  data() {
    return {
      isOpen: false,
      registro: false,
      fecha: "",
    };
  },
  methods: {

  },
};
</script>
