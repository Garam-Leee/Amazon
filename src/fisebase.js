// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsW1DIFfPJ7p_MJrZm25qh_LNlIskTdnI",
  authDomain: "website-98844.firebaseapp.com",
  projectId: "website-98844",
  storageBucket: "website-98844.appspot.com",
  messagingSenderId: "865484075466",
  appId: "1:865484075466:web:ea7a99c73d10b6cff99f33",
  measurementId: "G-JWQFC4HFQ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
