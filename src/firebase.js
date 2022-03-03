import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyATD8dLwDcaAkPBv4tSKiOAKD2SFuNLt1Q",
  authDomain: "linkedin-clone-e9c5b.firebaseapp.com",
  projectId: "linkedin-clone-e9c5b",
  storageBucket: "linkedin-clone-e9c5b.appspot.com",
  messagingSenderId: "1066830996236",
  appId: "1:1066830996236:web:875e5e23cde6123a0adf29",
  measurementId: "G-37VP626MGQ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
