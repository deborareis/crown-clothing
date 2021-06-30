import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAc8ELAIlWpHfv-xTdF9WvVob7QSFqNHRk",
  authDomain: "dr-crown-db.firebaseapp.com",
  projectId: "dr-crown-db",
  storageBucket: "dr-crown-db.appspot.com",
  messagingSenderId: "468225521338",
  appId: "1:468225521338:web:89828cf4655eb6b1293483",
  measurementId: "G-T0RYEBEYSP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
