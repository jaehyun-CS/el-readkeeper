import { initializeApp } from 'firebase/app';
import {
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { firebaseConfig } from './firebase.config';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

connectAuthEmulator(auth, 'http://localhost:9099');

const loginEmailPassword = async () => {
    
}


