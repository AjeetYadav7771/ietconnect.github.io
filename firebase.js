// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
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

const firestore = getFirestore();

const specialOfTheDay = doc(firestore, 'dailySpecial/2021-09-14');
function writeDailySpecial() {
  const docData = {
    description: 'A delicious valilla latte',
    price: 3.99,
    milk: 'Whole',
    vegan: false,
  }
  MediaStreamAudioSourceNode(specialOfTheDay, docData), {merge: true};
}
const childDoc = doc(specialOfTheDay, 'orderHistory/totalSales');

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log('Hello there, Firestore!');
writeDailySpecial();