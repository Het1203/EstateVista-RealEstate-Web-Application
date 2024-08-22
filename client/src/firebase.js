// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
    authDomain: "estatevista-3365f.firebaseapp.com",
    projectId: "estatevista-3365f",
    storageBucket: "estatevista-3365f.appspot.com",
    messagingSenderId: "1043975110469",
    appId: "1:1043975110469:web:8b2eeaa588276e5d21482c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);