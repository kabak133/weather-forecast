import formatDay from './formatDay'


export default {
  install(Vue) {
    Vue.filter('formatDay', formatDay)

  }
}