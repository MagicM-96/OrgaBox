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
      exportText: ''
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
      // TODO: add a copy to Clipboard method
    }
  }
}
</script>
