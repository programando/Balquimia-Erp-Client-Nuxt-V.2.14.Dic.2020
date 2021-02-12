
export default function isAuthenticated({ store, redirect , next}) {
 
  if ( !store.state.Logueado ) {
      return redirect('/computron');
    }  
    next();
  
}
