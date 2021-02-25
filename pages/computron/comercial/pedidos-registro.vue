<template>
  <div class="font-latos">
    <div class="min-h-screen px-4 pt-24 pb-40 bg-gray-100">
      <div class="pb-10 mx-2 bg-white border-2 rounded-lg">
        <h2
          class="py-2 text-lg font-semibold text-center text-white bg-primary"
        >
          Registro de Pedidos
        </h2>
        <div class="grid gap-2 lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-2">
            <InputSearch
              textLabel="Cliente"
              placeholder="Nombre del Cliente"
              width="w-full"
            ></InputSearch>
          </div>

          <div class="mx-12 mt-2 sm:ml-16 lg:ml-2 lg:mr-4">
            <InputLabel
              textLabel="Sucursal"
              placeholder="Sucursal"
              width="w-full"
            ></InputLabel>
          </div>

          <div class="mx-12 mt-2 sm:ml-16 md:ml-15 lg:ml-4 lg:mr-4">
            <InputLabel
              textLabel="Vendedor"
              placeholder="Vendedor"
              width="w-full"
            ></InputLabel>
          </div>
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-4">
            <!-- <InputDate textLabel="Fecha Despacho" width="w-full"></InputDate> -->
            <label>Fecha Despacho</label>
            <Calendario />
            




          </div>
        </div>
        <div class="grid gap-2 lg:gap-6 md:grid-cols-2 lg:grid-cols-5 ">
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-2 lg:col-span-2">
            <InputLabel
              textLabel="Orden de Compra"
              placeholder="Numero orden de compra"
              width="w-full"
            ></InputLabel>
          </div>
          <div class="mx-12 mt-2 sm:ml-16 lg:ml-4 lg:mr-4 lg:col-span-3">
            <InputLabel
              textLabel="Observaciones del pedido"
              placeholder="Observaciones del pedido"
              width="w-full"
            ></InputLabel>
          </div>
        </div>

        <div class="mt-4 text-sm">
          <NavTabsOptions></NavTabsOptions>
        </div>
        
        
          
        
      </div>
    </div>
  </div>
</template>
<script>
import InputSearch from "@/components/library/inputs/InputSearch";
import InputLabel from "@/components/library/inputs/InputLabel";
import InputDate from "@/components/library/inputs/InputDate";
import ButtonIcon from "@/components/library/buttons/buttonIcon";
import NavTabsOptions from "../comercial/pedidosPartials/navTabsOptions"
import Calendario from "@/components/computron/terceros/calendario"

export default {
  layout: "layoutComputron",
  name: "index",
  components: {
    InputSearch,
    InputLabel,
    InputDate,
    ButtonIcon,
    NavTabsOptions,
    Calendario
    
  },
  data() {
    return {
      isOpen: false,
      registro: false,
      fecha: "",
      value: "",
      
    };
  },

  
};
</script>

<style scoped>

</style>
