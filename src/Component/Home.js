import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { db } from '../firebase';
import Carousel from './Carousel'
import Navbar from './Navbar'

function Home() {
  const {user}=useContext(AuthContext);
  // console.log("userEmailId"+localStorage.getItem("email"));
  // console.log("Home1");
  const navigate=useNavigate();
  useEffect(()=>{
//     if(user==null)
// navigate("/login");
    async function fetchData() {
      // console.log("Home2");
let userEmailId=localStorage.getItem("email");
const docRef = doc(db, "SignUpUserData", userEmailId);
const docSnap = await getDoc(docRef);

let name="";
const querySnapshot = await getDocs(collection(db, "SignUpUserData"));
querySnapshot.forEach((doc) => {
// doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// console.log(doc.data());
if(doc.id==userEmailId)
{name=doc.data().name;
// console.log("name"+JSON.stringify(doc.data()));
// console.log("name"+doc.data().name);
localStorage.setItem("name",name);
}
// console.log("Id-> "+doc.id+" data "+doc.data());

})
    }
fetchData();
  },[])
  return (
    <>
    <Navbar></Navbar>
    <Carousel></Carousel>
  </>
  )
}

export default Home
