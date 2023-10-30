import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function Reviews() {
  
  return (
    <div className='w-full h-full'>
      <div className='bg-white h-20 flex items-center justify-center '>
       <span className='text-drymeBlue text-xl font-bold 	underline underline-offset-4 text-drymeBlue'> Reviews & Rating</span>
        </div>
        <div className=' bg-white w-full h-full  flex space-x-12 justify-center px-16'>
        <div className="h-3/4 w-2/4 border border-drymeBlue rounded-lg">
            <div className='One h-2/5  flex items-center justify-center'>
                <img className='Pic rounded-full  h-3/4 w-1/4 alt' src="https://smart-dhopa-online-laundry-app.web.app/static/media/customer-1.f217f346.jpg" >
                   
                </img>
            </div>
            <div className='Two h-1/5 '>
                <h1 className='text-drymeBlue'>Alberto Jester</h1>
                <h1>(Lecturer)</h1>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                

            </div>
            <div className='Three h-2/5  flex items-center justify-center '>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque odio nulla est, sit hic minima in corporis.</p>
            </div>
        </div>
        <div className="h-3/4 w-2/4 border border-drymeBlue rounded-lg">
            <div className='One h-2/5  flex items-center justify-center'>
                <img className='Pic rounded-full  h-3/4 w-1/4' src="https://smart-dhopa-online-laundry-app.web.app/static/media/customer-2.723b855f.jpg">
                   
                </img>
            </div>
            <div className='Two h-1/5 '>
                <h1 className='text-drymeBlue'>Silva de Maria</h1>
                <h1>(HR)</h1>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                

            </div>
            <div className='Three h-2/5  flex items-center justify-center '>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque odio nulla est, sit hic minima in corporis.</p>
            </div>
        </div>    <div className="h-3/4 w-2/4 border border-drymeBlue rounded-lg">
            <div className='One h-2/5  flex items-center justify-center'>
                <img className='Pic rounded-full  h-3/4 w-1/4' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                   
                </img>
            </div>
            <div className='Two h-1/5 '>
                <h1 className='text-drymeBlue'>Milton Chapman</h1>
                <h1>(Student)</h1>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                <i class="fa-solid fa-star text-drymeBlue"></i>
                

            </div>
            <div className='Three h-2/5  flex items-center justify-center '>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque odio nulla est, sit hic minima in corporis.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Reviews
