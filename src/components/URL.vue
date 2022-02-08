<template>
  <div class="url">
    <img :src=picture width="250px" alt="QR-code picture" v-if="Boolean(picture)">
    <input
        class="input"
        type="text"
        v-model="url"
        @keydown.enter="createQR()"
        placeholder="URL"
    />
    <button @click="createQR()" :disabled="!url">
      Generate
    </button>
  </div>
</template>

<script>
  const api_url = "https://api.qrserver.com/v1/create-qr-code/?";
  export default {
    name: 'urlToPic',
    data() {
      return {
        url: "",
        picture: ""
      }
    },
    methods: {
      createQR() {
        if (this.url === "") {
          return
        }
        this.picture = api_url + "data=" + this.url;
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
button:disabled {
  cursor: not-allowed;
  opacity: 0.8;
}

button:hover {
  opacity: 0.8;
}
</style>
