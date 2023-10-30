import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
 } from "firebase/auth";
export const AuthContext = createContext();


function googleSignIn(){
  let val=false;
  const provider=new GoogleAuthProvider();
let res=  signInWithPopup(auth,provider).then((result)=>{
// console.log("Result -> "+JSON.stringify(result));
// console.log("Result Name"+result.user.displayName);
localStorage.setItem("name",result.user.displayName)
// console.log("Result Email"+result.user.email);
localStorage.setItem("email",result.user.email);
return true;
  }).catch((error)=>{
    // console.log("error signOut ->"+error);
    return false;
  });
  return res;
}
export function AuthProvider({children}) {
    const [user,setUser]=useState("");
    const [userEmailId,setUserEmail]=useState("");
    const [loading,setLoading]=useState(true)
    // e.preventDefault();
    function signUp(email,password)
    {
        // console.log("signUp firebase");
       return  createUserWithEmailAndPassword(auth,email, password)
        
    }
    function login(email,password)
{
    return signInWithEmailAndPassword(auth,email,password);
   
}

function logout() {
    // setUser('');
    return signOut(auth);
    
  }
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
    //   if (user) {
        // User is signed in, see docs for a list of available properties
        setUser(user)
        setLoading(false);
  },[])
})

const store={
    signUp,login,logout,user,logout,userEmailId,setUserEmail,googleSignIn
}
  return (
    <AuthContext.Provider value={store}>
      {!loading&&children}
    </AuthContext.Provider>
  )
}

