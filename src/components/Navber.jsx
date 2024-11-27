import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { HiMiniBars2 } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Flex from "./Flex";
import rolex from "../assets/rolex.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../slice/ProductSlice";


const Navber = () => {
  let data = useSelector((state)=> state.product.cartItem)
  let dispatch = useDispatch()
  
  let navigate = useNavigate();
  const cateRef = useRef();
  const accRef = useRef();
  const cartRef = useRef();
  let showcartRef = useRef()
  const [isCateNav, setIsCateNav] = useState(false);
  const [isAcc, setIsAcc] = useState(false);
  const [isCart, setIsCart] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cateRef.current && !cateRef.current.contains(e.target)) {
        setIsCateNav(false);
      }

      if (showcartRef.current.Container(e.target)){
        setIsCart(true)
      }
      if (accRef.current && !accRef.current.contains(e.target)) {
        setIsAcc(false);
      }

      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsCart(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCheck = () => {
    toast("Welcome to Checkout Page!");
    setTimeout(() => {
      navigate("/Checkout");
      setIsCart(false)
    }, 2000);
  };
 let handlecart = () =>{
  toast("Welcome to Checkout Page!");
  setTimeout(() =>{
    navigate("/Cart")
    setIsCart(false)
  }, 2000)
 };
  return (
    <section className="bg-[#F5F5F3] py-5">
      <Container>
        <Flex className="items-center flex-wrap md:flex-nowrap">
          {/* Shop by Category */}
          <div className="w-full md:w-1/4 relative mb-4 md:mb-0" ref={cateRef}>
            <div className="flex items-center gap-x-2 cursor-pointer" onClick={() => setIsCateNav(!isCateNav)}>
              <HiMiniBars2 className="text-[20px]" />
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px]">Shop by Category</h3>
            </div>
            {isCateNav && (
              <div className="bg-[#262626] w-1/2 md:w-[200px] absolute left-0 top-full mt-2 z-10">
                <ul className="py-3">
                  {["Accessories", "Furniture", "Electronics", "Clothes", "Bags", "Home appliances"].map((item, index) => (
                    <li key={index} className={`font-sans text-[16px] text-white font-normal pl-3 pt-3 pb-2 ${index !== 5 ? 'border-b-[1px] border-blue-600' : ''} hover:pl-6 duration-300 ease-in-out`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="relative">
              <input
                type="search"
                className="py-3 pl-2 w-full md:w-[780px] md:h-[50px] rounded-[6px] outline-none text-[12px] sm:text-[14px] md:text-[14px font-DMs] text-[#C4C4C4]"
                placeholder="Search Products"
              />
              <ImSearch className="absolute top-[50%] right-4 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Account and Cart */}
          <div className="w-full md:w-1/4">
            <div className="flex justify-center gap-x-4 sm:gap-x-6 relative">
              {/* Account Dropdown */}
              <div ref={accRef} className="flex items-center cursor-pointer" onClick={() => setIsAcc(!isAcc)}>
                <FaUser />
                <IoMdArrowDropdown className="text-[20px]" />
              </div>
              {isAcc && (
                <div className="bg-[#262626] w-[100px] md:w-[150px] absolute md:left-[80px] top-full mt-2 z-10">
                  <ul className="py-3">
                    <li className="font-sans text-[16px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-blue-600 hover:pl-6 duration-300 ease-in-out cursor-pointer">
                      <Link to="/SignUp">SignUp</Link>
                    </li>
                    <li className="font-sans text-[16px] text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out cursor-pointer">
                      <Link to="/MyAccount">Account</Link>
                    </li>
                  </ul>
                </div>
              )}

              {/* Cart Dropdown */}
              <div ref={cartRef} className="relative cursor-pointer" onClick={() => setIsCart(!isCart)}>
                {data.length > 0 &&
                <div className="absolute left-[7px] top-[-15px] h-[20px] w-[20px] bg-[#F6C90E] rounded-full text-white font-bold text-center leading-[15px] ">
                  {data.length}
                </div>
                  }
                <IoCart className="text-[30px]" />
              </div>
              <div className="" ref={showcartRef}>
              {isCart && (
                <div className="absolute right-0 top-full mt-2 w-full md:w-[360px] bg-[rgba(233,230,230,0.9)] z-10">
                  {data.map((item, i)=>(
                  <div className="">
                  <div className="flex items-center bg-white py-4 px-5">
                    <img className="w-[80px] md:w-[150px]" src={item.thumbnail} alt="Luxury Watch" />
                    <div className="flex-grow ml-3">
                      <h3 className="font-DM font-bold text-[14px]">{item.title}</h3>
                      <h3 className="font-DM font-bold text-[14px]">${item.price}</h3>
                    </div>
                    <div onClick={()=>dispatch(removeProduct(i))} className="ms-auto text-[20px] cursor-pointer">
                      <RxCross2 />
                    </div>
                  </div>
               

                  </div>

                  ))}
                     <div className="bg-white py-4 px-5">
                   
                   <div className="flex flex-wrap md:flex-nowrap my-5">
                     <button onClick={handlecart} className="px-[20px] md:px-[30px] py-[12px] md:py-[10px] text-[10px] md:text-[16px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                       View Cart
                     </button>
                     <button onClick={handleCheck} className="px-[20px] md:px-[30px] py-[12px] md:py-[10px] text-[10px] md:text-[16px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                       Check Out
                     </button>
                   </div>
                 </div>
                </div>
              )}

              </div>
            </div>
          </div>
        </Flex>
      </Container>

      {/* ToastContainer should be here for global notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </section>
  );
};

export default Navber;
