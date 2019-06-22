import Vue from 'vue';
import Vuex from 'vuex';

//modules
import weather from './modules/weather'
import searchLocate from './modules/searchLocate'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    weather,
    searchLocate
  }
});
