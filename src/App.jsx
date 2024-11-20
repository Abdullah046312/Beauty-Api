import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductsDetails from "./pages/ProductsDetails";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import MyAccount from "./pages/MyAccount";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element= {<Home />}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/shop/:id" element={<ProductsDetails/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contacts" element={<Contacts/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/myaccount" element={<MyAccount/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="*" element={<Error/>}></Route>
    
   

  </Route>
))

function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
