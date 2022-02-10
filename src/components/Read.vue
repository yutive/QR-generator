<template>
  <div>
    <h2>QR-read</h2>
      <p>Choose QR code image to read/scan:</p>
      <input
          type="file"
          v-on:change="previewFiles(this.files)"
          name="file"
      />
      <button id="submit" @click="onChangeFile()">Read QR code</button>
  </div>

</template>

<script>
export default {
  name: "Read",
  methods: {
    previewFiles(files) {
      console.log(files);
    },
   onChangeFile() {
     let fileURL = encodeURIComponent('https://api.qrserver.com/v1/create-qr-code/?margin=0&data=google.com&color=')
     const basicURL = "http://api.qrserver.com/v1/read-qr-code/?fileurl=";
     fetch(basicURL + fileURL).then(response =>{
       return response.json();
     }).then(data =>{
       console.log(data);
       let result = data[0].symbol[0].data;
       console.log(result);
       console.log(basicURL + fileURL)
     })
   }
  }
}
</script>

<style scoped>
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
</style>