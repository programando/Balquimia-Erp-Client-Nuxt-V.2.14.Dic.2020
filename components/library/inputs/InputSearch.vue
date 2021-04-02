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
    <transition
      enter-active-class="duration-300 ease-out"
      enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      enter-to-class="translate-y-0 opacity-100 sm:scale-10"
      leave-active-class="duration-200 ease-in"
      leave-class="translate-y-0 opacity-100 sm:scale-100"
      leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
    >
      <div
        v-if="modal"
        class="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 max-h-lg "
      >
        <transition
          enter-active-class="duration-300 ease-out"
          enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          enter-to-class="translate-y-0 opacity-100 sm:scale-10"
          leave-active-class="duration-200 ease-in"
          leave-class="translate-y-0 opacity-100 sm:scale-100"
          leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        >
          <div class="w-4/6 mt-10 bg-white rounded-lg">
            <div class="flex items-center justify-between px-4 bg-primary">
              <h2 class="py-2 text-lg font-semibold text-white ">
                <strong><slot name="ModalTitle">Búsqueda</slot></strong>
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
                @change="BuscarTercero()"
                @input="BuscarTercero()"
                :textLabel="labelTitle"
                placeholder="Digite para iniciar la búsqueda..."
                width="w-5/6"
                v-model="form.filtroBusqueda"
              ></InputLabel>
            </div>

            <div class="h-90">
              <div class="w-full col-span-2 px-4 py-1 border-2">
                <table>
                  <thead>
                    <tr>
                      <th>Nit</th>
                      <th>Nombre/Razón Soc.</th>
                      <th>Sucursal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody
                    class="flex-col w-full overflow-y-scroll"
                    style="height: 40vh"
                  >
                    <tr
                      v-for="Tercero in tercerosEncontrados"
                      :key="Tercero.id_terc"
                    >
                      <td>{{ Tercero.nro_identif }}</td>
                      <td>{{ Tercero.nom_full }}</td>
                      <td>{{ Tercero.nom_suc }}</td>
                      <td
                        class="flex items-center justify-center border-t-2 border-b-2 border-r-2 "
                      >
                        <ButtonIcon
                          urlIcon="/images/dashboard/left-arrow-repo.svg"
                          variant="success"
                        ></ButtonIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import InputLabel from "@/components/library/inputs/InputLabel";
import ButtonIcon from "@/components/library/buttons/buttonIcon";
import Terceros from "@/models/Terceros";

export default {
  name: "InputSearch",
  components: {
    InputLabel,
    ButtonIcon
  },
  props: {
    UrlBusqueda: String,
    labelTitle: String,
    placeholder: String,
    width: String
  },

  data() {
    return {
      modal: false,
      textLabel: "",
      form: {
        filtroBusqueda: "",
        idTercVendedor: ""
      },
      tercerosEncontrados: [
        { id: 1, nro_identif: 10, nom_full: "Alfonzo Perez", nom_suc: "2" },
        { id: 1, nro_identif: 10, nom_full: "Alfonzo Perez", nom_suc: "2" },
        { id: 1, nro_identif: 10, nom_full: "Alfonzo Perez", nom_suc: "2" },
        { id: 1, nro_identif: 10, nom_full: "Alfonzo Perez", nom_suc: "2" },
        { id: 1, nro_identif: 10, nom_full: "Alfonzo Perez", nom_suc: "2" },
        { id: 1, nro_identif: 10, nom_full: "Alfonzo Perez", nom_suc: "2" },
        { id: 1, nro_identif: 10, nom_full: "Alfonzo Perez", nom_suc: "2" },
        { id: 1, nro_identif: 10, nom_full: "Alfonzo Perez", nom_suc: "2" },
        { id: 1, nro_identif: 10, nom_full: "Alfonzo Perez", nom_suc: "2" }
      ]
    };
  },

  methods: {
    BuscarTercero() {
      this.form.idTercVendedor = this.$store.state.User.IdTercLogueado;
      Terceros.clientesBuscar(this.form).then(response => {
        this.tercerosEncontrados = response.data;
      });
    }
  }
};
</script>

<style></style>
