// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgP-p84OY12V8jme_ypwHoJ1aSRySEr3I",
  authDomain: "user-auth-9d4cc.firebaseapp.com",
  projectId: "user-auth-9d4cc",
  storageBucket: "user-auth-9d4cc.appspot.com",
  messagingSenderId: "397044385552",
  appId: "1:397044385552:web:dfc7b625ab2e58319d0795",
  measurementId: "G-ZQVYE18G5V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);