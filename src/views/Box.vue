<template>
  <v-container v-if="box !== undefined">
    <h1>Box "{{ box.name }}"</h1>
    <v-icon @click="$router.go(-1)" x-large>mdi-arrow-left-circle-outline</v-icon><br /><br />
    <item :items="box.items"></item>
    <br />
    <v-btn v-on:click="dialog = true">Add new item</v-btn>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Add Item</span>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid">
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
            </v-form>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn @click="cancel()">Cancel</v-btn>
            <v-btn :disabled="!valid" @click="add()">Add</v-btn>
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
      dialog: false,
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
    }
  },
  methods: {
    add () {
      if (this.valid) {
        this.$store.commit('addItem', {
          title: this.title,
          ammount: this.ammount,
          description: this.description,
          box: this.$route.params.id
        })
        this.cancel()
      } else {
        this.snackbarText = 'Please add all required data!'
        this.snackbar = true
      }
    },
    cancel () {
      this.title = ''
      this.ammount = 0
      this.description = ''
      this.dialog = false
    }
  }
}
</script>
