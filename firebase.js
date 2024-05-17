// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKC0L9H7_LAwir4ZjVg3gy7MFBZlu3XvY",
  authDomain: "orderfood-21de3.firebaseapp.com",
  projectId: "orderfood-21de3",
  storageBucket: "orderfood-21de3.appspot.com",
  messagingSenderId: "942733266995",
  appId: "1:942733266995:web:9dc1f89899996e19225346",
  measurementId: "G-FWMH7NQG15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
