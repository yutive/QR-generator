<template>
  <div>
    <h1>QR-read</h1>
    <p>Paste the URL for the QR Code here:</p>
    <input
        class="input"
        type="text"
        v-model="url"
        placeholder="https://"
        @input="onChangeFile()"
    /><br>
    <div>
      <p>{{ message }}</p>
      <h3>{{ result }}</h3>
    </div>
    <div v-if="isLink">
      <a :href="result" target="_blank">Link öffnen</a>
    </div>
  </div>

</template>

<script>
export default {
  name: "Read",
  data() {
    return {
      url: "",
      message: "",
      result: "",
      isLink: false
    }
  },
  methods: {
    onChangeFile() {
      const pattern = new RegExp('^(https|http):\\/\\/');
      let fileURL = encodeURIComponent(this.url);
      const basicURL = "http://api.qrserver.com/v1/read-qr-code/?fileurl=";
      if (!pattern.test(this.url) || this.url === "") {
        if (!pattern.test(this.url) && this.url !== "") {
          this.message = "This is an invalid url !"
          this.result = "";
          return
        }
        if (this.url === ""){
          this.message = "";
          this.result = "";
          return;
        }
      }
      this.message = "scanning URL..."
      fetch(basicURL + fileURL).then(response => {
        return response.json();
      }).then(data => {
          this.result = data[0].symbol[0].data;
          this.message = "";
          console.log(this.result);
          if (pattern.test(this.result)) {
            this.isLink = true;
        }
      })
    }
  }
}
</script>

<style scoped>
img.preview {
  width: 200px;
}

h1 {
  margin:5vh;
}

input {
  width: 40%;
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

#submit{
  border: none;
  cursor: pointer;
  background-color: #04aa6d;
  color: white;
  padding: 7px 10px;
  margin: 4px 0;
  width: auto;
}
#submit:hover {
  opacity: 0.8;
}
</style>