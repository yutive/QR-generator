<template>
  <div id="app">
      <navbar id="nav" v-on:change="navigate" v-on:changeMode="changeMode"/><br>
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
      page: "generate",
      isDarkModeEnabled: false
    }
  },
  methods: {
    navigate(page) {
      this.page = page;
    },
    changeMode(mode) {
      document.body.classList.toggle("darkMode", mode)
    }
  }
}
</script>

<style>

html  {
  overflow: hidden;
}


body {
  overflow: hidden;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  background-color: white;
}

body.darkMode  {
  overflow: hidden;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  background-color: #2e3440;
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
}

.darkMode #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #78808f;
}



</style>
