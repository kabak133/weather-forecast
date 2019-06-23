import Vue from 'vue'
import { deleteStorage, setStorage, getStorage } from '../../services/workWithLocalStorage'
import { getWeather } from '@/api/api.weather'
import { FAVORITE_LOC_KEY } from '../constants'

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
  DELETE_FAVORITE_LOCATION: (state, key) => Vue.delete(state.favoriteLocation, key),
  SET_FIRST_DATA: (state, data) => state.favoriteLocation = {...state.favoriteLocation, ...data}
}

const actions = {
  addToFavoriteLocation: ({commit, getters}) => {
    let currentLocationData = {
      location: getters.getCurrentLocationWeather.location,
      current: getters.getCurrentLocationWeather.current,
    }
    let key = (`${currentLocationData.location.region} ${currentLocationData.location.name}`).replace(/ /ig, '%20')
    commit('ADD_TO_FAVORITE_LOCATION', collectionData(getters.getCurrentLocationWeather))

    //Save to Storage
    setStorage(FAVORITE_LOC_KEY, {[key]: currentLocationData})

  },
  deleteFavoriteLocation: ({commit}, key) => {
    commit('DELETE_FAVORITE_LOCATION', key)
    deleteStorage(FAVORITE_LOC_KEY, key)
  },
  setFirstData: ({commit, dispatch}) => {
    let favorites = getStorage(FAVORITE_LOC_KEY)
    commit('SET_FIRST_DATA', favorites)
    if (favorites !== null && Object.keys(favorites).length) {
      dispatch('updateFirstData', Object.keys(favorites))
    }
  },
  updateFirstData: ({commit, dispatch}, payload) => {
    Promise.all(payload.map(getWeather))
    .then(results => {
      results.forEach((itm) => commit('ADD_TO_FAVORITE_LOCATION', collectionData(itm)))
    })
  }
}

function collectionData ({location, current}) {
  let smallData = {location, current}
  let key = (`${location.region} ${location.name}`).replace(/ /ig, '%20')
  return {data: smallData, key}

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}