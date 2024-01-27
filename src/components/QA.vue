<template>
  <v-card
    shaped
    class="pa-3 ma-1 ms-1"
    @click="rewind"
    max-width="300"
  >
  <v-card-text class="ma-0 body-2">
    <img src="../assets/Q.svg" width="20" class=".float-left mr-2"/>
    <span style="white-space: pre-wrap;">{{ question }}</span>
  </v-card-text>
  <v-card-text class="ma-0 body-1">
    <img src="../assets/A.svg" width="20" class=".float-left mr-2"/>
    {{ answer }}
  </v-card-text>
  </v-card>
</template>

<script>
export default {
  props:['question','answer','visible', 'index', 'scan'],
  data: () => ({
  }),

  methods: {
    rewind: function() {
      this.$emit('rewind', this.index, this.scan);
    }
  }
}


</script>

