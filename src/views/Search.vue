<template>
  <div>
    <h1>Search for items</h1>
    <searchResult v-for="result in results" v-bind:key="result.id" :number="result.id"></searchResult>
  </div>
</template>

<script>
export default {
  computed: {
    results () {
      let results = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
      ]
      return results
    }
  }
}
</script>
