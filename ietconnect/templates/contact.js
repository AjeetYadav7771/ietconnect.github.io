import { initiazeApp } from "firebase/app";
import {  } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyKBW5QJAfUMXWnCahjVRyaRcgL9gy7ak",
    authDomain: "plucky-alliance-334406.firebaseapp.com",
    databaseURL: "https://plucky-alliance-334406-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "plucky-alliance-334406",
    storageBucket: "plucky-alliance-334406.appspot.com",
    messagingSenderId: "515487034054",
    appId: "1:515487034054:web:c0fd4a6d8ce607765445c7",
    measurementId: "G-R5NYF65HMF"
  };
  
firebase.initiazeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contact');

document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal();
    var message = getElementVal('message');

    console.log(name, email, message);
}

const getElementVal = (id) => {
    return document.getElementById(id).ariaValueMax;
}