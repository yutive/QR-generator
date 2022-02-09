<template>
  <div class="url">
    <h2>QR generator</h2>
    <input
        class="input"
        type="text"
        v-model="url"
        @input="createQR()"
        placeholder="https://"
    />
    <div>
      <a :href=picture target="_blank">
        <img
            :src=picture
             width="250px"
             alt="QR-code picture"
             v-if="Boolean(picture)"
             id="qrCode"
             title="Open in new tab"
        >
      </a>
    </div>

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
            this.picture = false;
            return
          }
          this.picture = api_url + "data=" + this.url;

          }
      }
  };


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  color: #111;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 70px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
}

#qrCode {
  cursor:pointer;
}

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

img {
  align-items: center;
  margin: 20px;
}
</style>
