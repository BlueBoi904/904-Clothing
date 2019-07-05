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

  // We want to write a function that allows us to take that userAuth obj, and store it inside of our database
  /*
    QueryRefernce and QuerySnapshot -
    A query is a request we make to recieve something from the database

    Firestore returns us two types of objects: references and snapshots. Of these objects, they can be either Document
    or Collection versions.

    Firestore will always return us these objects, even if nothing exists from that query.

    We use documentRef objects to perform our CRUD methods, the methods are .set(), .get(), .update(), .delete().
    We can also use .add() to add to a collection.
  */



  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    //check if snapShop.exists exists in the database or not, then create it if it's empty
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData,
        })
      } catch (error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

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