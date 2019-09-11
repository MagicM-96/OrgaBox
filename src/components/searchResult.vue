<template>
  <v-card v-on:click="() => {$router.push(`/box/${box.id}`)}">
    <v-card-title>{{box.title}} &ndash; {{item.title}}</v-card-title>
    <v-card-text>
      <b>Title:</b> {{item.title}}<br />
      <b>Description:</b> {{item.description}}<br />
      <b>Ammount:</b> {{item.stock}}<br />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['item', 'box']
}
</script>
