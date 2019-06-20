import Vue from 'vue'
import App from './App.vue'
import store from './store/'

import 'bootstrap/scss/bootstrap-reboot.scss'
import 'bootstrap/scss/bootstrap-grid.scss'

import 'element-ui/lib/theme-chalk/index.css'

import './assets/scss/main.scss'


import { Input, Button, Tabs, TabPane } from 'element-ui'

Vue.use(Input)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)

import Location from './services/CurrentLocation'

Location.init()

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
