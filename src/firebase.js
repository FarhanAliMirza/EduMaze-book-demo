import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAoJqtx5CIiJ9HNw93yAa73YGajQqadkY",
  authDomain: "edumaze-394116.firebaseapp.com",
  projectId: "edumaze-394116",
  storageBucket: "edumaze-394116.appspot.com",
  messagingSenderId: "109486360194",
  appId: "1:109486360194:web:c2cd1cae29a88f5008969b",
  measurementId: "G-JFBL77PPN5",
});

var db = firebaseApp.firestore();

export { db };
