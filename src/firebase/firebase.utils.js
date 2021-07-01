import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_uUS_8Bbvb0zQUS0Xk2237RT6a1eR01A",
    authDomain: "crown-db-62a35.firebaseapp.com",
    projectId: "crown-db-62a35",
    storageBucket: "crown-db-62a35.appspot.com",
    messagingSenderId: "879561066787",
    appId: "1:879561066787:web:9a036fa3e008c0dbe66496",
    measurementId: "G-8ZR0Z3MF0B"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;