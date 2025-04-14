// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvC0rFyi170XK9VKwBe6WkkqjUSLEPqSk",
  authDomain: "myecom-a0332.firebaseapp.com",
  projectId: "myecom-a0332",
  storageBucket: "myecom-a0332.firebasestorage.app",
  messagingSenderId: "627145514239",
  appId: "1:627145514239:web:89ae2b8f6845479fe7c0ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth and any other Firebase services you might use
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
};