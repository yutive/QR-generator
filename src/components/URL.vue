<template>
  <div class="url">
    <h1>QR-Code Generator</h1>
    <p>Paste the URL to create a QR-code:</p>
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
          <div class="color">
            <label for="color" class="description">Color:</label>
            <input
                class="column"
                type="color"
                v-model="color"
                name="color"
                id="color"
                @change="createQR()"
            >
            <label for="bgColor" class="description">Backgroundcolor:</label>
            <input
                class="column"
                type="color"
                v-model="bgColor"
                name="bgColor"
                id="bgColor"
                @change="createQR()"
            >
          </div>
          <div >
            <select class="column" @change="changeFileFormat($event)" >
              <option value="" selected disabled>{{ selectedFileFormat }}</option>
              <option v-for="fileFormat in fileFormats" :value="fileFormat.id" :key="fileFormat.id">{{ fileFormat.name }}</option>
            </select>
          </div>
        </form>
      </div>
      <div class="qr-code" v-if="picture">
        <a :href=picture target="_blank">
          <img
              class="column"
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
      bgColor: "#fffffff",
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
      this.picture = `${api_url}data=${this.url}&color=${this.color.substring(1)}&format=${this.selectedFileFormat.toLowerCase()}&bgcolor=${this.bgColor.substring(1)}`;
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
  margin:5vh;
}

#qrCode {
  cursor: pointer;
  margin: 0;
}

input {
  width: 60%;
  padding: 6px 10px;
  margin: 4px 0;
  display: inline-block;
  border: 1px solid #bdbcbc;
  box-sizing: border-box;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

input:hover{
  border-color: #f29559;
}

select:hover{
  border-color: #f29559;
}


.color {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 0;
  grid-template-areas:
    ". ."
    ". .";
}

.color input{
  width: 40px;
  height: 40px;
  padding: 10px;
  margin-left: auto;

}

.description{
  margin:auto;
}

.lowerFlex {
  margin: 30px;
  display: flex;
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

.lowerFlex {
  display: flex;
  justify-content: center;
  margin: 40px;
  padding-top: 30px;
}

img {
  align-items: center;
}

.qr-code {
  width: 250px;
  height: 250px;
  margin-left: 20px;
}

.options {
  margin-right: 20px;
}

@media screen and (max-width: 800px) {
  .lowerFlex {
    flex-direction: column;
    padding-top: 0;
  }
  form{
    margin-bottom: 20px;
  }
  .qr-code{
    justify-content: center;
    width:100%;
    margin-left:0;
  }
}

</style>
