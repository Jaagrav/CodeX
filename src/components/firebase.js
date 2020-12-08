import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA2KhsWCTk8FQDpB440p4sJEeXq_NJ-1d8",
  authDomain: "rhythm-3ef06.firebaseapp.com",
  databaseURL: "https://rhythm-3ef06.firebaseio.com",
  projectId: "rhythm-3ef06",
  storageBucket: "rhythm-3ef06.appspot.com",
  messagingSenderId: "917983204838",
  appId: "1:917983204838:web:68cacc66e0f9940946b227",
  measurementId: "G-XYSWYMDDRH"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
