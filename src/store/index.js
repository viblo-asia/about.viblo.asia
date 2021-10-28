import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import defaultStats from '@/data/counter-items'

Vue.use(Vuex)

const storeData = {
  state: {
    viblo: defaultStats.viblo,
    code: defaultStats.code,
    ctf: defaultStats.ctf
  },

  actions: {
    async getVibloStats ({ commit }) {
      const data = await axios.get(`${process.env.VUE_APP_VIBLO_API_URL}/api/about`).then(r => r.data)
      commit('setDataViblo', data)
    },

    async getCodeStats ({ commit }) {
      const data = await axios.get(`${process.env.VUE_APP_CODE_API_URL}/api/about`).then(r => r.data)
      commit('setDataCode', data)
    },

    async getCtfStats ({ commit }) {
      const data = await axios.get(`${process.env.VUE_APP_CTF_API_URL}/api/about`).then(r => r.data)
      commit('setDataCtf', data)
    }
  },

  mutations: {
    setDataViblo (state, data) {
      state.viblo = data
    },

    setDataCode (state, data) {
      state.code = data
    },

    setDataCtf (state, data) {
      state.ctf = data
    }
  }
}

const store = new Vuex.Store(storeData)

export default store
