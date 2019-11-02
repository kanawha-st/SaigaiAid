<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>シビックテック袖ヶ浦</span>
        <span class="font-weight-light">災害支援ナビゲーター</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Main/>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Main from './components/Main';

export default {
  name: 'App',
  components: {
    Main,
  },
  data: () => ({
    //
  }),
};
</script>
