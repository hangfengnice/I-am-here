import Vue from 'vue'
import Vuex from 'vuex'
import state from './store'
import getters from './getters'
import actions from './actions'
import mutations from './mutations.js'

Vue.use(Vuex)

const types = {
  SET_USER : 'SET_USER',
  SET_TARGET_USER: "SET_TARGET_USER"
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})