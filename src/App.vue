<template>
  <div id="app">
    <h1>QR generator</h1>
    <urlToPic/>
  </div>
</template>

<script>
import urlToPic from './components/URL.vue'

export default {
  name: 'App',
  components: {
    urlToPic: urlToPic
  }
}
</script>

<style>

h1 {
  color: #111;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 70px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
