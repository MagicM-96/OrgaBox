import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boxes: [
      {
        name: 'Box 1',
        items: [
          'item-2-id',
          'last-item-id'
        ]
      },
      {
        name: 'Second Box',
        items: [
          'id-item-1'
        ]
      }
    ],
    items: {
      'id-item-1': {
        title: 'Some item',
        description: 'Description of this item',
        stock: 5
      },
      'item-2-id': {
        title: 'Another item',
        description: 'One more description',
        stock: 1
      },
      'last-item-id': {
        title: 'Item 3',
        description: 'Something',
        stock: 62
      }
    },
    version: {
      version: '0.1.1', // eslint-disable-next-line
      date: process.env.NODE_ENV === 'production' ? __BUILDDATE__ : '~deveplopment use~'
    },
    changelog: {
      '0.1.1': 'Begin with the app. First implementation of the key functionality. Got a persistens state.'
    },
    counter: 0
  },
  mutations: {
    changeSomething (state) {
      state.counter++
    },
    loadSave (state, save) {
      state.items = save.items
      state.boxes = save.boxes
    }
  },
  actions: {

  }
})
