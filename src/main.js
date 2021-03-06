import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from 'axios'
import './assets/css/reset.css'
import { Notification } from 'element-ui';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$notify = Notification

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
