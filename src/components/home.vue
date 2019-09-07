<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <template v-if="boxes.length > 0">
        <box v-for="(box, index) in boxes" v-bind:key="box.name" :id="index" :box="box" v-on:edit="edit($event)" v-on:delete="remove($event)"></box>
      </template>
      <h2 v-else>You don't have any boxes! Get started and create one!</h2>
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
      <v-dialog v-model="dialog" max-width="600px">
        <template>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{mode === 'edit' ? 'Edit' : mode === 'delete' ? 'Delete' : 'Add'}} Box</span>
          </v-card-title>
          <v-card-text>
            <v-container v-if="mode === 'delete'">
              Are you sure you want to remove the box "{{boxes[activeBox].name}}" <b>and all items inside it</b>?
            </v-container>
            <v-form ref="form" v-else v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field :rules="[(v) => !!v || 'Input is required']" v-on:keyup.enter="add()" v-model="title" label="Box name*" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn @click="cancel()">Cancel</v-btn>
            <v-btn v-if="mode === 'delete'" @click="confirmRemove()">Delete</v-btn>
            <v-btn v-else :disabled="!valid" @click="add()">{{mode === 'edit' ? 'Edit' : 'Add'}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
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
      this.$refs.form.reset()
      this.dialog = false
      this.mode = 'default'
      this.activeBox = undefined
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
      let items = []
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
