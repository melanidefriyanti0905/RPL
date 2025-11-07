// firebaseConfig.js
// Modul untuk inisialisasi koneksi Firebase Firestore.
// NOTE: Isi nilai config dibawah sesuai project Firebase-mu.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqSwFWaGuPygGNSwnebTUcvIBEx1ty2J0",
  authDomain: "input-nilai-mhs-eb6e0.firebaseapp.com",
  projectId: "input-nilai-mhs-eb6e0",
  storageBucket: "input-nilai-mhs-eb6e0.firebasestorage.app",
  messagingSenderId: "793550056137",
  appId: "1:793550056137:web:aae554ba6a33147c4d3b18",
  measurementId: "G-81P2SSPZ31",
};

// Inisialisasi Firebase App & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export db agar dipakai module lain
export { db };