import Api  from "@/config/Axios";
 

export default {

      async listaPrecios() {
        return Api.get('/productos/precios');
  },
  
  
        async porClaseProducto( id_clse_prdcto ) {
        return Api.get('/productos/por-clase', { params: { id_clse_prdcto } });
  },
  
        
         async porLineaProducto( id_linea ) {
        return Api.get('/productos/por-linea', { params: { id_linea } });
  },
  
 
 
}
