<template>
  <div>
    <h1>{{ $t('searchTitle') }}</h1>
    <v-text-field v-model="text" :label="$t('searchField')"></v-text-field>
    <template v-if="results.length > 0">
      <searchResult v-for="result in results" v-bind:key="result.id" :item="result" :box="result.box"></searchResult>
    </template>
    <h2 v-else>{{ $t('searchNoResults') }}</h2>
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
      const results = []
      for (const item in this.items) {
        if (this.items[item].title.search(new RegExp(this.text, 'i')) > -1 || this.items[item].description.search(new RegExp(this.text, 'i')) > -1) {
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
