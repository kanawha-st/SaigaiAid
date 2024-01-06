<template>
  <v-card
    shaped
    class="green lighten-5 mt-1"
    max-width="360"
  >
    <v-card-title class="mb-1 .display-2 .font-weight-bold">{{ title }}</v-card-title>
    <v-card-subtitle>
      窓口: <a v-if="url" v-bind:href="url" class="headline mb-1" target="_blank" rel="noopener noreferrer" >{{ servicer || url }}</a>
      <span v-else class="headline mb-1">{{ servicer || url }}</span>
      <span v-if="TBD" class="ml-5 red--text text--lighten-1">※{{ TBD }}</span>
    </v-card-subtitle>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name:"Service",
  props:['title','TBD', 'servicer','url','description'],
  data: () => ({
  })
}

</script>

