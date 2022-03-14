import React, { useContext, useEffect, useState } from 'react';
import { AUTH } from '../firebaseSetup';
import { User, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

// Referenced: https://www.youtube.com/watch?v=PKwu15ldZ7k&t=2374s

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = (children) => {
    const [ currentUser, setCurrentUser ] = useState();
    const [ submitting, setSubmitting ] = useState(true);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(AUTH, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(AUTH, email, password);
    };

    const logout = () => {
        return signOut(AUTH);
    };


    useEffect(() => {
        const unsubscribe = AUTH.onAuthStateChanged(user => {
            setCurrentUser(user);
            setSubmitting(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={ value }>
            { !submitting && children.children }
        </AuthContext.Provider>
    );
};