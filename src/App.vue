<template>
  <div id="app">
    <URL_input/>
  </div>
</template>

<script>
import URL_input from './components/URL.vue'

export default {
  name: 'App',
  components: {
    URL_input
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
