// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRHTqhp6A_HL4_Zqb-3qcneeEr4hDowP0",
  authDomain: "ema-jon-simple-b3eac.firebaseapp.com",
  projectId: "ema-jon-simple-b3eac",
  storageBucket: "ema-jon-simple-b3eac.appspot.com",
  messagingSenderId: "919788748885",
  appId: "1:919788748885:web:94e32b35efc73405ce54dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
