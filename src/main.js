import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBP6K4jEdfcGN6pIVnBX47taCqpxYN35iI",
  authDomain: "demosso-1a57c.firebaseapp.com",
  databaseURL: "https://demosso-1a57c.firebaseio.com",
  projectId: "demosso-1a57c",
  storageBucket: "demosso-1a57c.appspot.com",
  messagingSenderId: "1006511121632",
  appId: "1:1006511121632:web:e7220119c1490393dd9c85",
  measurementId: "G-EP2VFBGM7Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


