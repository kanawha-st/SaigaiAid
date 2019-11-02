<template>
  <v-flex xs=12 sm6 md4 lg3 xl3 my-1 px-1>
    <v-card
      shaped
      class="pa-3"
      @click="rewind"
    >
    <v-card-text class="ma-0 body-2">
      <img src="../assets/Q.svg" width="20" class=".float-left mr-2"/>
      {{ question }}
    </v-card-text>
    <v-card-text class="ma-0 body-1">
      <img src="../assets/A.svg" width="20" class=".float-left mr-2"/>
      {{ answer }}
    </v-card-text>
    </v-card>
  </v-flex>
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

