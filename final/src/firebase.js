import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDwWqu6vko-dALqoeeRn7RzoIhm4oz6jHQ",
  authDomain: "final-13269.firebaseapp.com",
  projectId: "final-13269",
  storageBucket: "final-13269.appspot.com",
  messagingSenderId: "1006665995404",
  appId: "1:1006665995404:web:9f0e3b588fef152504d7a9",
  measurementId: "G-04F1VBS2CQ"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };