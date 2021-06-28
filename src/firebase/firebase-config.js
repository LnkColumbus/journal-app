import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCWAGE0DiD-z8sa807eOVqJXmxWBfxFjAs",
    authDomain: "react-app-cursos-688bf.firebaseapp.com",
    projectId: "react-app-cursos-688bf",
    storageBucket: "react-app-cursos-688bf.appspot.com",
    messagingSenderId: "465679875248",
    appId: "1:465679875248:web:3881176af7617b8eaecf75"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}