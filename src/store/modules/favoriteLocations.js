import { deleteStorage, setStorage } from '../../services/workWithLocalStorage'
import { FAVORITE_LOC_KEY } from '../constants'
import Vue from 'vue'

const state = {
  favoriteLocation: {}
}

const getters = {
  getCurrentLocationWeather (state, getters, rootState, rootGetters) {
    return rootGetters['weather/getLocationWeather']
  },
  getFavoriteLocation: state => state.favoriteLocation
}

const mutations = {
  ADD_TO_FAVORITE_LOCATION: (state, {data, key}) => state.favoriteLocation = {...state.favoriteLocation, [key]: data},
  DELETE_FAVORITE_LOCATION: (state, key) => Vue.delete(state.favoriteLocation, key)
}

const actions = {
  addToFavoriteLocation: ({commit, getters}) => {
    let currentLocationData = {
      location: getters.getCurrentLocationWeather.location,
      current: getters.getCurrentLocationWeather.current,
    }
    let key = (`${currentLocationData.location.region} ${currentLocationData.location.name}`).replace(/ /ig, '%20')
    commit('ADD_TO_FAVORITE_LOCATION', {data: currentLocationData, key})

    //Save to Storage
    setStorage(FAVORITE_LOC_KEY, {[key]:currentLocationData})
  },
  deleteFavoriteLocation: ({commit}, key) =>{
    commit('DELETE_FAVORITE_LOCATION', key)
    deleteStorage(FAVORITE_LOC_KEY, key)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}