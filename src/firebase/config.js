

import firebase from 'firebase';
import 'firebase/firestore';
  // Your web app's Firebase configuration
 
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
        apiKey: "AIzaSyA7PLqln9xu7bz4onziaYF10snEOvxt02o",
        authDomain: "expense-firebase-7ce2c.firebaseapp.com",
        projectId: "expense-firebase-7ce2c",
        storageBucket: "expense-firebase-7ce2c.appspot.com",
        messagingSenderId: "582524021984",
        appId: "1:582524021984:web:1ef94a6ae81dfb9c1f3485",
        measurementId: "G-GTRY9ZEW3M"
      };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapShots: true});

  
  export default firebase;
