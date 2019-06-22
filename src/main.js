import Vue from 'vue'
import App from './App.vue'
import store from './store/'


import './assets/scss/main.scss'

import filters from './filters/'
Vue.use(filters)

import { Input, Button, Tabs, TabPane, Card } from 'element-ui'

Vue.use(Input)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)

import Location from './services/CurrentLocation'

Location.init()

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
