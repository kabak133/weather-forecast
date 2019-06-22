import debounce from './debounce'


export default {
  install(Vue) {
    Vue.prototype.$_debounce = debounce

  }
}