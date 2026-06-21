
// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDKtPZm1rUkEa_mzHK2nCdspD5Eaae-JCc",
  authDomain: "wh45-7df86.firebaseapp.com",
  projectId: "wh45-7df86",
  storageBucket: "wh45-7df86.firebasestorage.app",
  messagingSenderId: "867696510522",
  appId: "1:867696510522:web:21db2d1babb1793f15d703",
  measurementId: "G-W99E0GZZMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);

// Export
export { auth, db };

