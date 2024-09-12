// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD9SWnmmGzvWJeI2g0AbQ3MVkdsRD0nKk",
  authDomain: "journal-app-b12bb.firebaseapp.com",
  projectId: "journal-app-b12bb",
  storageBucket: "journal-app-b12bb.appspot.com",
  messagingSenderId: "683979178296",
  appId: "1:683979178296:web:e842d99972c60232a101cd"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);