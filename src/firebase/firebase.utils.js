import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config={
    apiKey: "AIzaSyB2tdX6J1efT2YAjyC9Q7dpaGXYYhvfuRo",
    authDomain: "crwn-db-bf864.firebaseapp.com",
    databaseURL: "https://crwn-db-bf864.firebaseio.com",
    projectId: "crwn-db-bf864",
    storageBucket: "crwn-db-bf864.appspot.com",
    messagingSenderId: "658854477557",
    appId: "1:658854477557:web:0a377a130650535e418fbc",
    measurementId: "G-S8S30DM51M"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;