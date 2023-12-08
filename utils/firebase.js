// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-54284.firebaseapp.com",
  projectId: "blog-54284",
  storageBucket: "blog-54284.appspot.com",
  messagingSenderId: "609369379460",
  appId: "1:609369379460:web:5de6131657c9219007a8d1",
  measurementId: "G-NLW6WKY0SX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
