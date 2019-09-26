<template>
  <div>
    <h1>Export your data</h1>
    <v-select
      v-model="format"
      :items="availableFormats"
      label="Export Format"
    ></v-select>
    <v-btn :disabled="format === undefined" @click="createExport()">Create Export</v-btn>
    <template v-if="exportText">
      <v-textarea v-model="exportText" label="Export"></v-textarea>
      <v-btn @click="copyExport()">Copy to Clipboard</v-btn>
    </template>
    <v-snackbar
      v-model="snackbar"
    >
      {{ snackbarText }}
    </v-snackbar>
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
      exportText: '',
      snackbar: false,
      snackbarText: ''
    }
  },
  methods: {
    createExport () {
      if (this.format !== undefined) {
        let text = ''
        switch (this.format) {
          case 0: // JSON
            text += '{"items":'
            text += JSON.stringify(this.$store.state.items)
            text += ',"boxes":'
            text += JSON.stringify(this.$store.state.boxes)
            text += '}'
            break
          default:
            console.error('Unknown Export format!')
        }
        this.exportText = text
      }
    },
    copyExport () {
      if (navigator.clipboard) {
        try {
          navigator.clipboard.writeText(this.exportText).then(() => {
            this.snackbarText = 'Text copied to clipboard'
            this.snackbar = true
          })
        } catch (err) {
          this.snackbarText = 'Error on copy to clipboard!'
          this.snackbar = true
        }
      } else {
        this.snackbarText = 'Clipboard not supported!'
        this.snackbar = true
      }
    }
  }
}
</script>
