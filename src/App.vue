<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <router-link to="/" replace>
          <span>OrgaBox</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="mr-2 font-weight-light">Organize your boxes!</span>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
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
          Version <router-link to="/about" replace>{{version.version}}</router-link> ({{version.date}}) &copy; 2019 — <strong>E.M.Baudert</strong>
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

<style scoped>
a {
  color: black !important;
}
</style>
