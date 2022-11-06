import { setDoc, doc, getDoc } from 'firebase/firestore';
import { DB } from '../firebaseSetup';
import User from '../types/User';


/**
 * Adds a user to Firestore using a UID, first name, and last name, and email
 * @param uid the UID being used when creating the user
 * @param fName the first name of the user
 * @param lName the last name of the user
 * @param email the email of the user
 */
export const createNewUser = async (uid: string, fName: string, lName: string, email: string) => {
    try {
        await setDoc(doc(DB, 'users', uid), {
            fName: fName,
            lName: lName,
            email: email,
        });
    } catch (err) {
        console.log('There was an error while adding the new user to Firestore with UID: ', uid);
    }
};

export const getUserName = async (uid: string) => {
    const user: User = {
        uid: uid,
        fName: null,
        lName: null
    };

    try {
        const querySnapshot = await getDoc(doc(DB, 'users', uid));

        user.uid = uid;

        console.log(querySnapshot);
        // user.fName = querySnapshot
    } catch (err) {
        console.log('There was an error while getting user data from Firestore');
    }
};