<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span>OrgaBox</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="mr-2 font-weight-light">Organize your boxes!</span>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
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
          Version {{version.version}} ({{version.date}}) &copy; 2019 — <strong>E.M.Baudert</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import store from './store'

export default {
  name: 'App',
  data: () => ({
    version: store.state.version
  })
}
</script>
