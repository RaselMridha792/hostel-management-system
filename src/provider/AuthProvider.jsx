import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "./firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    const createUserWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (signedInUser)=>{
            if(signedInUser){
                console.log("account created successfully user:", signedInUser)
                setUser(signedInUser);
                setLoading(false);
            }
            else{
                console.log("not signedIn")
                setUser(null);
            }
        })

        return ()=>{
            unsubcribe();
        }
    }, [])
    const AuthInfo = {
        createUser,
        createUserWithGoogle,
        logInUser,
        loading,
        user,
    }
    return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
};

AuthProvider.propTypes = {
    children: PropTypes.object
}
export default AuthProvider;