import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)

const cartPlugin = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
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
  }
})
