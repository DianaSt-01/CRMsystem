import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    async fetchCurrency () {
      const res = await fetch('http://data.fixer.io/api/latest?access_key=d382440850e56eb8024ab3c00bc18dd2&symbols=USD,EUR,RUB')
      // eslint-disable-next-line no-return-await
      return await res.json()
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info
  }
})
