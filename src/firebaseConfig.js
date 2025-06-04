// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCIsDjA5aXcNQlr25nCt9YyXROM4CXsPNs",
  authDomain: "nusantara-folkloreee.firebaseapp.com",
  projectId: "nusantara-folkloreee",
  storageBucket: "nusantara-folkloreee.appspot.com",
  messagingSenderId: "163039123925",
  appId: "1:163039123925:web:b10d04f2fd2e9d170a855c"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
const db = getFirestore(app);

// Ekspor Firestore untuk digunakan di file lain
export { db };
