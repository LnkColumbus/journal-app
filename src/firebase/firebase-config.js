import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyD6IPdlXyaEpo3CuTCUjsroLwTj5FUr5lk",
//     authDomain: "testing-project-8f717.firebaseapp.com",
//     projectId: "testing-project-8f717",
//     storageBucket: "testing-project-8f717.appspot.com",
//     messagingSenderId: "1095685761022",
//     appId: "1:1095685761022:web:9c12afe860af1300b182af"
// };

// if (process.env.NODE_ENV === 'test') {
//     // testing
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfigTesting);

// } else {
//     // dev/prod
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
// }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}