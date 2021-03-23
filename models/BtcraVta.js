/*  BITACORA DE VENTAS */
import Api from "@/config/Axios";
 

export default {

      async VendedorUltimosDosAnios( idTercVendedor ) {
        return Api.get('/ventas/vendedor', { params: { idTercVendedor } } );
  },
  
  
 
 
}
