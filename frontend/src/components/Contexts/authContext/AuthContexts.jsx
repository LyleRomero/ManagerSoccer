import React, { useContext, useState, useEffect, createContext } from 'react';
import { auth } from "../../firebase/firebaseContext/firebase";
// import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  signOut} from 'firebase/auth';

const authContext = createContext();

export function useAuth() {
  const context = useContext(authContext);
  if (!context){
    console.log("error create context");
  }
  return context;
}

export function AuthProvider({ children }) {
  //const [currentUser, setCurrentUser] = useState(null);
  //Sconst [userLoggedIn, setUserLoggedIn] = useState(false);
  //const [isEmailUser, setIsEmailUser] = useState(false);
  //const [isGoogleUser, setIsGoogleUser] = useState(false);
  //const [loading, setLoading] = useState(true);

  /*useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    console.log("Auth state changed:", user);
    if (user) {

      setCurrentUser({ ...user });

      // check if provider is email and password login
      //const isEmail = user.providerData.some(
        //(provider) => provider.providerId === "password"
      //);
      //setIsEmailUser(isEmail);

      // check if the auth provider is google or not
    //   const isGoogle = user.providerData.some(
    //     (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
    //   );
    //   setIsGoogleUser(isGoogle);

      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }

    setLoading(false);
  }

  console.log("Current user:", currentUser);
  console.log("User logged in:", userLoggedIn);

  const value = {
    userLoggedIn,
    //isEmailUser,
    //isGoogleUser,
    currentUser,
    //setCurrentUser
    loading
  };*/

  const register = async(email, password) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    console.log(response);
  };

  const login = async(email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  }

  const loginWithGoogle = async ()  => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  }

  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
  }
 
  return (
    <authContext.Provider
    value={{register, login, loginWithGoogle, logout}}>
      {children}
    </authContext.Provider>
  );
}