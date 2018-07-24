import Vue from 'vue'
import App from './App.vue'
import router from './routing/router'
import './registerServiceWorker'
import { apolloProvider } from './apollo/apolloProvider'
import store from './store/store'
import '@/components/_globals'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App),
}).$mount('#app')
