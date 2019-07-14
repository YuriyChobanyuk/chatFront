import Vue from 'vue'
import Vuex from 'vuex'
import messanger from './modules/messanger'
import authentication from './modules/authentication'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    messanger,
    authentication
  }
})
