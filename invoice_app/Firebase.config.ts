// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC8kZk_sY8xXkmG1FiPWYjStUDhOjB8cY",
  authDomain: "invoice-app-e5405.firebaseapp.com",
  projectId: "invoice-app-e5405",
  storageBucket: "invoice-app-e5405.appspot.com",
  messagingSenderId: "245513343047",
  appId: "1:245513343047:web:2fabae4935166345e22162",
  measurementId: "G-QTB6CEB5EN",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
