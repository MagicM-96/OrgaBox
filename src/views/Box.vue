<template>
  <v-container>
    <h1>Box "{{ box.name }}"</h1>
    <v-icon @click="$router.go(-1)" x-large>mdi-arrow-left-circle-outline</v-icon><br />
    <item :items="box.items"></item>
  </v-container>
</template>

<script>

export default {
  computed: {
    box: function () {
      return this.$store.state.boxes[this.$route.params.id]
    }
  },
  mounted () {
    console.log(this.$route.params.id)
  }
}
</script>
