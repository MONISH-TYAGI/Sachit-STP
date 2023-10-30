import React, { useContext, useEffect, useReducer, useState } from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';
import { AuthContext } from '../Context/AuthContext';

function Products() {
  const {setObj,BillId,setBillId,totalItems,setItems,totalAmt,setAmt,cart,setCart}=useContext(CartContext);
  const [visibleCat,setVisibleCat]=useState(false);
  const [visibleSer,setVisibleSer]=useState(false);
  const [open1,setOpen1]=useState(false);
  const [open2,setOpen2]=useState(false);
  const [service,setService]=useState("Wash");
  const [val,setVal]=useState(99);
  const [id,setId]=useState(0);
  const [size,setSize]=useState("S");
  let cartVal=false;
  if(localStorage.getItem("cart")!=null){
  cartVal=localStorage.getItem("cart");
  // console.log("cartValA"+cartVal);
  }
  // setCart(false);
  let BigObj=(localStorage.getItem("BigObj")!=null)?[...JSON.parse(localStorage.getItem("BigObj"))]:[];
 
  // let cart=false;
  const [categoryName,setCategoryName]=useState("Male");
  const [currPage,setCurrPage]=useState(1);

  
  const [value1,setValue1]=useState("gray");
  const [value2,setValue2]=useState("white");
  const [value3,setValue3]=useState("white");
  const [value4,setValue4]=useState("white");
  let i=0;
  // const [all,setAll]=useState(true); 
  let maleApi="https://monish-tyagi.github.io/CustomApi/Men/Men.json";
  let femaleApi="https://monish-tyagi.github.io/CustomApi/Female/Female.json";
  let maleIronApi="https://monish-tyagi.github.io/CustomApi/Men/IronMen.json";
  let washandironMenApi="https://monish-tyagi.github.io/CustomApi/Men/Wash&IronMen.json";
  let dryMenApi="https://monish-tyagi.github.io/CustomApi/Men/dryMen.json";
  let femaleIronApi="https://monish-tyagi.github.io/CustomApi/Female/IronFemale.json";
  let washandironFemaleApi="https://monish-tyagi.github.io/CustomApi/Female/Wash&IronFemale.json";
  let dryFemaleApi="https://monish-tyagi.github.io/CustomApi/Female/dryFemale.json";
let electronicApi="https://monish-tyagi.github.io/CustomApi/Electronic/electronic.json";
   const handleSize=(id,size)=>{
setId(id);
setSize(size);
   }

  const handleService=(e)=>{
    // console.log("action"+e);
    if(e=="Wash")
    {
  setValue1("gray");
  setValue2("white");
  setValue3("white");
  setValue4("white");
  setService("Wash");
if(categoryName=="Male")
setCategory(maleApi);
else
setCategory(femaleApi)
    }else if(e=="Iron")
    {
      setValue1("white");
      setValue2("gray");
      setValue3("white");
      setValue4("white");
      setService("Iron")
      if(categoryName=="Male")
setCategory(maleIronApi);
else
setCategory(femaleIronApi)
      
      }else if(e=="Wash&Iron")
    {
      setValue1("white");
      setValue2("white");
      setValue3("gray");
      setValue4("white");
      setService("Wash&Iron")
      if(categoryName=="Male")
setCategory(washandironMenApi);
else
setCategory(washandironFemaleApi)
      }else
    {
      setValue1("white");
      setValue2("white");
      setValue3("white");
      setValue4("gray"); 
      setService("DryCleaning")
      if(categoryName=="Male")
setCategory(dryMenApi);
else
setCategory(dryFemaleApi)
     }
  
   }
  const [category,setCategory]=useState(maleApi);
  // const [pages,setPages]=useState(1);
  const navigate=useNavigate();
  const [products,setProducts]=useState([]);
  const [pagesArr,setPagesArr]=useState([]);
  const [val1,setVal1]=useState("gray");
  const [val2,setVal2]=useState("white");
  const [val3,setVal3]=useState("white");
  const [searchValue,setSearch]=useState("");

  let select=0;
  if(localStorage.getItem("selectedItems")!=null)
  select=localStorage.getItem("selectedItems");
  const [selectedItems,setSelectedItems]=useState(select);
 
  const INITIAL_STATE={
    open1:false,
    open2:false,
    visibleCat:false,
    visibleSer:false
  }
  
  const reducer=(state,action)=>{
   
    console.log(action);
    let a={};
    switch(action.type)
    {
      case "handleVisibleCat":a=  {
       ...state,
        open1:!state.open1,
        visibleCat:!state.visibleCat,
       
      }; 
      break;
      case "handleVisibleSer":a= {
        ...state,
    open2:!state.open2,
    visibleSer:!state.visibleSer
      }
      break;
      default:a={...state}
    }
    console.log("open1"+JSON.stringify(a));
    return a;
  }
  const [state,dispatch]=useReducer(reducer,INITIAL_STATE);
  // const handleVisibleCat=()=>{
  //   // console.log(visibleCat)
  //   setOpen1(!open1)
  //  setVisibleCat(!visibleCat)
  // }
  const handlePrevious=()=>{
if(currPage!=1)
setCurrPage(currPage-1);
  }
  const handleNext=()=>{
  
    if(currPage!=pagesArr.length)
    setCurrPage(currPage+1);
  }
  // const handleVisibleSer=()=>{
  //   setOpen2(!open2)
  //   setVisibleSer(!visibleSer)
  // } 
  const {user}=useContext(AuthContext);

  const handleSearch=()=>{
    // setTimeout(()=>{},1000);
    let curr=document.getElementById("search").value;
    // console.log("curr "+curr)
       setSearch(curr);
      // console.log("searchVal"+curr.length); 
     let  currproducts=JSON.parse(localStorage.getItem("products"));
      //  console.log("search 1 "+products.length);
     let newProd = currproducts.filter((obj)=>{
        return(curr.length==0||obj.Name.toUpperCase().substring(0,curr.length)==curr.toUpperCase());
       });
      //  console.log("search 2"+newProd.length);
       i=0;
       setProducts([...newProd])
       
  }
 const handlePage=(e)=>{
  setCurrPage(e);
 }
 const handleCategory=(e)=>{
  if(e=="male")
  {
 setCategory(maleApi);
 setCategoryName("Male");

 setVal(99);
 setVal1("gray");
 setVal2("white");
 setVal3("white");
 
  }else if(e=="female")
  {
setCategory(femaleApi);
setCategoryName("Female");
setVal2("gray");
setVal1("white");
setVal3("white");
setVal(199);
  }else
  {
    setCategory(electronicApi);
setCategoryName("Electronic");
setVal3("gray");
setVal1("white");
setVal2("white");
setVal(199);
  }
// setVisibleCat(!visibleCat);  
setCurrPage(1); 
setValue1("gray");
  setValue2("white");
  setValue3("white");
  setValue4("white");
// setAll(!all);
 }

 useEffect(()=>{
  if(user==null){
    navigate("/login");
    return;
  }
  fetch(category).then(
    (res)=>{
      let data=res.json()
      // console.log(data);
      return data;
    }
  
  
  ).then((data)=>{
setProducts([...data]);
let val=Math.ceil(data.length/10);
let arr=[1];
for(let i=2;i<=val;i++)
arr.push(i);
setPagesArr([...arr]);
localStorage.setItem("products",JSON.stringify([...data]));
// console.log("CartVal"+cartVal)
// console.log("CartVal"+cart)
setCart(cartVal);


})

// setId(id);
// setSize(size);
},[category]);
  
  const addToBag=(obj)=>{
    if(cart==false)
   setCart(true);
    let val=document.getElementById(obj.ProdId).value;
    // console.log("Prev BigObj"+BigObj.length);
    if(categoryName!="Electronic")
 BigObj.push({
  
    Name:obj.Name,
    Price:obj.Price,
    Image:obj.Image,
    ProdId:obj.ProdId ,
    Quantity:val,
    Category:categoryName,
    Size:size
  
 })
 else
 BigObj.push({
  
  Name:obj.Name,
  Price:obj.Price,
  Image:obj.Image,
  ProdId:obj.ProdId ,
  Quantity:val,
  Category:categoryName,


})

//  console.log("Updated BigObj"+BigObj.length);
 setSelectedItems(BigObj.length);
 localStorage.setItem("BigObj",JSON.stringify(BigObj));
 localStorage.setItem("cart",true);
localStorage.setItem("selectedItems",BigObj.length);
  }
 

const handleCart=()=>{
  // localStorage.setItem("BigObj",JSON.stringify(BigObj));
  navigate("/cart");
}
  return (
    <div className='w-full h-full '>
      <Navbar></Navbar>
      <div className='bg-white w-full h-1/4 flex items-end justify-start fixed z-10 p-3 mt-4'>
     
   <div className="w-11/12  h-12  flex items-center  rounded mx-2 "style={{border:"solid"}}>
 
 <button ><i class="fa-solid fa-magnifying-glass ml-4"></i></button>
   <input type="search"  id="search" className=" w-full h-1/2 p-2 outline-none  " placeholder="Search Here " onChange={handleSearch} value={searchValue} />
   <button className='bg-drymeBlue text-white  rounded-lg px-4 h-3/4'onClick={handleSearch} >Search</button>
   </div>
   <button className='bg-white  text-white w-1/6 h-12 rounded-lg  mx-2 text-3xl ' onClick={handleCart} style={{border:"solid",borderColor:"#194376"}}>
    {
      (BigObj.length==0)?
      
    <i class="fa-solid fa-cart-shopping text-drymeBlue"></i>
    :<i class="fa-solid fa-cart-plus text-drymeBlue " style={{color:"#46C6CE"}}><span className='text-lg'>{BigObj.length}</span></i>
}
     </button> 
   <button className='bg-white text-drymeBlue w-1/6  h-12 rounded-lg mx-2 text-md' onClick={()=>dispatch({type:"handleVisibleCat",payload:open1})} style={{border:"solid",borderColor:"#194376"}}>Category 
  {
    (state.open1==false)?
   <i class="ml-2 fa-sharp fa-solid fa-caret-down "></i>:<i class="ml-2 fa-solid fa-xmark font-bold"></i>
  }
 </button>
   
   {/* <button className='bg-white  text-drymeBlue w-1/6 h-12 rounded-lg  mx-2'onClick={()=>dispatch({type:"handleVisibleSer",payload:open2})} style={{border:"solid",borderColor:"#194376"}}>Select Service 
   {(state.open2==false)?
   <i class="ml-2   fa-sharp fa-solid fa-caret-down"></i>:<i class="ml-2 fa-solid fa-xmark font-bold"></i>
}
   </button>  */}
   
   {/* <div class="dropdown">
{/* <div class="dropdown1 w-56">
  <button class="dropbtn">Category 
  <i class="ml-2 fa-sharp fa-solid fa-caret-down "></i>
  </button>
  <div class="dropdown-content ">
    <a href="https://thepotatoshop.com/shop/mash/highland-burgundy-red-1kg/">Greenhouse Gases</a>
    <a href="https://thepotatoshop.com/shop/mash/arran-victory-1kg/">Carbon Dioxide</a>
    <a href="https://thepotatoshop.com/shop/mash/desiree-1kg/">Methane</a>
    <a href="https://thepotatoshop.com/shop/salad/belle-de-fontenay-1kg/">Water Vapour</a>
    <a href="https://thepotatoshop.com/shop/salad/belle-de-fontenay-1kg/">NF3</a>
  </div> */}
{/* </div> */}
{/* </div>  */}


      </div>
      <div className='bg-white w-full h-max flex flex-wrap ' style={{paddingTop:"12%"}}>
  
      {
  (state.visibleCat==true)?<div className='Box1 bg-drymeBlue  fixed  rounded-b-lg z-10 h-auto'>

<ul>
    <li className='underline text-gray-400 my-1 cursor-pointer' onClick={()=>handleCategory("male")} style={{color:val1}}>Men</li>
    <li className='underline text-gray-400 my-1 cursor-pointer'onClick={()=>handleCategory("female")} style={{color:val2}}>Female</li>
    <li className='underline text-gray-400 my-1 cursor-pointer'onClick={()=>handleCategory("electronic")} style={{color:val3}}>Electronics</li>
    {/* <li className='underline text-gray-400 my-1 text-white'>Others</li> */}
  </ul>
</div>
:

<div className='Box1 bg-white  fixed  rounded-b-lg'style={{visibility:"hidden"}} >

<ul>
    <li className='underline text-gray-400 my-1 '>Men</li>
    <li className='underline text-gray-400 my-1'>Female</li>
    <li className='underline text-gray-400 my-1'>Others</li>
  </ul>
</div>

}
{
  (state.visibleSer==true)?
<div className='Box2  bg-drymeBlue   rounded-b-lg  h-auto'>

<ul>
    <li className='underline text-gray-400 my-1  cursor-pointer' onClick={()=>handleService("Wash")} style={{color:value1}}>Wash</li>
    <li className='underline text-gray-400 my-1 cursor-pointer'onClick={()=>handleService("Iron")} style={{color:value2}}>Iron</li>
    <li className='underline text-gray-400 my-1  cursor-pointer'onClick={()=>handleService("Wash&Iron")} style={{color:value3}}>Wash&Iron</li>
    <li className='underline text-gray-400 my-1  cursor-pointer'onClick={()=>handleService("DryCleaning")} style={{color:value4}}>DryCleaning</li>
  </ul>
</div>
:
<div className='Box2 bg-white    'style={{visibility:"hidden"}} >

<ul>
    <li className='underline text-gray-400 my-1'>Wash</li>
    <li className='underline text-gray-400 my-1'>Iron</li>
    <li className='underline text-gray-400 my-1'>DryCleaning</li>
  </ul>
</div>
}






        

{/* {
  products.map((obj)=>
  {
    return(
<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-64'>
  <img src={obj.Image} className='w-full h-full'></img>
</div>
<div className='bg-white font-bold text-xl'>{obj.Name}</div>
<div className=' w-full bg-white h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 hover:text-black"style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}} >1</span>
<i class="fa-solid fa-circle-minus text-drymeBlue hover:text-black" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full bg-drymeBlue text-white hover:bg-black'>AddToBag</button>
</div>

</div> 
    )
})
}   */}
{
  
  products.map((obj)=>{
    // {console.log(JSON.stringify(products))}
//  {console.log("currPage->"+currPage+" and i-> "+i)}
    return (
      (i<currPage*12&&i++>=(currPage-1)*12)?
<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-64'>
  <img src={obj.Image} className='w-full h-full'></img>
</div>
{
(categoryName=="Male"||categoryName=="Female")?
<div className='flex'>
<div className='bg-white font-bold text-xl w-1/4 flex flex-start pl-2 '>{obj.Name}</div>
<div className='bg-white font-bold text-xl w-2/4 flex flex-start pl-2 space-x-3 items-center justify-center p-1 '>
  {
  (obj.ProdId==id&&size=="S")?
<div className="rounded-full mx-2   w-1/6 border-solid border-2 border-drymeBlue bg-drymeBlue text-white cursor-pointer" onClick={()=>handleSize(0,"")}>S</div>
:<div className="rounded-full mx-2   w-1/6 border-solid border-2 border-drymeBlue cursor-pointer" onClick={()=>handleSize(obj.ProdId,"S")}>S</div>
  }
  {
  (obj.ProdId==id&&size=="M")?
<div className="rounded-full mx-2   w-1/6 border-solid border-2 border-drymeBlue bg-drymeBlue text-white cursor-pointer" onClick={()=>handleSize(0,"")}>M</div>
:<div className="rounded-full mx-2   w-1/6 border-solid border-2 border-drymeBlue cursor-pointer" onClick={()=>handleSize(obj.ProdId,"M")}>M</div>
  }
    {
  (obj.ProdId==id&&size=="L")?
<div className="rounded-full mx-2   w-1/6 border-solid border-2 border-drymeBlue bg-drymeBlue text-white cursor-pointer" onClick={()=>handleSize(0,"")}>L</div>
:<div className="rounded-full mx-2   w-1/6 border-solid border-2 border-drymeBlue cursor-pointer" onClick={()=>handleSize(obj.ProdId,"L")}>L</div>
  }
  



</div>

<div className='bg-white font-bold text-xl w-1/4 flex justify-end pr-2'><span>Rs {obj.Price}</span></div>
</div>  
:<div className="flex">
<div className='bg-white font-bold text-xl w-2/4 flex flex-start pl-2 '>{obj.Name}</div>
<div className='bg-white font-bold text-xl w-2/4 flex justify-end pr-2'><span>Rs {obj.Price}</span></div>
  </div>
  }

<div className='bg-drymeBlue h-10 flex '>{
(obj.ProdId!=100)?
  <input type="number" id={obj.ProdId} className='h-full w-1/2 p-2 text-2xl border-2 border-drymeBlue ' defaultValue={1} ></input>:
  <input type="number" id={obj.ProdId} className='h-full w-1/2 p-2 text-2xl' defaultValue={1} autoFocus></input>
}
  <button className='w-1/2 h-full bg-drymeBlue text-white hover:bg-black' onClick={(e)=>addToBag(obj)}>AddToBag</button> 
</div>

</div>   
:<></>
    )
  })
}


{/* <div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-64'>
  <img src="https://images.bestsellerclothing.in/data/selected/oct-07-2021/203923802_5.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto" className='w-full h-full'></img>
</div>
<div className='flex'>
<div className='bg-white font-bold text-xl w-1/2 flex flex-start pl-2'>Name</div>
<div className='bg-white font-bold text-xl w-1/2 flex justify-end pr-2'><span>Price</span></div>
</div>

<div className='bg-drymeBlue h-10 flex'>

  <input type="number" className='h-full w-1/2 p-2 text-2xl' defaultValue={1} autoFocus></input>
  <button className='w-1/2 h-full bg-drymeBlue text-white hover:bg-black'>AddToBag</button> 
</div>

</div>    */}


       </div>
       <div className='p-4 bg-white'>
       <nav aria-label="Page navigation example ">
  <ul class="inline-flex -space-x-px ">
    <li>
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handlePrevious}>Previous</a>
    </li>
    { 
  pagesArr.map((obj)=>{
    return (
   (obj==currPage)? 
    <li>
      <a href="#" class="px-3 py-2 bg-drymeBlue text-white leading-tight text-gray-500  border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 "onClick={()=>handlePage(obj)}>{obj}</a>
    </li>
    :
    <li>
    <a href="#" class="px-3 py-2  text-drymeBlue  leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=>handlePage(obj)}>{obj}</a>
  </li>
    )
    })
  } 
    

    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleNext}>Next</a>
    </li>
  </ul>
</nav>
</div>

      </div>

   

  )
}

export default Products
{/* <div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-72'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU" className='w-full h-full'></img>
</div>
<div className='bg-green-400 w-full h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 "style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}}>4</span>
<i class="fa-solid fa-circle-minus text-drymeBlue" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full text-white'>AddToBag</button>
</div>

</div>    */}



// {
//   (visibleCat==false)?<div className='Box1 bg-red-400  relative  rounded-b-lg z-40' >

// <ul>
//     <li className='underline text-gray-400 my-1'>Men</li>
//     <li className='underline text-gray-400 my-1'>Female</li>
//     <li className='underline text-gray-400 my-1'>Others</li>
//   </ul>
// </div>
// :

// <div className='Box1 bg-white  relative  rounded-b-lg'style={{visibility:"hidden"}} >

// <ul>
//     <li className='underline text-gray-400 my-1'>Men</li>
//     <li className='underline text-gray-400 my-1'>Female</li>
//     <li className='underline text-gray-400 my-1'>Others</li>
//   </ul>
// </div>

// }
// {
//   (visibleSer==true)?
// <div className='Box2 bg-white  relative  rounded-b-lg'>

// <ul>
//     <li className='underline text-gray-400 my-1'>Wash</li>
//     <li className='underline text-gray-400 my-1'>Iron</li>
//     <li className='underline text-gray-400 my-1'>DryCleaning</li>
//   </ul>
// </div>
// :
// <div className='Box2 bg-white  relative  'style={{visibility:"hidden"}} >

// <ul>
//     <li className='underline text-gray-400 my-1'>Wash</li>
//     <li className='underline text-gray-400 my-1'>Iron</li>
//     <li className='underline text-gray-400 my-1'>DryCleaning</li>
//   </ul>
// </div>
// }