// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd5KRdrcI4nV5M7-0B1c3Hj_l6ZSN-srA",
  authDomain: "read-0niiiii.firebaseapp.com",
  projectId: "read-0niiiii",
  storageBucket: "read-0niiiii.appspot.com",
  messagingSenderId: "442416506004",
  appId: "1:442416506004:web:027401c824e1cac9cfc081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;