import Vue from 'vue';
import App from './App.vue';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/scss/bootstrap-grid.scss';

import {Input, Button} from 'element-ui';

Vue.use(Input);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
