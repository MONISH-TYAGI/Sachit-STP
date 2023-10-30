import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function Navbar() {
  const { logout } = useContext(AuthContext);
  const [icon,setIcon]=useState(false);
  const navigate=useNavigate();
  const handleServices=()=>{
    navigate("/services");
  }
  const handleBag=()=>{
    navigate("/Bag");
  }
  const handleHome=()=>{
    navigate("/")
  }
  const handleReviews=()=>{
    navigate("/reviews")
  }
  const handleLogout=async()=>{
    await logout();
    // alert("LogOut")    
    localStorage.clear();
    navigate("/login")

  }
  const goToLoginPage=()=>{
    navigate("/login")
  }
  let name;
  if(localStorage.getItem("name")!=null)
   name=localStorage.getItem("name");
   else
   name="LogIn"
  return (
    <div className='fixed z-40'>
    <div className='h-20 bg-drymeBlue fixed top-0 w-full z-30'>Head 1</div>
    <div className='h-20 bg-white w-3/4 m-auto flex fixed top-12 left-44 border-solid border-2 z-30'>
     <div className=' w-2/4 flex items-center pl-10 h-full '><span className=''><h1 className='EasyWashFirst'>ECom<span className='EasyWashSecond'>.com</span></h1></span>
     </div>
     <div className='h-full w-2/4  flex  z-1'>
     
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select cursor-pointer' onClick={handleHome}><i className="fa-solid fa-house "></i><span>Home</span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select cursor-pointer' onClick={handleServices}><i className="fa-solid fa-gear "></i><span>Services</span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select  cursor-pointer' onClick={handleReviews}><i className="fa-solid fa-heart "></i><span>Reviews</span></div>
       <div className='h-full w-1/6 flex items-center justify-center hover:text-select cursor-pointer' onClick={handleBag}><i className="fa-solid fa-bag-shopping "></i><span>Bag</span></div>
       
        
        <div className='h-full w-2/6  flex  items-center justify-center hover:text-select cursor-pointer'  onMouseEnter={()=>setIcon(true)} onMouseLeave={()=>setIcon(false)}>
          {
          (icon==false||name=="LogIn")?
          <span onMouseEnter={()=>setIcon(true)} onClick={goToLoginPage} onMouseLeave={()=>setIcon(false)} >
          <i className="fa-solid fa-user m-1" ></i>{name}</span>:<span onMouseLeave={()=>setIcon(false)} onClick={handleLogout}><i class="fa-solid fa-lock-open pr-1"></i>LogOut</span>
}
          </div>

       
       {/* <div className='fixed flex flex-column'>
       <i class="fa-solid fa-caret-up text-3xl"></i>
        <button className='bg-drymeBlue text-white underline'>LogOut</button>
       </div> */}
     </div>
     </div>
     </div>
  )
}

export default Navbar
