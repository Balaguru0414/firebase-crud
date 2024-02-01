// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4paBg25acxfYBIs2byZPT9E4YG314YBI",
  authDomain: "fir-store-22d1a.firebaseapp.com",
  projectId: "fir-store-22d1a",
  storageBucket: "fir-store-22d1a.appspot.com",
  messagingSenderId: "664602118275",
  appId: "1:664602118275:web:1c0a27e4c10326a7d833b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
