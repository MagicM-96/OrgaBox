<template>
  <div>
    <router-link :to="`/box/${box.id}`">Box "{{box.title}}"</router-link>: {{item.title}} ({{item.description}}): {{item.stock}} time(s)
  </div>
</template>

<script>
export default {
  props: ['item', 'box']
}
</script>
