import React, { useEffect, useState } from "react";
import fire from "../fire"
export const authContext = React.createContext()


const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState('')
  // console.log(currentUser);
  const [error, setError] = useState('')

  function signUp(email,password, navigate){
    fire.auth().createUserWithEmailAndPassword(email,password)
    .then(() => navigate("/login"))
    .catch((err) => setError(err.message))
  }

  function login (email,password, navigate){
    fire.auth().signInWithEmailAndPassword(email,password)
    .then(() => navigate('/products'))
    .catch(err => setError(err.message))
  }

  function logOut (){
    fire.auth().signOut()
  }

  function authListener (){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        setCurrentUser(user)
      }else{
        setCurrentUser("")
      }
    })
  }
  console.log(currentUser);
  useEffect(authListener, [])

  return (<authContext.Provider value={{currentUser, error, signUp, login, logOut}}>{children}</authContext.Provider>)
}
export default AuthContextProvider;