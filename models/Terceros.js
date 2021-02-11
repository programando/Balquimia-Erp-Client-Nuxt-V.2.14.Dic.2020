import Api  from "@/config/Axios";
 

export default {

      async saveContacto( formData ) {
        return Api.post('contactos', formData);
  },
  
  
 
 
}
