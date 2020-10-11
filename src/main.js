import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase";
import firebaseConfig from './config/Firebase'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount('#app')


