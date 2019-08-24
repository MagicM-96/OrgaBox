<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <template v-if="boxes.length > 0">
        <box v-for="(box, index) in boxes" v-bind:key="box.name" :id="index" :box="box"></box>
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
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Add Box</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field v-model="title" label="Box name*" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn @click="cancel()">Cancel</v-btn>
            <v-btn @click="add()">Add</v-btn>
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
      title: ''
    }
  },
  computed: {
    boxes: function () {
      return this.$store.state.boxes
    }
  },
  methods: {
    add () {
      this.$store.commit('addBox', this.title)
      this.cancel()
    },
    cancel () {
      this.title = ''
      this.dialog = false
    }
  }
}
</script>
