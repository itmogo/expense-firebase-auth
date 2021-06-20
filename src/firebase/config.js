

import firebase from 'firebase';
import 'firebase/firestore';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDQ3Tqw2Dr9m5RGhKp8VKz3N4gCEtCo9XI",
    authDomain: "expense-c4029.firebaseapp.com",
    projectId: "expense-c4029",
    storageBucket: "expense-c4029.appspot.com",
    messagingSenderId: "217318448959",
    appId: "1:217318448959:web:259a88076063aa44837d8a",
    measurementId: "G-X3NG8KEWJF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapShots: true});

  
  export default firebase;
