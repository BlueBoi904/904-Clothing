import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Import firebase

// Copy firebase config object 
const firebaseConfig = {
    apiKey: "AIzaSyCP8cfAp8fvvOeCOZ3wHsf5YMX_5D_NUt0",
    authDomain: "store-database-14ba9.firebaseapp.com",
    databaseURL: "https://store-database-14ba9.firebaseio.com",
    projectId: "store-database-14ba9",
    storageBucket: "",
    messagingSenderId: "1057817012430",
    appId: "1:1057817012430:web:fc5b173b4996689f"
  };

// Initialize app using firebase.initializeApp(config)

firebase.initializeApp(firebaseConfig);

// Setup google auth

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Enable google sign-in on firebase

export default firebase;