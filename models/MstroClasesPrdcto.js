import Api  from "@/config/Axios";
 

export default {
      async getClasesPorLinea( formData ) {
        return Api.get('clases/productos/por-linea', { params:   formData   } ); 
  },

}