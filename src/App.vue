<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/" replace>
        <v-img src="@/assets/header_icon.png" max-width="45" height="45"></v-img>
      </router-link>
      &nbsp;
      <v-toolbar-title class="headline">
        <router-link to="/" replace>
          <span>OrgaBox</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-on:click="() => settings()">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
      <v-btn icon v-on:click="() => $router.replace('/search')">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click="() => $router.replace('/search')"
          >
            <v-icon>mdi-magnify</v-icon> <v-list-item-title> {{ $t('navSearch') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => $router.replace('/export')"
          >
            <v-icon>mdi-export</v-icon> <v-list-item-title> {{ $t('navExport') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => $router.replace('/import')"
          >
            <v-icon>mdi-import</v-icon> <v-list-item-title> {{ $t('navImport') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => settings()"
          >
            <v-icon>mdi-cog</v-icon> <v-list-item-title> {{ $t('navSettings') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => $router.replace('/about')"
          >
            <v-icon>mdi-information-outline</v-icon> <v-list-item-title> {{ $t('navAbout') }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
        <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ $t('dialogSettingsTitle') }}</span>
          </v-card-title>
          <v-card-text>
            <v-select
                v-model="selectedLang"
                :items="settingValues.language.available"
                :label="$t('dialogSettingsLanguage')"
                append-outer-icon="mdi-restore"
                @click:append-outer="reset()"
              ></v-select>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn @click="cancel()">{{ $t('dialogButtonCancel') }}</v-btn>
            <v-btn @click="save()">{{ $t('dialogButtonSave') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
      </v-container>
    </v-content>
    <v-footer
      padless
    >
      <v-card
        tile
        width="100%"
        class="lighten-1 text-center"
      >
        <v-card-text>
          Version <router-link to="/about" replace>{{version.version}}</router-link> ({{version.date}})
          <br /> &copy; 2019-2020 — <strong>E.M.Baudert</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import store from './store'

export default {
  name: 'App',
  data () {
    return {
      version: store.state.version,
      dialog: false,
      settingValues: {
        language: store.state.language
      },
      selectedLang: store.state.language.active
    }
  },
  methods: {
    settings () {
      this.dialog = true
    },
    cancel () {
      this.dialog = false
      this.selectedLang = this.$store.state.language.active
    },
    reset () {
      this.dialog = false
      this.$store.commit('modifyLanguage', undefined)
      this.selectedLang = this.$store.state.language.active
      this.$i18n.locale = (navigator.language || navigator.userLanguage).substring(0, 2)
    },
    save () {
      this.dialog = false
      this.$store.commit('modifyLanguage', this.selectedLang)
      this.$i18n.locale = this.selectedLang
    }
  }
}
</script>

<style scoped>
a {
  color: black !important;
}
</style>
