export default function (contex) {
  if (!contex.store.state.User.Logueado) {
    contex.redirect('/computron');
  }
 
}  
  

/* export default   function isAuthenticated({ store, redirect }) {
 
  if ( !store.state.Logueado ) {
      return redirect('/computron');
  }  
 
  
} */
