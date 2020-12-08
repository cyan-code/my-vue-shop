import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'
import user from './modules/user.js'

Vue.use(Vuex)

// const cartPlugin = store => {
//   store.subscribe((mutation, state) => {
//     localStorage.setItem('cart', JSON.stringify(state.cart))
//     localStorage.setItem('username', state.user.username)
//     localStorage.setItem('avatarUrl', state.user.avatarUrl)
//     localStorage.setItem('token', state.user.token)
//   })
// }
/* const cartPlugin = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'user/LOGIN_SUCCESS') {
      localStorage.setItem('username', state.user.username)
      localStorage.setItem('avatarUrl', state.user.avatarUrl)
      localStorage.setItem('token', state.user.token)
    } else {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  })
} */
const cartPlugin = store => {
  store.subscribe(({ type }, state) => {
    switch (type) {
      case 'user/LOGIN_SUCCESS':
        localStorage.setItem('username', state.user.username)
        localStorage.setItem('avatarUrl', state.user.avatarUrl)
        localStorage.setItem('token', state.user.token)
        break
      case 'addToCart':
      case 'toggleCheck':
      case 'toggleAllCheck':
      case 'delCartItem':
      case 'changeItemCount':
      case 'changeBackBtnandTitle':
        localStorage.setItem('cart', JSON.stringify(state.cart))
        break
    }
  })
}

export default new Vuex.Store({
  plugins: [cartPlugin],
  state,
  getters,
  mutations,
  actions: {
  },
  modules: {
    user
  }
})
