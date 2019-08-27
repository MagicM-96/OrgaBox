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
        <td>
          <v-menu>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(action, i) in actions"
                :key="i"
                @click="action.callback(item)"
              >
                <v-list-item-title>{{ action.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
  <h2 v-else>This box has no items. Go ahead and add some!</h2>
</template>

<script>
export default {
  props: ['items'],
  data () {
    return {
      actions: [
        { title: 'Edit', callback: (payload) => { this.$emit('edit', payload) } },
        { title: 'Move', callback: (payload) => { this.$emit('move', payload) } },
        { title: 'Delete', callback: (payload) => { this.$emit('delete', payload) } }
      ]
    }
  },
  computed: {
    storeItems: function () {
      return this.$store.state.items
    }
  }
}
</script>
