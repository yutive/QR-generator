<template>
  <div>
    <h1>QR-read</h1>
      <p>Choose QR code image to read/scan:</p>
    <button @click="onPickFile">Upload File</button>
    <input
        type="file"
        name="file"
        ref="fileInput"
        style="display: none"
        accept="image/*"
        @change="onFilePicked"
    />
    <br>
    <button id="submit" @click="onChangeFile()">Read QR code</button>
    <img :src="imageURL" alt="">
  </div>

</template>

<script>
export default {
  name: "Read",
  data() {
    return {
      imageURL: "",
      image: null
    }
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!');
      }
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageURL = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    onChangeFile() {
      let fileURL = encodeURIComponent('https://api.qrserver.com/v1/create-qr-code/?margin=0&data=google.com&color=');
      const basicURL = "http://api.qrserver.com/v1/read-qr-code/?fileurl=";
      fetch(basicURL + fileURL).then(response => {
        return response.json();
      }).then(data => {
        let result = data[0].symbol[0].data;
        console.log(result);
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
  margin-top:71.44px;
}

input {
  color: #2c3e50;
  width: auto;
  padding: 4px 10px;
  margin: 4px 0;
  display: inline-block;
  box-sizing: border-box;
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

@media (max-width: 800px) {
  h1{
    margin: 3vh;
  }
}
</style>