// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6uPuTXWyHjrHtVfgftX4wSbrVR5QY270",
  authDomain: "rj-52190.firebaseapp.com",
  projectId: "rj-52190",
  storageBucket: "rj-52190.appspot.com",
  messagingSenderId: "947643447918",
  appId: "1:947643447918:web:98ebcd137983fdbd37047f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()