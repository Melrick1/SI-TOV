// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWjs6fNkvme7Cd71neLwdK4rCFodVp1zI",
  authDomain: "research-vto.firebaseapp.com",
  projectId: "research-vto",
  storageBucket: "research-vto.appspot.com",
  messagingSenderId: "235057027082",
  appId: "1:235057027082:web:659ca5b3219a02caa8e7f3",
  measurementId: "G-772H72F89J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const Auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const DB = getFirestore(app);