import Vue from 'vue'
import App from './App.vue'


// import firebase from 'firebase/compat/app';
// import * as firebase from "firebase/app";
// import {  } from "firebase/storage";

Vue.config.productionTip = false

// firebase.initializeApp({
//   apiKey: "AIzaSyBBpzO5BLG_K37JTsJ07iAkStWCl1OwYrU",
//   authDomain: "vue-upload-aea26.firebaseapp.com",
//   projectId: "vue-upload-aea26",
//   storageBucket: "vue-upload-aea26.appspot.com",
//   messagingSenderId: "383090543683",
//   appId: "1:383090543683:web:8f95cc858cde34abcf98f6"
// });


new Vue({
  render: h => h(App),
}).$mount('#app')
