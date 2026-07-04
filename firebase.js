// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD30iXq1EmCFRe5bjJsQlsRLSbHpfIH2qI",
  authDomain: "fikr--e-raza-mission.firebaseapp.com",
  projectId: "fikr--e-raza-mission",
  storageBucket: "fikr--e-raza-mission.firebasestorage.app",
  messagingSenderId: "834592093251",
  appId: "1:834592093251:web:81649fe63961d2d51210f6",
  measurementId: "G-5FM0CYRN1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export
export const auth = getAuth(app);
export const db = getFirestore(app);
