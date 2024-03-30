
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDecE_JPBa1J1Z38WGVv8FsJTC2OdRYmYM",
  authDomain: "user-authentication-86856.firebaseapp.com",
  projectId: "user-authentication-86856",
  storageBucket: "user-authentication-86856.appspot.com",
  messagingSenderId: "1055159493741",
  appId: "1:1055159493741:web:b2951561c35692258e4b64",
  measurementId: "G-SK3SV52JDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
