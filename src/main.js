import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import box from './components/box.vue'
import item from './components/item.vue'
import searchResult from './components/searchResult.vue'
import VueI18n from 'vue-i18n'
import lang from '@/assets/locales.json'

Vue.use(VueI18n)

const browserlang = (navigator.language || navigator.userLanguage).substring(0, 2)

const i18n = new VueI18n({
  locale: browserlang,
  fallbackLocale: 'en',
  messages: lang
})

Vue.config.productionTip = false

const savedItems = localStorage.getItem('items')
const savedBoxes = localStorage.getItem('boxes')
const savedLang = localStorage.getItem('lang')
if (savedBoxes || savedItems || (savedBoxes && savedLang !== 'undefined')) {
  store.commit('loadSave', { items: JSON.parse(savedItems), boxes: JSON.parse(savedBoxes), lang: savedLang })
} else {
  localStorage.setItem('items', JSON.stringify(store.state.items))
  localStorage.setItem('boxes', JSON.stringify(store.state.boxes))
}

store.subscribe((mutation, state) => {
  localStorage.setItem('items', JSON.stringify(state.items))
  localStorage.setItem('boxes', JSON.stringify(state.boxes))
  localStorage.setItem('lang', state.language.active)
})

if (savedLang && savedLang !== 'undefined') {
  i18n.locale = savedLang
}

Vue.component('box', box)
Vue.component('item', item)
Vue.component('searchResult', searchResult)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
