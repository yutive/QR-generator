<template>
  <div id="app">
    <navbar id="nav" v-on:change="navigate"/>
    <h1>QR generator</h1>
    <urlToPic v-if="this.page==='generate'"/>
  </div>
</template>

<script>
import urlToPic from './components/URL.vue'
import navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    urlToPic: urlToPic,
    navbar
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

#nav {
  justify-content: center;
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
