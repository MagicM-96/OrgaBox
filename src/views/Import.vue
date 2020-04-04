<template>
  <div>
    <h1>{{ $t('importTitle') }}</h1>
    <v-select
      v-model="format"
      :items="availableFormats"
      :label="$t('importField')"
    ></v-select>
    <v-alert type="info">
      {{$t('importInfo')}}
    </v-alert>
    <v-textarea v-model="importText" :label="$t('importInputTitle')"></v-textarea>
    <v-btn :disabled="!importText || format === undefined" @click="importData()">{{ $t('importButtonProcess') }}</v-btn>
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
        },
        {
          text: 'CSV',
          value: 1
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
              this.$store.commit('loadSave', {
                items: importData.items || {},
                boxes: importData.boxes || []
              })
            } catch (e) {
              failed = true
              console.error('Something went wrong on import!', e)
              // TODO: Add an error report to the user
              alert('Failed to parse import!')
            }
            break
          case 1: {
            const lines = this.importText.split('\n')
            lines.splice(0, 1)
            while (lines.length >= 1 && lines[0].split(';').length === 1 && lines[0] !== '') {
              this.$store.commit('addBox', lines[0])
              lines.splice(0, 1)
              while (lines.length >= 1 && lines[0].split(';').length > 1) {
                let line = lines.splice(0, 1)[0]
                line = line.split(';')
                this.$store.commit('addItem', {
                  title: line[1],
                  ammount: line[2],
                  description: line[3],
                  box: this.$store.state.boxes.length - 1
                })
              }
            }
            break
          }
          default:
            console.error('Unknown Export format!')
        }
        if (!failed) {
          this.$router.replace('/')
        }
      }
    }
  }
}
</script>
