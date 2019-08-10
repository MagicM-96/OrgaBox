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
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    //
  })
}
</script>
