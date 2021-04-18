import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfGxYE66VoWT742iIC3d7eEADmNWko8Eg",
  authDomain: "cuure-test-166b5.firebaseapp.com",
  projectId: "cuure-test-166b5",
  storageBucket: "cuure-test-166b5.appspot.com",
  messagingSenderId: "831991249904",
  appId: "1:831991249904:web:b05da293137ca307657b35"
};

firebase.initializeApp(firebaseConfig);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App)
    }).$mount("#app");
  }
});
