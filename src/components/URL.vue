<template>
  <div class="url_input">
    <input
        class="input"
        type="text"
        v-model="url"
        @keydown.enter="createQR()"
        placeholder="URL"
    />
    <button @click="createQR()">Generate</button>
  </div>
</template>

<script>
  export default {
    name: 'URL_input',
    data() {
      return {
        url: ""
      }
    },
    methods: {
      createQR() {
        if (this.url === "") {
          return
        }
        console.log(this.url)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 45%;
  padding: 6px 10px;
  margin: 4px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  border: none;
  cursor: pointer;
  background-color: #04aa6d;
  color: white;
  padding: 7px 10px;
  margin: 4px 0;
  width: 70px;
}

</style>
