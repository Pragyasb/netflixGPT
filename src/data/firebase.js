// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW5wCssx2WKEhTfphPqbgTp1o4BoaPg3E",
  authDomain: "netflixgpt-52ec5.firebaseapp.com",
  projectId: "netflixgpt-52ec5",
  storageBucket: "netflixgpt-52ec5.appspot.com",
  messagingSenderId: "579367595917",
  appId: "1:579367595917:web:819e1adcb3a6b8fa1297c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
