
export const state = () => ({
  User: null,
   Logueado: false,
  
});

export const  getters = {
   getUser ( state ) {
      return state.User;
   },   
   isLoggin(state) {
      return state.Logueado;
   }
}

export const actions = {
   SetUser ( {commit}, User) {
      commit('SET_USER', User )
   },
   UserLogout({ commit }) {
       commit('USER_LOGOUT' )
   }
}


export const mutations = {
   SET_USER(state, UserData) {
      state.User     = UserData
      state.Logueado = true;
   },
   
   USER_LOGOUT(state) {
      state.User     = null
      state.Logueado = false; 
   }
}