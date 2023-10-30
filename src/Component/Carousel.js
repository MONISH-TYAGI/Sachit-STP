import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import HowItWorks from './HowItWorks'

function Carousel() {
  useEffect(()=>{
  let button=document.getElementById("next");
  setTimeout(function() {button.click()}, 1500);
  },[])
  const navigate=useNavigate();
  const handleServices=()=>{
navigate("/services");
  }
  return (
    <div className='z-30 h-full bg-white' style={{paddingTop:"8.5%"}}>
   
    <div className='h-3/4  flex '>
        <div className='FirstHalf w-1/2 h-full  flex items-center justify-center'>
            <div className='OuterBox  h-3/4 w-3/4 '>
                <div className='h-28 w-full  flex items-end justify-center  text-2xl font-bold'>
                    <h1>Best & Cheap Products in your doorstep</h1>
                </div>
                <div className='h-52 w-full  flex items-center justify-center p-10'>
                    <p>
                    ECOM.com is the  Online Web Platform in Delhi with the latest market Clothes Products online . Our services combine our expertise and experience acquired over a period of time to provide you with cheap product in the shortest possible turnaround time.


                    </p>
                </div>
                <div className='h-20 w-full  flex items-center justify-center'>
                    <button className='bg-drymeBlue text-white p-2 rounded-md' onClick={handleServices}>View Products</button>
                </div>
                
            </div>
        </div>
        <div className='SecondHalf w-1/2 h-full '>
        <div id="carouselExampleCaptions" className="carousel slide relative h-full" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-end p-0 mb-4 h-full ">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden  h-full">
    <div class="carousel-item active relative float-left w-full  h-full">
      <img
        src="https://miro.medium.com/max/1400/1*SwFB1o_k1LGprN-XRUZQ8w.jpeg"
        class="block w-full h-full"
        alt="..."
        style={{height:"27.8rem"}} />
      <div class="carousel-caption hidden md:block absolute text-center  ">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full ">
      <img
        src="https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Shopping-3.jpg"
        class="block w-full h-full"
        alt="..."
        style={{height:"27.8rem"}}
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full h-full">
      <img
        src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png"
        class="block w-full h-full"
        alt="..."
        style={{height:"27.8rem"}}
         />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
    
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
    id="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
            </div>
            <div className='h-1/4 bg-gray-400'>
                <HowItWorks></HowItWorks>
            </div>
    </div>
  )
}

export default Carousel
