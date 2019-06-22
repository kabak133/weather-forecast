import { searchLocation } from '@/api/api.searchLocate'

const state = {
  searchResult: [],
  favoriteLocation: []
}

const getters = {
  getSearchResult: state => state.searchResult,
  someGetter (state, getters, rootState, rootGetters) {
    return rootGetters['weather/getLocationWeather']
  }
}

const mutations = {
  SET_SEARCH_RESULT: (state, data) => state.searchResult = data,
  CLEAR_SEARCH_RESULT: (state) => state.searchResult = [],
  ADD_TO_FAVORITE_LOCATION: (sate) => state.favoriteLocation = []
}

const actions = {
  searchLocations: async ({commit}, text) => {
    const data = await searchLocation(text)
    commit('SET_SEARCH_RESULT', data)
  },
  clearSearchResult: ({commit}) => {
    commit('CLEAR_SEARCH_RESULT')
  },
  addToFavoriteLocation: ({commit, getters}) => {
    console.log('ggg', getters.someGetter)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}