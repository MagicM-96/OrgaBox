<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-btn v-on:click="$router.push(`/box/${id}`)">Box "{{box.name}}"</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['box', 'id'],
  computed: {

  },
  methods: {

  }
}
</script>
