<template>
  <div>
    <h1>{{ $t('exportTitle') }}</h1>
    <v-select
      v-model="format"
      :items="availableFormats"
      :label="$t('exportField')"
    ></v-select>
    <v-alert v-if="format !== undefined" type="info">
      {{availableFormats[format].info}}
    </v-alert>
    <v-btn :disabled="format === undefined" @click="createExport()">{{ $t('exportButtonCreate') }}</v-btn>
    <template v-if="exportText">
      <v-textarea v-model="exportText" :label="$t('exportOutputTitle')"></v-textarea>
      <v-btn @click="copyExport()">{{ $t('exportButtonCopy') }}</v-btn>
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
          info: this.$t('exportInfoJSON'),
          value: 0
        },
        {
          text: 'CSV',
          info: this.$t('exportInfoCSV'),
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
            alert('Unknown Export format!')
        }
        this.exportText = text
      }
    },
    copyExport () {
      if (navigator.clipboard) {
        try {
          navigator.clipboard.writeText(this.exportText).then(() => {
            this.snackbarText = this.$t('exportCopyTextSuccess')
            this.snackbar = true
          })
        } catch (err) {
          this.snackbarText = this.$t('exportCopyTextFailed')
          this.snackbar = true
        }
      } else {
        this.snackbarText = this.$t('exportCopyTextNotSupported')
        this.snackbar = true
      }
    }
  }
}
</script>
