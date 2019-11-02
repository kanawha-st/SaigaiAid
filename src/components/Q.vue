<template>
  <v-card
    class="mx-auto"
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
      <v-list-item-group v-model="option" class="ml-2" row>
        <v-list-item v-for="(opt,i) in options" v-bind:key="opt" v-bind:value="opt" v-on:click="answered(opt)">
          <v-list-item-content>
            <v-list-item-title class="headline mb-1" v-text="opt"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
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
