import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function Services() {
    const navigate=useNavigate();
    const {user}=useContext(AuthContext);
    const handleService=()=>{
        navigate("/services")
    }
    useEffect(()=>{
        if(user==null)
        {
            // navigate("/login");
            // return ;
        }
    },[])
  return (
    <div className='h-full w-full  '>
     <div className='h-1/5 bg-white flex items-end justify-center'>
        <h1 className='text-drymeBlue text-6xl font-bold 	underline underline-offset-8 text-drymeBlue'>Our Services</h1>
     </div >
<div className='h-4/5 w-full flex space-x-24 items-center justify-center bg-white'>
    <div className='h-3/4 w-1/5  drop-shadow-2xl border-2 bg-white'>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src="https://img.freepik.com/premium-photo/men-s-clothing-set-with-oxford-shoes-watch-sunglasses-office-shirt-tie-jacket-isolated-white-background-top-view_107612-80.jpg?w=2000"></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Male Products</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2'>All Male Categories Items available in every size with cheap & fast delivery service</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl' onClick={handleService}>Continue</button>
        </div>
        </div>
    </div>
    <div className='h-3/4 w-1/5  drop-shadow-2xl border-2 bg-white'>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src="https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8="></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Female Products</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2'>All Female Categories Items available in every size with cheap & fast delivery service.</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl' onClick={handleService}>Continue</button>
        </div>
        </div>
    </div>
    <div className='h-3/4 w-1/5  drop-shadow-2xl border-2 bg-white'>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src="https://img.paisawapas.com/ovz3vew9pw/2021/10/06223906/amazon-trending.jpg"></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Electronics Products</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2'>All Electronics Categories Items available in every model with cheap & fast delivery service</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl' onClick={handleService}>Continue</button>
        </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Services
