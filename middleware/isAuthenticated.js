
export default async  function isAuthenticated({ store, redirect }) {
 
  if ( !store.state.Logueado ) {
      return redirect('/computron');
    }  
 
  
}
