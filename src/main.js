import Vue from 'vue'
import App from './App.vue'
import store from './store/'


import './assets/scss/main.scss'

import filters from './filters/'
Vue.use(filters)

import plugins from './plugins/'
Vue.use(plugins)


import { Input, Button, Tabs, TabPane, Card } from 'element-ui'

Vue.use(Input)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)

import Location from './services/CurrentLocation'

Location.init()

Vue.config.productionTip = false


Vue.directive('click-outside', {
  bind: function(el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name
      let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
      if (compName) { warn += `Found in component '${compName}'` }

      console.warn(warn)
    }
    // Define Handler and cache it on the element
    const bubble = binding.modifiers.bubble
    const handler = (e) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = handler

    // add Event Listeners
    document.addEventListener('click', handler)
  },

  unbind: function(el, binding) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null

  }
})


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
