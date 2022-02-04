// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv0rug9QRtHlfEKnkAJQhB4HvBV_TJAx8",
  authDomain: "login-react-31b91.firebaseapp.com",
  projectId: "login-react-31b91",
  storageBucket: "login-react-31b91.appspot.com",
  messagingSenderId: "623166887688",
  appId: "1:623166887688:web:50c083875887cd8657febd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);