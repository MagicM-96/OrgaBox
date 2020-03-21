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
      <v-btn icon v-on:click="() => $router.replace('/export')">
        <v-icon>mdi-export</v-icon>
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
            @click="() => $router.replace('/about')"
          >
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => $router.replace('/export')"
          >
            <v-list-item-title>Export</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => $router.replace('/import')"
          >
            <v-list-item-title>Import</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => $router.replace('/search')"
          >
            <v-list-item-title>Search</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
