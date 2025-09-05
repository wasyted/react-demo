// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABDEz2zXsy-j1JoGXYeV7kdoDYp8Gl2P8",
  authDomain: "redux-demo-c94df.firebaseapp.com",
  databaseURL: "https://redux-demo-c94df-default-rtdb.firebaseio.com",
  projectId: "redux-demo-c94df",
  storageBucket: "redux-demo-c94df.firebasestorage.app",
  messagingSenderId: "752895879194",
  appId: "1:752895879194:web:c17b0c3c9c87f7de5c49a3",
  measurementId: "G-5G9YCMM2NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);