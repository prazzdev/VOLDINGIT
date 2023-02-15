// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDELescticpFK39X4aupcciZfTFRSk2pvs",
  authDomain: "volding-it.firebaseapp.com",
  projectId: "volding-it",
  storageBucket: "volding-it.appspot.com",
  messagingSenderId: "94585668945",
  appId: "1:94585668945:web:192209ea15350ff615ff70",
  measurementId: "G-DF2NFNF5NZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);