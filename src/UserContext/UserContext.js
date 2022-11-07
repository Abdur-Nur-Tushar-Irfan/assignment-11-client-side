import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider=new GoogleAuthProvider()

const UserContext = ({ children }) => {
   
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        const unsubsribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return ()=>{
            unsubsribe();
        }
    },[])
     //for create email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //for login

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    //for logout
    const logOut=()=>{
        return signOut(auth)
    }
    //for google sign in
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    //for update profile
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile);

    }

    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        loading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;