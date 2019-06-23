import { searchLocation } from '@/api/api.searchLocate'
import { getWeather } from '@/api/api.weather'


const state = {
  searchResult: [],
}

const getters = {
  getSearchResult: state => state.searchResult,
  getCurrentLocationWeather (state, getters, rootState, rootGetters) {
    return rootGetters['weather/getLocationWeather']
  }
}

const mutations = {
  SET_SEARCH_RESULT: (state, data) => state.searchResult = data,
  CLEAR_SEARCH_RESULT: (state) => state.searchResult = []
}

const actions = {
  searchLocations: async ({commit}, text) => {
    const data = await searchLocation(text)
    commit('SET_SEARCH_RESULT', data)
  },
  clearSearchResult: ({commit}) => {
    commit('CLEAR_SEARCH_RESULT')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}