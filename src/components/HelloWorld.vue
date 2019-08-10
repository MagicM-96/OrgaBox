<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <box v-for="(box, index) in boxes" v-bind:key="box.name" :id="index" :box="box"></box>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    boxes: function () {
      return this.$store.state.boxes
    }
  },
  methods: {
    doSomething: function () {
      this.$store.commit('changeSomething')
    }
  }
}
</script>
