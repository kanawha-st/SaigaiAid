<template>
  <v-card
    class="mx-auto"
    elevation="6"
    shaped
  >
    <v-card-text class="headline mb-1 d-flex flex-row justify-center align-end" >
      <img src="../assets/Q.svg" width="40" class="mr-2"/>
      <div class="Q" style="white-space:pre-wrap">{{  question }}</div>
    </v-card-text>
    <v-card-actions>
      <v-container v-model="option" class="mt-3 ml-2 justify-center d-flex flex-row flex-wrap">
        <v-btn v-for="opt in options" v-bind:key="opt" v-bind:value="opt" v-on:click="answered(opt)" variant="outlined">{{opt}}</v-btn>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:['question','options'],

  data: () => ({
    option: null,
  }),

  methods: {
    answered: function(opt) {
      this.$emit('answered', opt);
    },
  },
}

</script>

<style scoped>
  .Q {
    font-size: 1.5em;
  }
</style>
