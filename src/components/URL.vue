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
      <div class="options" v-if="picture">
        <form>
          <input
              type="color"
              v-model="color"
              name="color"
              id="color"
              @change="createQR()"
          >
          <div id="app">
            <select class="form-control" @change="changeFileFormat($event)">
              <option value="" selected disabled>{{ selectedFileFormat }}</option>
              <option v-for="fileFormat in fileFormats" :value="fileFormat.id" :key="fileFormat.id">{{ fileFormat.name }}</option>
            </select>
          </div>
        </form>
      </div>
      <div class="qr-code" v-if="picture">
        <a :href=picture target="_blank">
          <img
              :src=picture
              width="250px"
              alt="QR-code picture"
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
      picture: "",
      color: "",
      fileFormats: [
        {name: "PNG", id: 1},
        {name: "JPG", id: 2},
        {name: "SVG", id: 3},
      ],
      selectedFileFormat: "PNG"
    }
  },
  methods: {
    changeFileFormat(event) {
      this.selectedFileFormat = event.target.options[event.target.options.selectedIndex].text;
      this.createQR();
    },
    createQR() {
      if (this.url === "") {
        this.picture = false;
        return
      }
      this.picture = `${api_url}data=${this.url}&color=${this.color.substring(1)}&format=${this.selectedFileFormat.toLowerCase()}`;
      window.urlState = this.url;
    }
  },
  created() {
    this.url = window.urlState || "";
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
  cursor: pointer;
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
  justify-content: center;;
}
</style>
