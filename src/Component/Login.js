import React, { useState ,useContext, useEffect} from 'react'
import {db,storage,auth} from '../firebase'
import { Link ,useNavigate} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';


function Login() {
  const navigate=useNavigate();
  useEffect(()=>{
    let button=document.getElementById("next");
    setTimeout(function() {button.click()}, 1500);
    },[])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
// const navigate=useNavigate();
// const {login}=useContext(AuthContext);
const {user,setUserEmail,userEmailId,login,googleSignIn}=useContext(AuthContext);
  const doLogin = async(e) => {
      e.preventDefault();
      document.getElementById("login").classList.add("bg-black");
      // console.log("Log In");
      
      try{
      let userObj = await login(email,password)
      setUserEmail(email);
      // console.log("email->"+email);
      localStorage.setItem("email", email);
      setEmail('')
    setPassword('')
    // console.log("outerEmail"+userEmailId)
    // alert("successful Login")
    navigate("/");
      }catch(err)
      {
        // console.log("fail");
        document.getElementById("login").classList.remove("bg-black");
        setError("Wrong EmailId Or Password");
        setTimeout(()=>{
setError('')
        },3000)
        // alert("Fail Login")
      }finally{
    // console.log("done");
    
      }
  }
  const handelSignUp=async()=>{
 
    let response=await  googleSignIn();
    if(response==true){    
  
navigate("/");
    }else{
      // alert("google Auth  Fail");
    }

  }
  const goToSignUp=()=>{
    navigate("/signUp")
      }
  return (
    <div className='w-full h-screen  flex bg-white'>
      <div className='FirstHalf w-3/5 h-full  p-16'>
        <div className='CustomCaraousel  w-full h-full'>
        <div id="carouselExampleCaptions" className="carousel slide relative h-full" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 h-full flex items-end">
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
        style={{height:"36.8rem"}} />
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
        style={{height:"36.8rem"}}
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
        style={{height:"36.8rem"}}
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
      <div className='SecondHalf w-2/5 h-full  p-20'>
      <div className='CustomCaraousel  w-full h-5/6 mt-4'>
        <div className='w-full h-1/6 bg-white flex items-center justify-center'>
            <span className='font-bold text-5xl text-drymeBlue'>ECOM<span className='text-select'>.com</span></span>
            </div>
        <div className='w-full h-2/6 '>
            <div className='Email h-1/2 flex flex-column items-start px-2 '>
                <span className=''>Email</span>
                <input type='email ' className='w-full h-1/2 rounded-md  p-2 outline outline-1'
                onChange={(e) => setEmail(e.target.value)} value={email} 
                ></input>
            </div>
            <div className='Password h-1/2 flex flex-column items-start px-2'>
                <span>Password</span>
                <input type='password' className='w-full h-1/2 rounded-md outline outline-1 p-2'
                  onChange={(e) => setPassword(e.target.value)} value={password}
                  ></input>
            </div>
        </div>
        {error && <span className='error-msg text-red-400'>{error}</span>}
        <div className='w-full h-1/6  flex flex-column items-center px-2 '>
            <button  className='bg-drymeBlue w-full text-white h-2/4 mt-2 rounded-md' id="login" onClick={doLogin}>Login</button>
            <span>Not Registered Yet? SignUp <span className='text-drymeBlue underline cursor-pointer' onClick={goToSignUp}> Here</span></span>
        </div>
        <div className='w-full h-2/6 '>
            <div className='w-full h-2/4  flex items-center justify-center text-3xl'>
                <span>OR</span>
                </div>
                <div className='h-2/4 flex  justify-center '>
                <div class="social-icon flex  rounded-xl h-2/4 items-center border border-2 border-drymeBlue cursor-pointer" onClick={handelSignUp}>
                    <img src="https://cdn-teams-slug.flaticon.com/google.jpg"  className="rounded-xl h-full w-fit"width="25px"/>
                        <span class="mx-2 ">Login In with Google</span>
                        </div>
                   
                        </div>
        </div>
       
      </div>
      </div>

    </div>
  )
}

export default Login
