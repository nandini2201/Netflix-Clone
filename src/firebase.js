/* eslint-disable no-unused-vars */
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyChDcV9sCOJN9L0rhkcj4hvuRtWveqfrTA",
  authDomain: "netflix-clone-a468e.firebaseapp.com",
  projectId: "netflix-clone-a468e",
  storageBucket: "netflix-clone-a468e.appspot.com",
  messagingSenderId: "352385141721",
  appId: "1:352385141721:web:352e38db625c8625b6a7c8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
