<template>
  <div class="about">
    <h1>About OrgaBox</h1>
    <h2>Version {{version}}</h2>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Version number</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="change in changelog" :key="change.number">
          <td>{{ change.number }}</td>
          <td>{{ change.description }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  computed: {
    version: function () {
      return this.$store.state.version.version
    },
    changelog: function () {
      const changes = []
      for (const key in this.$store.state.changelog) {
        changes.unshift({ number: key, description: this.$store.state.changelog[key] })
      }
      return changes
    }
  },
  methods: {

  }
}
</script>
