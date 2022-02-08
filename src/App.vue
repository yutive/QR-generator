<template>
  <div id="app">
    <navbar id="nav" v-on:change="navigate"/>
    <urlToPic v-if="this.page==='generate'"/>
    <read v-if="this.page==='read'"/>
    <about v-if="this.page==='about'"/>
  </div>
</template>

<script>
import urlToPic from './components/URL.vue'
import navbar from './components/Navbar.vue'
import read from './components/Read.vue'
import about from './components/About.vue'


export default {
  name: 'App',
  components: {
    urlToPic: urlToPic,
    navbar,
    read,
    about
  },
  data() {
    return {
      page: "generate"
    }
  },
  methods: {
    navigate(page) {
      this.page = page;
    }
  }
}
</script>

<style>

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
