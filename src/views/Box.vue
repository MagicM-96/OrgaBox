<template>
  <v-container v-if="box !== undefined">
    <h1>Box "{{ box.name }}"</h1>
    <v-icon @click="$router.go(-1)" x-large>mdi-arrow-left-circle-outline</v-icon><br /><br />
    <item :items="box.items" v-on:edit="edit($event)" v-on:move="move($event)" v-on:delete="remove($event)"></item>
    <br />
    <v-btn v-on:click="dialog = true">Add new item</v-btn>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{dialogTitle}} Item</span>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid" v-if="mode === 'default' || mode === 'edit'">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="8" md="8">
                    <v-text-field :rules="notEmptyRule" v-model="title" label="Item name*" required v-on:keyup.enter="add()"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-text-field :rules="numberRules" v-model="ammount" label="Ammount*" required v-on:keyup.enter="add()"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea v-model="description" label="Description"></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-form>
            <v-container v-else-if="mode === 'delete'">
              <h2>Are you sure you want to delete "{{items[activeItem].title}}"?</h2>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn @click="cancel()">Cancel</v-btn>
            <v-btn v-if="mode === 'default' || mode === 'edit'" :disabled="!valid" @click="add()">{{mode === 'default' ? 'Add' : 'Save'}}</v-btn>
            <v-btn v-else-if="mode === 'delete'" @click="acceptRemove()">Delete</v-btn>
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

export default {
  data () {
    return {
      activeItem: '',
      dialog: false,
      mode: 'default',
      title: '',
      ammount: '',
      description: '',
      snackbar: false,
      snackbarText: '',
      valid: true,
      notEmptyRule: [(v) => !!v || 'Input is required'],
      numberRules: [
        (v) => !!v || 'Input is required',
        (v) => new RegExp(/^[1-9][0-9]*$/igm).test(v) || 'Input must be a number'
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
          return 'Edit'
        case 'delete':
          return 'Delete'
        case 'move':
          return 'Move'
        case 'default':
        default:
          return 'Add'
      }
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
        this.snackbarText = 'Please add all required data!'
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
      console.log('moving', item)
    },
    remove (item) {
      this.activeItem = item
      this.mode = 'delete'
      this.dialog = true
      console.log('deleting', item)
    },
    cancel () {
      this.dialog = false
      this.title = ''
      this.ammount = ''
      this.description = ''
      this.mode = 'default'
      this.activeItem = ''
    }
  }
}
</script>
