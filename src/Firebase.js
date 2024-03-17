// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged  } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPgfmx2OVwrrg4OYOCYF34-iWRmBRLfS0",
  authDomain: "vto-questionnaire.firebaseapp.com",
  projectId: "vto-questionnaire",
  storageBucket: "vto-questionnaire.appspot.com",
  messagingSenderId: "741269563678",
  appId: "1:741269563678:web:36daee9ee3f7f23f6f810f",
  measurementId: "G-484GPF1J6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const DB = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const Auth = getAuth(app);

// Observer to check the user's authentication state
onAuthStateChanged(Auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user.uid);
  } else {
    // User is signed out
    console.log('User is signed out');
  }
});

export { Auth };