<template>
  <v-container v-if="box !== undefined">
    <h1>{{ box.name }} <v-icon @click="createQR()" x-large color="rgba(0,0,0,1)" right>mdi-qrcode-plus</v-icon></h1>
    <v-icon @click="$router.go(-1)" x-large>mdi-arrow-left-circle-outline</v-icon><br /><br />
    <item :items="box.items" v-on:edit="edit($event)" v-on:move="move($event)" v-on:delete="remove($event)"></item>
    <br />
    <v-btn v-on:click="dialog = true">{{ $t('boxButtonAdd') }}</v-btn>&nbsp;<v-btn v-on:click="createQR()">{{ $t('boxButtonCreateQR') }}</v-btn>
    <br />
    <br />
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline" v-if="mode !== 'qrcode'">{{dialogTitle}}</span>
            <span v-else>{{box.name}}</span>
          </v-card-title>
          <v-card-text>
            <v-container v-if="mode === 'delete'">
              <h2>{{ $t('dialogDeleteItemInfo').replace('{title}', items[activeItem].title) }}</h2>
            </v-container>
            <v-container v-else-if="mode === 'qrcode'">
              <div id="container"></div>
              <br />
              <h2>{{ $t('dialogCreateQR') }}</h2>
            </v-container>
            <v-container v-else-if="mode === 'move'">
              <v-select
                v-model="toBox"
                :items="moveBoxes"
                :label="$t('dialogMoveItemField')"
                solo
              ></v-select>
            </v-container>
            <v-form ref="form" v-model="valid" v-else>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="8" md="8">
                    <v-text-field :rules="notEmptyRule" v-model="title" :label="$t('dialogAddItemName')" required v-on:keyup.enter="add()"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-text-field :rules="numberRules" v-model="ammount" :label="$t('dialogAddItemAmmount')" required v-on:keyup.enter="add()"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea v-model="description" :label="$t('dialogAddItemDescription')"></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
              <small>{{ $t('dialogRequiredInfo') }}</small>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn @click="cancel()">{{ $t('dialogButtonCancel') }}</v-btn>
            <span v-if="mode === 'qrcode'"></span>
            <v-btn v-else-if="mode === 'delete'" @click="acceptRemove()">{{ $t('dialogButtonDelete') }}</v-btn>
            <v-btn v-else-if="mode === 'move'" :disabled="toBox === undefined" @click="performMove()">{{ $t('dialogButtonMove') }}</v-btn>
            <v-btn v-else :disabled="!valid" @click="add()">{{mode === 'default' ? $t('dialogButtonAdd') : $t('dialogButtonSave') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-snackbar
      v-model="snackbar"
    >
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
  <v-container v-else>
    <h1>Box 404</h1>
    <v-icon @click="$router.go(-1)" x-large>mdi-arrow-left-circle-outline</v-icon>
  </v-container>
</template>

<script>
import { setTimeout } from 'timers'
var QRCode = require('qrcode')

export default {
  data () {
    return {
      activeItem: '',
      dialog: false,
      mode: 'default',
      title: '',
      ammount: '',
      toBox: undefined,
      description: '',
      snackbar: false,
      snackbarText: '',
      valid: true,
      notEmptyRule: [(v) => !!v || this.$t('dialogRequiredInput')],
      numberRules: [
        (v) => !!v || this.$t('dialogRequiredInput'),
        (v) => new RegExp(/^[1-9][0-9]*$/igm).test(v) || this.$t('dialogRequiredNumber')
      ]
    }
  },
  computed: {
    box: function () {
      return this.$store.state.boxes[this.$route.params.id]
    },
    items: function () {
      return this.$store.state.items
    },
    dialogTitle: function () {
      switch (this.mode) {
        case 'edit':
          return this.$t('dialogEditItemTitle')
        case 'delete':
          return this.$t('dialogDeleteItemTitle')
        case 'move':
          return this.$t('dialogMoveItemTitle')
        case 'default':
        default:
          return this.$t('dialogAddItemTitle')
      }
    },
    moveBoxes: function () {
      const elements = []
      this.$store.state.boxes.forEach((element, index) => {
        if (index !== Number(this.$route.params.id)) {
          elements.push({
            text: element.name,
            value: index
          })
        }
      })
      return elements
    }
  },
  methods: {
    add () {
      if (this.valid) {
        if (this.mode === 'default') {
          this.$store.commit('addItem', {
            title: this.title,
            ammount: this.ammount,
            description: this.description,
            box: this.$route.params.id
          })
        } else {
          this.$store.commit('modifyItem', {
            title: this.title,
            ammount: this.ammount,
            description: this.description,
            id: this.activeItem
          })
        }
        this.cancel()
      } else {
        this.snackbarText = this.$t('snackbarMissingData')
        this.snackbar = true
      }
    },
    acceptRemove () {
      this.$store.commit('removeItem', {
        box: this.$route.params.id,
        item: this.activeItem
      })
      this.cancel()
    },
    createQR () {
      this.mode = 'qrcode'
      this.dialog = true
      setTimeout(() => {
        QRCode.toCanvas(this.createBoxText(), { errorCorrectionLevel: 'L' }, function (err, canvas) {
          if (err) throw err
          var container = document.getElementById('container') // eslint-disable-next-line
          container.childElementCount > 0 ? container.removeChild(container.lastElementChild) : null
          container.appendChild(canvas)
        })
      }, 1)
    },
    createBoxText () {
      let text = 'Items:\n'
      this.box.items.forEach((item) => {
        text += `${this.items[item].title}: ${this.items[item].stock} time(s)\n`
      })
      if (text.length > 2953) {
        alert('The text is to large and is therefore shortened!')
        text = text.substring(0, 2953)
      }
      return text
    },
    edit (item) {
      this.activeItem = item
      this.mode = 'edit'
      this.title = this.items[item].title
      this.ammount = this.items[item].stock
      this.description = this.items[item].description
      this.dialog = true
    },
    move (item) {
      this.activeItem = item
      this.mode = 'move'
      this.dialog = true
    },
    performMove () {
      this.$store.commit('moveItem', {
        fromBox: this.$route.params.id,
        toBox: this.toBox,
        item: this.activeItem
      })
      this.toBox = undefined
      this.cancel()
    },
    remove (item) {
      this.activeItem = item
      this.mode = 'delete'
      this.dialog = true
    },
    cancel () {
      this.dialog = false
      setTimeout(() => { // eslint-disable-next-line
        this.mode !== 'delete' && this.mode !== 'qrcode' && this.mode !== 'move' ? this.$refs.form.reset() : this.mode === 'move' ? this.toBox = undefined : null
        this.mode = 'default'
        this.activeItem = ''
      }, 200)
    }
  }
}
</script>
