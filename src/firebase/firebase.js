// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7EhdHhnVoyMdZuwc5RUGxR2bN2fRQ-fY",
  authDomain: "lab7-6cab1.firebaseapp.com",
  projectId: "lab7-6cab1",
  storageBucket: "lab7-6cab1.appspot.com",
  messagingSenderId: "473949046085",
  appId: "1:473949046085:web:3d4b39631ae749e81d6a2c",
  measurementId: "G-HHR3RK3VJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();