<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <template v-if="boxes.length > 0">
        <box v-for="(box, index) in boxes" v-bind:key="box.name" :id="index" :box="box" v-on:edit="edit($event)" v-on:delete="remove($event)"></box>
      </template>
      <h2 v-else>{{ $t('homeNoBoxes') }}</h2>
    </v-layout>
    <br />
    <v-btn
      absolute
      fab
      v-on:click="dialog = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{mode === 'edit' ? $t('dialogEditBoxTitle') : mode === 'delete' ? $t('dialogDeleteBoxTitle') : $t('dialogAddBoxTitle')}}</span>
          </v-card-title>
          <v-card-text>
            <v-container v-if="mode === 'delete'">
              {{ $t('dialogDeleteBoxInfoBegin').replace('{name}', boxes[activeBox].name) }} <b>{{ $t('dialogDeleteBoxInfoBold') }}</b> {{ $t('dialogDeleteBoxInfoEnd') }}
            </v-container>
            <v-form ref="form" v-else v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field :rules="[(v) => !!v || $t('dialogRequiredInput')]" v-on:keyup.enter="add()" v-model="title" :label="$t('dialogAddBoxField')" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>{{ $t('dialogRequiredInfo') }}</small>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn @click="cancel()">{{ $t('dialogButtonCancel') }}</v-btn>
            <v-btn v-if="mode === 'delete'" @click="confirmRemove()">{{ $t('dialogButtonDelete') }}</v-btn>
            <v-btn v-else :disabled="!valid" @click="add()">{{mode === 'edit' ? $t('dialogButtonEdit') : $t('dialogButtonAdd')}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      dialog: false,
      title: '',
      valid: false,
      mode: 'default',
      activeBox: undefined
    }
  },
  computed: {
    boxes: function () {
      return this.$store.state.boxes
    }
  },
  methods: {
    add () {
      if (this.valid) {
        if (this.mode === 'edit') {
          this.$store.commit('modifyBox', {
            index: this.activeBox,
            title: this.title
          })
        } else {
          this.$store.commit('addBox', this.title)
        }
        this.cancel()
      }
    },
    cancel () {
      this.dialog = false
      setTimeout(() => { // eslint-disable-next-line
        this.mode !== 'delete' ? this.$refs.form.reset() : null
        this.mode = 'default'
        this.title = ''
        this.activeBox = undefined
      }, 200)
    },
    edit (box) {
      this.mode = 'edit'
      this.title = this.boxes[box].name
      this.activeBox = box
      this.dialog = true
    },
    remove (box) {
      this.mode = 'delete'
      this.title = this.boxes[box].name
      this.activeBox = box
      this.dialog = true
    },
    confirmRemove () {
      const items = []
      this.boxes[this.activeBox].items.forEach((item) => {
        items.push(item)
      })
      items.forEach((item) => {
        this.$store.commit('removeItem', {
          box: this.activeBox,
          item: item
        })
      })
      this.$store.commit('removeBox', this.activeBox)
      this.cancel()
    }
  }
}
</script>
