import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBOBf05T6UfVRe9qkLzkAEnJPvtocDC8mM",
    authDomain: "myfiresite-88939.firebaseapp.com",
    databaseURL: "https://myfiresite-88939-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myfiresite-88939",
    storageBucket: "myfiresite-88939.appspot.com",
    messagingSenderId: "1052000246626",
    appId: "1:1052000246626:web:e73aec23d240cfb6b26a3b",
    measurementId: "G-HLQHD82D4S"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;