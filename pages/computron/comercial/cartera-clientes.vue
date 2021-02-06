<template>
  <div class="font-latos">
    <div class="min-h-screen px-4 pt-24 pb-40 bg-gray-100">
      <div class="pb-4 mx-2 bg-white border-2 rounded-lg">
        <h2
          class="items-center py-2 text-lg font-semibold text-center text-white bg-primary"
        >
          Cartera de Clientes
        </h2>
      </div>
      <div class="mx-2 border rounded-lg lg:grid lg:grid-cols-6">
        <div class="col-span-2 mr-1 bg-gray-300 lg:grid lg:grid-cols-2">
          <div class="col-span-2 px-4 py-2">
            <input class="w-full" type="text" />
          </div>
          <div class="px-4">
            <p>Cliente</p>
          </div>
          <div class="px-4">
            <p>Deuda</p>
          </div>
        </div>
        <div class="col-span-4 bg-gray-300">
          <div class="mt-2 lg:grid lg:grid-cols-9">
            <div
              class="flex items-center justify-center px-2 bg-green-500 border"
            >
              <p>Fecha</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-green-500 border"
            >
              <p>Factu</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-green-500 border"
            >
              <p>Valor</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-green-500 border"
            >
              <p>Plazo</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-green-500 border"
            >
              <p>Lleva</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-green-500 border"
            >
              <p>0 - 30</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-green-500 border"
            >
              <p>31 - 60</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-green-500 border"
            >
              <p>61 - 90</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-green-500 border"
            >
              <p>90 o más</p>
            </div>
          </div>

          <div class="lg:grid lg:grid-cols-9">
            <div
              class="flex items-center justify-center px-2 bg-white border"
            >
              <p>Fecha</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-white border"
            >
              <p>Fecha</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-white border"
            >
              <p>Fecha</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-white border"
            >
              <p>Fecha</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-white border"
            >
              <p>Fecha</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-white border"
            >
              <p>Fecha</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-white border"
            >
              <p>Fecha</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-white border"
            >
              <p>Fecha</p>
            </div>
            <div
              class="flex items-center justify-center px-2 bg-white border"
            >
              <p>Fecha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "layoutComputron",
  name: "index",
  components: {}
};
</script>
