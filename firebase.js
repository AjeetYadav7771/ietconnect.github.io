// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyKBW5QJAfUMXWnCahjVRyaRcgL9gy7ak",
  authDomain: "plucky-alliance-334406.firebaseapp.com",
  projectId: "plucky-alliance-334406",
  storageBucket: "plucky-alliance-334406.appspot.com",
  messagingSenderId: "515487034054",
  appId: "1:515487034054:web:c0fd4a6d8ce607765445c7",
  measurementId: "G-R5NYF65HMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);