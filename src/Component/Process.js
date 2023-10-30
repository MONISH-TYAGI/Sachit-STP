import React, { useState } from 'react'
// import Poster from '../../images/videoImg.jpg';
// import VideoSrc from '../../images/works.mp4';
// import VideoPlayer from 'react-video-js-player';
// import video1 from "../../Video/"
function Process() {
    const [check,setCheck]=useState(false);
    const playVideo=()=>{
        setCheck(!check)
       
    }
    // const src="https://www.youtube.com/embed/HKS0sgbk-BA?autoplay=1&mute=1&controls=0";
    const src="https://www.kapwing.com/e/63cab738c3549a051203022e";
  return (
    <div className='w-full h-full flex '>
      <div className='processFirstHalf w-1/2 h-full  flex items-center justify-center '>
        <div className=' h-3/4 w-36 '>
   
    
    <div className='w-full bg-white h-10 flex rounded-lg border-drymeBlue border-2 items-center justify-center  relative top-20' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue '><span>2</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Place Order</span></div>
    </div>
    
    <div className='w-full bg-white h-10 flex rounded-lg border-drymeBlue border-2 items-center  relative top-48 ' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue ml-2'><span>4</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Delievery</span></div>
    
    </div>
        </div>
        
        <div className=' w-6 h-3/4 bg-drymeBlue rounded  border-black'> 
        <div className='w-full h-2 bg-white  relative top-4 border-2 border-black'></div>
        <div className='w-full h-2 bg-white  relative top-20 border-2 border-black mt-2'></div>
        <div className='w-full h-2 bg-white  relative top-20 border-2 border-black top-36 mt-2'></div>
        <div className='w-full h-2 bg-white  relative top-20 border-2 border-black top-52'></div>
        <div className='w-full h-2 bg-white  relative top-20 border-2 border-black top-72'></div>
         </div>
        <div className=' h-3/4 w-36'>
        <div className='w-full bg-white h-10 flex rounded-lg border-drymeBlue border-2 items-center justify-center' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue '><span>1</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Select Items</span></div>
    </div>
   
    <div className='w-full bg-white h-10 flex rounded-lg border-drymeBlue border-2 items-center justify-center relative top-1/3' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue '><span>3</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Processed</span></div>
    </div>
    
    <div className='w-full bg-white h-10 flex rounded-lg border-drymeBlue border-2 items-center  relative top-2/3 ' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue  ml-2'><span>5</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Review</span></div>
    
    </div>
        </div>
      
      </div>
      <div className='processSecondHalf w-1/2 h-full flex items-center justify-center'>
        <div className='h-3/4 w-3/4 bg-black '>
            {
                (check==true)?
                
                <iframe
               
                src={src}
                title="Youtube Player"
                frameborder="0"
                allowFullScreen
              className="h-full w-full ytvideo"
              allow='autoplay'  />
              
           :
           <div className='w-full h-full bg-black'>
           <img src="https://stockarea.io/blogs/wp-content/uploads/2021/04/photo3-1024x1024.png" className='h-full w-full'>
            
           </img>
           <span className='bg-white border-solid border-2 border-white  ' onClick={playVideo}>
           <i class=" fa-brands fa-youtube fa-lg play relative bottom-48 "></i>
           </span>
           </div>
            } 
     
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Process
