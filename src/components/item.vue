<template>
  <v-container>
    <v-layout
      text-center
      column
      wrap
    >
      <h1>{{item.title}}</h1>
      <p>{{item.description}}</p>
      <p>{{item.stock}} pieces</p>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    item: function () {
      return this.$store.state.items[this.id]
    }
  },
  methods: {

  }
}
</script>
