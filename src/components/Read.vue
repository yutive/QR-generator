<template>
  <div>
    <h2>QR-read</h2>
      <p>Choose QR code image to read/scan:</p>
      <input
          type="file"
          name="file"
          @change="previewImage"
          accept="image/*"
      />
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
        <progress id="progress" :value="uploadValue" max="100" ></progress>
      </p>
    </div>
    <div v-if="imageData!=null">
      <img class="preview" :src="picture"><br>
      <button @click="onUpload">Upload</button>
    </div>
    <button id="submit" @click="onChangeFile()">Read QR code</button>
  </div>

</template>

<script>
import firebase from '../../node_modules/@firebase/app/';
export default {
  name: "Read",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0
    }
  },
  methods: {
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
            this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          }, error=>{console.log(error.message)},
          ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
              this.picture =url;
            });
          }
      );
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
img.preview {
  width: 200px;
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
</style>