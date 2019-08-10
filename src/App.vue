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
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
