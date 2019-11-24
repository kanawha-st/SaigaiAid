<template>
  <v-flex xs12 sm12 md6 lg4 xl3 my-1 px-3>
    <v-card
      shaped
      class="green lighten-5"
      min-height="180"
    >
      <v-card-title class="mb-1 .display-2 .font-weight-bold">{{ title }}</v-card-title>
      <v-card-subtitle>
        窓口: <a v-bind:href="url" class="headline mb-1" target="_blank" rel="noopener noreferrer" >{{ servicer }}</a>
        <span v-if="TBD" class="ml-5 red--text text--lighten-1">※{{ TBD }}</span>
      </v-card-subtitle>
      <v-card-text>{{ description }}</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name:"Service",
  props:['title','TBD', 'servicer','url','description'],
  data: () => ({
  })
}

</script>

