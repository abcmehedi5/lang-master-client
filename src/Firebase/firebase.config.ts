// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
console.log(import.meta.env.VITE_APIKEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
