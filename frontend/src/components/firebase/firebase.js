// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkoRWAqU9oEwuEMJSeQllT9uR33xUCt24",
  authDomain: "managersoccer-6d20e.firebaseapp.com",
  projectId: "managersoccer-6d20e",
  storageBucket: "managersoccer-6d20e.appspot.com",
  messagingSenderId: "424471743657",
  appId: "1:424471743657:web:262e9046998e8f280b2db8",
  measurementId: "G-RX42F3SM5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app , auth};