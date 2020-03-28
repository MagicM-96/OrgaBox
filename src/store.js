import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuid } from 'uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boxes: [],
    items: {},
    language: {
      available: [
        {
          text: 'English',
          value: 'en'
        },
        {
          text: 'Deutsch',
          value: 'de'
        }
      ]
    },
    version: {
      version: '0.8.5', // eslint-disable-next-line
      date: process.env.NODE_ENV === 'production' ? __BUILDDATE__ : '~deveplopment use~'
    },
    changelog: {
      '0.1.1': 'Begin with the app. First implementation of the key functionality. Got a persistens state.',
      '0.1.2': 'Added a correct title and an icon. Also added the "about" page and some changes in the box/items view.',
      '0.2.1': 'The app now looks like something. Highlights: You now can add new boxes and items. Display your Boxes and items.',
      '0.2.2': 'It is now possible to press enter on create Box/Item. Also it is controlled now, whether you entered all required data.',
      '0.2.3': 'Now the app icon is visible in the top bar.',
      '0.3.1': 'It is now possible to edit and remove Items from inside a box.',
      '0.3.2': 'Now the update of the app should also work properly on iOS.',
      '0.4.1': 'You are now able to move items from one box to another.',
      '0.5.1': 'You now can rename and remove boxes.',
      '0.5.2': 'The validation of forms works now correct when you close the dialog and reopen it.',
      '0.6.1': 'It is now possible to search for items by title. The search and options icon were added to the title bar of the app.',
      '0.6.2': 'Items also can be searched by their description.',
      '0.6.3': 'The Search results have been prettyfied.',
      '0.6.4': 'Now a text is displayed when there are no search results.',
      '0.6.5': 'Bugfix: Cancel button didn\'t work properly on the "delete box" and "delete item" dialog.',
      '0.7.1': 'QR Codes are now added to the app. You can create a QR Code for every box and save it with a screenshot.',
      '0.7.2': 'The dialogs on the home screen didn\'t work properly when they are closed by tapping beside them. As a result it now isn\'t possible anymore to close dialogs by tapping beside them but by tapping "cancel".',
      '0.7.3': 'Changed the icon for creating the QR code of a box in the heading. Bugfix: Changed closing animation of dialogs so you now don\'t see the dialog changing. The QR Code is now displayed in a pop-up so it can be screenshotted better.',
      '0.8.1': 'Added Export/Import. Added the export icon in the top bar. Added Import, Export and search as menu options. Export/Import as JSON is possible. It is possible to copy the export to the clipboard.',
      '0.8.2': 'Sometimes the icons weren\'t accessible offline. This should be fixed now!',
      '0.8.3': 'New Export Format: CSV now available! Optimized the Backend.',
      '0.8.4': 'App is now available in multiple languages. The app picks the browser language - english as fallback. Supported languages: English and German',
      '0.8.5': 'Added language settings. Re-worked Navigation Menu'
    }
  },
  mutations: {
    loadSave (state, save) {
      state.items = save.items
      state.boxes = save.boxes
      if (save.lang !== 'undefined') {
        state.language.active = save.lang
      }
    },
    addItem (state, item) {
      const newItem = {
        title: item.title,
        stock: item.ammount,
        description: item.description
      }
      const newId = uuid()
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
    modifyLanguage (state, change) {
      if (!change) {
        if (state.language.active) {
          delete state.language.active
        }
      } else {
        state.language.active = change
      }
    },
    addBox (state, name) {
      state.boxes.push({
        name: name,
        items: []
      })
    },
    removeBox (state, box) {
      state.boxes.splice(box, 1)
    }
  },
  actions: {

  }
})
