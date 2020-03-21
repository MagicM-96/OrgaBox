<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-row>
        <v-btn v-on:click="$router.push(`/box/${id}`)">{{box.name}}</v-btn>
        <v-icon v-on:click="$emit('edit', id)" style="margin: 0px 10px;">mdi-pencil-outline</v-icon>
        <v-icon v-on:click="$emit('delete', id)">mdi-trash-can-outline</v-icon>
      </v-row>
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
