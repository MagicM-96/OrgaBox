<template>
  <div>
    <h1>Search for items</h1>
    <v-text-field v-model="text" label="Search text"></v-text-field>
    <searchResult v-for="result in results" v-bind:key="result.id" :item="result" :box="result.box"></searchResult>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      items: this.$store.state.items,
      boxes: this.$store.state.boxes
    }
  },
  computed: {
    results () {
      let results = []
      for (let item in this.items) {
        if (this.items[item].title.search(new RegExp(this.text, 'i')) > -1) {
          results.unshift(this.items[item])
          results[0].id = item
          results[0].box = this.findBox(item)
        }
      }
      return results
    }
  },
  methods: {
    findBox (item) {
      for (let i = 0; i < this.boxes.length; i++) {
        if (this.boxes[i].items.indexOf(item) !== -1) {
          return { title: this.boxes[i].name, id: i }
        }
      }
    }
  }
}
</script>
