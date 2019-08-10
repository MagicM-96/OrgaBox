import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import box from './components/box.vue'
import item from './components/item.vue'

Vue.config.productionTip = false

let newState = localStorage.getItem('state')
if (newState) {
  store.replaceState(JSON.parse(newState))
} else {
  localStorage.setItem('state', JSON.stringify(store.state))
}

store.subscribe((mutation, state) => {
  localStorage.setItem('state', JSON.stringify(state))
})

Vue.component('box', box)
Vue.component('item', item)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
