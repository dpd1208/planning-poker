// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk0zAueCGPXueQzlWEjXFiuhaNhKeP-68",
  authDomain: "planning-poker-bc99a.firebaseapp.com",
  projectId: "planning-poker-bc99a",
  storageBucket: "planning-poker-bc99a.appspot.com",
  messagingSenderId: "494632551924",
  appId: "1:494632551924:web:efbb9fd67b1d0be93165a1",
  measurementId: "G-KLC7KMJ7RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);