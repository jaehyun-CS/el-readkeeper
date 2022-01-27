import { initializeApp } from 'firebase/app';
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebase.config';

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export default firebaseApp;
