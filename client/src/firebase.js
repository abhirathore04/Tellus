// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tellus-c7b84.firebaseapp.com",
  projectId: "tellus-c7b84",
  storageBucket: "tellus-c7b84.appspot.com",
  messagingSenderId: "738627786688",
  appId: "1:738627786688:web:79f20dd797e88981989a25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);