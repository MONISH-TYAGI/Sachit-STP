import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
// import 'tw-elements'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Component/Products';
import Cart from './Component/Cart';
import Bag from './Component/Bag';
import EnterDetails from './Component/EnterDetails';
import Review from './Component/Reviews';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import { CartContextProvider } from './Context/CartContextProvider';
import ViewDetails from './Component/ViewOrders';
import { AuthProvider } from './Context/AuthContext';

function App() {
  
  return (
    <div className="App" id="App" style={{zoom:"90%"}}>
 <BrowserRouter>
 <AuthProvider>
 <CartContextProvider>
 <Routes>
  <Route path="/Services" element={<Products></Products>}></Route>
  <Route path="/Cart" element={<Cart></Cart>}></Route>
  <Route path="/EnterDetails" element={<EnterDetails></EnterDetails>}></Route>
  <Route path="/Bag" element={<Bag></Bag>}></Route>
  <Route path="/Reviews" element={<Review></Review>}></Route>
  <Route path="/Login" element={<Login></Login>}></Route>
  <Route path="/signUp" element={<SignUp></SignUp>}></Route>
  <Route path="/Bill" element={<ViewDetails/>}/>
  <Route path="*" element={<Home></Home>}></Route>
 </Routes>
 </CartContextProvider>
 </AuthProvider>
 </BrowserRouter>
    </div>
  );
}

export default App;
