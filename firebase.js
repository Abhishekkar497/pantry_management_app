// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkbjrdW9LimhmdDmT3ZZFW55KGRjcYuug",
  authDomain: "pantry-management-app-77df8.firebaseapp.com",
  projectId: "pantry-management-app-77df8",
  storageBucket: "pantry-management-app-77df8.appspot.com",
  messagingSenderId: "480292717104",
  appId: "1:480292717104:web:72cda42e1c1ab27ad6a3f5",
  measurementId: "G-4YGYZH3CY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
