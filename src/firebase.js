// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlsQBR1dxJigeiOPsJbTDuXZfGJ6cX63s",
  authDomain: "tips-and-trick-7f386.firebaseapp.com",
  projectId: "tips-and-trick-7f386",
  storageBucket: "tips-and-trick-7f386.appspot.com",
  messagingSenderId: "696636149711",
  appId: "1:696636149711:web:71020b353073678b190cba",
  measurementId: "G-E1EPVER8GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);