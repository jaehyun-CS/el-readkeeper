import { initializeApp } from 'firebase/app';
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebase.config';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp(firebaseConfig);

export const AUTH = getAuth(firebaseApp);
export const DB = getFirestore(firebaseApp);

export default firebaseApp;
