<template>
  <v-container>
    <item v-for="item in box.items" v-bind:key="item" :id="item"></item>
  </v-container>
</template>

<script>

export default {
  computed: {
    box: function () {
      return this.$store.state.box[this.$route.params.id]
    }
  },
  mounted () {
    console.log(this.$route.params.id)
  }
}
</script>
