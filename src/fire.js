// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAzluUowRqO4xbAbWImPiXIQ3PsH0lzEQ",
  authDomain: "admin-26f9e.firebaseapp.com",
  databaseURL: "https://admin-26f9e-default-rtdb.firebaseio.com",
  projectId: "admin-26f9e",
  storageBucket: "admin-26f9e.appspot.com",
  messagingSenderId: "456523450985",
  appId: "1:456523450985:web:2e5da9a3e5e5962373f0f8",
  measurementId: "G-NP9MWEGHES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  export default firebaseConfig;