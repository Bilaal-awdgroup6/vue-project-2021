import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlU7cNuVX1iB9dhDRvUY2IcaCi4-b77Do",
  authDomain: "bilaal-myocardio-awdg6-8e63a.firebaseapp.com",
  projectId: "bilaal-myocardio-awdg6-8e63a",
  storageBucket: "bilaal-myocardio-awdg6-8e63a.appspot.com",
  messagingSenderId: "137865187451",
  appId: "1:137865187451:web:d2f7f68b8dda5478ca92de"
};

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseAuthentication = firebase.auth();
  const firebaseFireStore = firebase.firestore();

  export { firebaseAuthentication, firebaseFireStore, firebase};

