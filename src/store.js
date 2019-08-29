import Vue from 'vue'
import Vuex from 'vuex'
const uuid = require('uuid/v4')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boxes: [],
    items: {},
    version: {
      version: '0.3.2', // eslint-disable-next-line
      date: process.env.NODE_ENV === 'production' ? __BUILDDATE__ : '~deveplopment use~'
    },
    changelog: {
      '0.1.1': 'Begin with the app. First implementation of the key functionality. Got a persistens state.',
      '0.1.2': 'Added a correct title and an icon. Also added the "about" page and some changes in the box/items view.',
      '0.2.1': 'The app now looks like something. Highlights: You now can add new boxes and items. Display your Boxes and items.',
      '0.2.2': 'It is now possible to press enter on create Box/Item. Also it is controlled now, whether you entered all required data.',
      '0.2.3': 'Now the app icon is visible in the top bar.',
      '0.3.1': 'It is now possible to edit and remove Items from inside a box.',
      '0.3.2': 'Now the update of the app should also work properly on iOS.'
    }
  },
  mutations: {
    loadSave (state, save) {
      state.items = save.items
      state.boxes = save.boxes
    },
    addItem (state, item) {
      let newItem = {
        title: item.title,
        stock: item.ammount,
        description: item.description
      }
      let newId = uuid()
      state.items[newId] = newItem
      state.boxes[item.box].items.push(newId)
    },
    modifyItem (state, item) {
      state.items[item.id].title = item.title
      state.items[item.id].stock = item.ammount
      state.items[item.id].description = item.description
    },
    moveItem (state, payload) {
      state.boxes[payload.fromBox].items.splice(state.boxes[payload.fromBox].items.indexOf(payload.item), 1)
      state.boxes[payload.toBox].items.push(payload.item)
    },
    removeItem (state, payload) {
      state.boxes[payload.box].items.splice(state.boxes[payload.box].items.indexOf(payload.item), 1)
      delete state.items[payload.item]
    },
    modifyBox (state, box) {
      state.boxes[box.index].name = box.title
    },
    addBox (state, name) {
      state.boxes.push({
        name: name,
        items: []
      })
    }
  },
  actions: {

  }
})
