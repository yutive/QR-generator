<template>
  <div>
    <h2>QR-read</h2>
      <p>Choose QR code image to read/scan:</p>
      <input
          type="file"
          @change="onChangeFile($event)"
          name="file"
      />
      <button id="submit">Read QR code</button>
  </div>

</template>

<script>
export default {
  name: "Read",
  methods: {
   onChangeFile(event) {
    let formData = new FormData();
     formData.append("MAX_FILE_SIZE", "1048576")
    formData.append('file',event.target.files[0])
     fetch('http://localhost:8080/v1/read-qr-code/', {
      method:'POST',
       headers: {
        'Accept': 'application/json',
         'Content-Type': 'multipart/form-data'
       },
       body: formData
     })
     .then(function (response){
       console.log(response)
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