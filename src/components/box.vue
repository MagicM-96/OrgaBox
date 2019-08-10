<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-btn>
        <router-link :to="`/box/${id}`">Box "{{box.name}}"</router-link>
      </v-btn>
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
