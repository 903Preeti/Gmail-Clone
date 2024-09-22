import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider  } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDRZYou-XenB8xyCs3xrXQdOOLiG1oIGXE",
    authDomain: "clone-yt-27d93.firebaseapp.com",
    projectId: "clone-yt-27d93",
    storageBucket: "clone-yt-27d93.appspot.com",
    messagingSenderId: "492581658782",
    appId: "1:492581658782:web:d17b73905e74a686605b8f",
    measurementId: "G-62L17XH1RD"
  };

    // Initialize Firebase

  // Get Auth instance
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  export {firebaseApp, db, auth, provider };

  