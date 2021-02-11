import Api  from "@/config/Axios";
 

export default {

      async contactoSendEmail( formData ) {
        return Api.post('contactos', formData);
  },
  
  
 
 
}
