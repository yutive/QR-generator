<template>
  <div class="url">
    <h2>QR generator</h2>
    <input
        class="input"
        type="text"
        v-model="url"
        @keydown.enter="createQR()"
        @input="createQR()"
        placeholder="https://"
    />
    <div class="lowerFlex">
      <div class="options">
        <form>
          <input type="color" name="options" id="color" @change="addOptions($event)">
          <label for="color">Farbe</label><br><br>
          <input type="radio" name="options" id="png" @change="addOptions($event)">
          <label for="png">PNG</label><br>
          <input type="radio" name="options" id="jpg" @change="addOptions($event)">
          <label for="jpg">JPG</label><br>
          <input type="radio" name="options" id="svg" @change="addOptions($event)">
          <label for="svg">SVG</label>
        </form>
      </div>
      <div class="qr-code">
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


  </div>
</template>

<script>
  const api_url = "https://api.qrserver.com/v1/create-qr-code/?margin=0&";
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
          localStorage.setItem("url", this.url);
      }
    },
    created() {
      this.url = localStorage.getItem("url");
      this.createQR();
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
  margin: 0;
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
}

.qr-code {
  width: 250px;
  height: 250px;
  background-color: grey;
  margin-left: 20px;
}

.options {
  margin-right: 20px;
}

.lowerFlex {
  display: flex;
  justify-content: center;
  ;
}
</style>
