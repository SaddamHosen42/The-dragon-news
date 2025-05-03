// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwC6Mc2OtDGSSRyj9wy1FpeZULI9jJc9M",
  authDomain: "dragon-news-auth-87807.firebaseapp.com",
  projectId: "dragon-news-auth-87807",
  storageBucket: "dragon-news-auth-87807.firebasestorage.app",
  messagingSenderId: "648496279758",
  appId: "1:648496279758:web:81c02f274dde3bb94c209f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);