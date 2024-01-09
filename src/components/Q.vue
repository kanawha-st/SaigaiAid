<template>
  <v-card
    class="mx-auto"
    elevation="6"
    shaped
  >
    <v-card-title class="headline mb-1">
      <img src="../assets/Q.svg" width="40" class=".float-left mr-2"/>
      {{ question }}
    </v-card-title>
    <v-card-title id="QHead" class="headline pb-0">
      <img src="../assets/A.svg" width="40" class=".float-left mr-2"/>
      選択してください
    </v-card-title>
    <v-card-actions>
      <v-container v-model="option" class="mt-3 ml-2 justify-center d-flex flex-row flex-wrap">
        <v-btn v-for="opt in options" v-bind:key="opt" v-bind:value="opt" v-on:click="answered(opt)" v-text="opt" variant="outlined"></v-btn>
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
      console.log("--------", opt);
      this.$emit('answered', opt);
    },
  }
}

</script>

<style scoped>
  #QHead {
  }
</style>
