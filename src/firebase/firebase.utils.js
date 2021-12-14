import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAc8ELAIlWpHfv-xTdF9WvVob7QSFqNHRk',
  authDomain: 'dr-crown-db.firebaseapp.com',
  projectId: 'dr-crown-db',
  storageBucket: 'dr-crown-db.appspot.com',
  messagingSenderId: '468225521338',
  appId: '1:468225521338:web:89828cf4655eb6b1293483',
  measurementId: 'G-T0RYEBEYSP'
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
