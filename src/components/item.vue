<template>
  <v-simple-table v-if="items.length > 0">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Description</th>
        <th class="text-left">Stock</th>
        <th class="text-left" style="width: 50px;">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item">
        <td>{{ storeItems[item].title }}</td>
        <td>{{ storeItems[item].description }}</td>
        <td>{{ storeItems[item].stock }}</td>
        <td><v-icon>mdi-menu</v-icon></td>
      </tr>
    </tbody>
  </v-simple-table>
  <h2 v-else>This box has no items. Go ahead and add some!</h2>
</template>

<script>
export default {
  props: ['items'],
  computed: {
    storeItems: function () {
      return this.$store.state.items
    }
  },
  methods: {

  }
}
</script>
