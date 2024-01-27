<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Code For Japan</span>
        <span class="font-weight-light">災害支援ナビゲーター</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-container>
      <Main/>
    </v-container>
    <a href="privacypolicy.html">免責事項・プライバシーポリシー</a>
  </v-app>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
