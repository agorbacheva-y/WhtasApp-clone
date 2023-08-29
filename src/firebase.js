// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0--LKQTEEN4bwsJ7cUMyLaHbP-vPYTKM",
  authDomain: "whatsapp-clone-104ea.firebaseapp.com",
  projectId: "whatsapp-clone-104ea",
  storageBucket: "whatsapp-clone-104ea.appspot.com",
  messagingSenderId: "784919618194",
  appId: "1:784919618194:web:59074e34e356c6ce7e7c4b",
  measurementId: "G-LV1HXZ11YE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

// firebase is google service. can handle traffic so scalable and optimal