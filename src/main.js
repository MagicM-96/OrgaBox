import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import box from './components/box.vue'
import item from './components/item.vue'

Vue.config.productionTip = false

let savedItems = localStorage.getItem('items')
let savedBoxes = localStorage.getItem('boxes')
if (savedBoxes || savedItems) {
  store.commit('loadSave', { items: JSON.parse(savedItems), boxes: JSON.parse(savedBoxes) })
} else {
  localStorage.setItem('items', JSON.stringify(store.state.items))
  localStorage.setItem('boxes', JSON.stringify(store.state.boxes))
}

store.subscribe((mutation, state) => {
  localStorage.setItem('items', JSON.stringify(state.items))
  localStorage.setItem('boxes', JSON.stringify(state.boxes))
})

Vue.component('box', box)
Vue.component('item', item)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
