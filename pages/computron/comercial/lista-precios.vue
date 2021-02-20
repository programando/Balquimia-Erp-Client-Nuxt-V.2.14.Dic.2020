<template>
  <div class="pt-40 bg-gray-200">
    <div class="px-4 py-2 mx-10 lg:mx-20">
      <label class="font-semibold text-extra">Buscar Producto :</label>
      <input
        class="inline w-5/6 px-2 py-1 ml-2 border rounded-lg focus:border-primary focus:outline-none focus:shadow-outline"
        type="text"
        v-model="busqueda"
        placeholder="Buscar"
      />
    </div>
    <div class="mx-20">
      <table class="w-full">
        
        <thead class="flex w-full text-white ">
          <tr class="flex w-full mr-3">
            <th
              class="flex justify-center w-4/12 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
            >
              Producto
            </th>
            <th
              class="flex justify-center w-3/12 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
            >
              Presentación
            </th>
            <th
              class="flex justify-center w-3/12 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
            >
              Precio
            </th>
            <th
              class="flex justify-center w-2/12 px-2 py-2 border-t border-b border-l border-gray-400 bg-primary"
            >
              Iva
            </th>
          </tr>
        </thead>  

        <tbody
          class="flex flex-col w-full overflow-y-scroll bg-grey-light"
          style="height: 50vh"
        >
          <tr
            v-for="producto in buscarProductos"
            :key="producto.id"
            class="flex w-full bg-white cursor-pointer "
          >
            <td
              class="w-4/12 px-2 py-1 border-t border-b border-l border-gray-400"
            >
              {{ producto.nombre | Capitalize }}
            </td>
            <td class="w-3/12 px-2 py-1 text-right border border-gray-400">
              {{ producto.presentacion }}
            </td>
            <td class="w-3/12 px-2 py-1 text-right border border-gray-400">
              {{ producto.precio }}
            </td>
            <td class="w-2/12 px-2 py-1 text-right border border-gray-400">
              {{ producto.iva }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
 
export default {
  layout: "layoutComputron",
  name: "index",

  data: () => ({
    busqueda: "",
    tableColumns : [ { 'id' : '0', 'name': 'Producto'  }, 
                     { 'id' : '1', 'name': 'Presentación'  }
    ],
    productos: [
      {
        id: 0,
        nombre: "alcohol industrial",
        presentacion: "Galones",
        precio: 20000,
        iva: "19%"
      },
      {
        id: 1,
        nombre: "aceite sintetico",
        presentacion: "20 LTS",
        precio: 5000,
        iva: "19%"
      },
      {
        id: 2,
        nombre: "atomizador rosca",
        presentacion: "KG.",
        precio: 8000,
        iva: "19%"
      }
    ]
  }),
  

  computed: {

    // pasar el varlo de la busqueda a minuscula
    busquedaMin(){
      return this.busqueda.toLowerCase()
      
    },

    // aplicar un filtro con el valor de la busqueda ya en minuscula
    buscarProductos() {
      return this.productos.filter((producto)=> {
        return producto.nombre.match(this.busquedaMin);
      })
    }
  },
};
</script>

<style></style>
