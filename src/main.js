import Vue from 'vue'
import App from './App.vue'
import router from './routing/router'
import './registerServiceWorker'
import { apolloProvider } from './apollo/apollorProvider'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App),
}).$mount('#app')
