import { getWeather } from '@/api/weather'

const state = {
  currentLocation: {},
  getLocationWeather: {}
}

const getters = {
  getCurrentLocation: state => state.currentLocation,
  getLocationWeather: state => state.getLocationWeather,
}

const mutations = {
  SET_CURRENT_LOCATION: (state, data) => {
    state.currentLocation = data
  },
  SET_LOCATION_WEATHER: (state, data) => {
    state.getLocationWeather = data
  }
}

const actions = {
  SetCurrentLocation: async ({commit}, payload) => {
    commit('SET_CURRENT_LOCATION', payload)

    const data = await getWeather(`${payload.lat},${payload.lng}`)

    commit('SET_LOCATION_WEATHER', data)
    console.log('data', data)

  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
