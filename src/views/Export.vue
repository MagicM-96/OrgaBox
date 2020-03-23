<template>
  <div>
    <h1>Export your data</h1>
    <v-select
      v-model="format"
      :items="availableFormats"
      label="Export Format"
    ></v-select>
    <v-alert v-if="format !== undefined" type="info">
      {{availableFormats[format].info}}
    </v-alert>
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
          info: 'Ideal to migrate your data to another device or to make a backup.',
          value: 0
        },
        {
          text: 'CSV',
          info: 'Can be copied to a text editor and saved as .csv file to get a table in excel - separated by ";".',
          value: 1
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
          case 1: // CSV
            text += 'Box Name;Item Name;Item Ammount;Item Description\n'
            this.$store.state.boxes.forEach(box => {
              text += `${box.name.replace(/;/igm, ',')}\n`
              box.items.forEach(item => {
                item = this.$store.state.items[item]
                text += ';'
                text += `${item.title.replace(/;/igm, ',')};`
                text += `${item.stock};`
                text += `${item.description.replace(/;/igm, ',')}`
                text += '\n'
              })
            })
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
