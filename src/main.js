import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQ6v0Ov4dkk0jTybwJw_4kXf61a_cu-1s",
    authDomain: "vue-test-bd15d.firebaseapp.com",
    projectId: "vue-test-bd15d",
    storageBucket: "vue-test-bd15d.appspot.com",
    messagingSenderId: "843010599910",
    appId: "1:843010599910:web:f888e147842610838f4427",
    measurementId: "G-14Z53N3PL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount('#app')