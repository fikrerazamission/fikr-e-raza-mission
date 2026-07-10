import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQjKf9gfkVCd33DcBkPXaqxYqC8w9tbg8",
  authDomain: "fikr--e-raza-mission-91f2c.firebaseapp.com",
  projectId: "fikr--e-raza-mission-91f2c",
  storageBucket: "fikr--e-raza-mission-91f2c.firebasestorage.app",
  messagingSenderId: "904569522186",
  appId: "1:904569522186:web:7e8a1f1fb105f6e13137f3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
