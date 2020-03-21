<template>
  <div>
    <h1>Import your data</h1>
    <v-select
      v-model="format"
      :items="availableFormats"
      label="Import Format"
    ></v-select>
    <v-textarea v-model="importText" label="Import"></v-textarea>
    <v-btn :disabled="!importText || format === undefined" @click="importData()">Import</v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      format: undefined,
      availableFormats: [
        {
          text: 'JSON',
          value: 0
        }
      ],
      importText: ''
    }
  },
  methods: {
    importData () {
      if (this.format !== undefined && this.importText) {
        let importData = {}
        let failed = false
        switch (this.format) {
          case 0: // JSON
            try {
              importData = JSON.parse(this.importText)
              // TODO: control if the JSON format is correct
            } catch (e) {
              failed = true
              alert('Something went wrong on import!', e)
              // TODO: Add an error report to the user
              alert('Failed to parse import!')
            }
            break
          default:
            alert('Unknown Export format!')
        }
        if (!failed) {
          this.$store.commit('loadSave', {
            items: importData.items || {},
            boxes: importData.boxes || []
          })
          this.$router.replace('/')
        }
      }
    }
  }
}
</script>
