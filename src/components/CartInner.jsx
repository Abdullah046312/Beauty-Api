import React, { useContext, useState } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import images24 from "../assets/images24.png"; // Assuming this is your new image
import { ImCross } from "react-icons/im";

import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement, removeProduct } from '../slice/ProductSlice';
import { ApiData } from './ContextApi';




const CartInner = () => {
  let { info, loading } = useContext(ApiData);
  let cartInfo = useSelector((state) => state.product.cartItem)
  let dispatch = useDispatch()

  let handleIncrement = (i) => {
    dispatch(productIncrement(i))

  }

  let handleDecrement = (i) => {
    dispatch(productDecrement(i))
  }

  let handleProductRemove = (i) => {
    dispatch(removeProduct(i))

  }

  let {totalPrice, totalQuantity} = cartInfo.reduce((acc, item)=>{
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun
  


  
    return acc
    
  },{totalPrice:0, totalQuantity:0})


  
  



  return (
    <section>
      <Container>
        <div className="w-full pb-10">
          <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Cart</h2>
          <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
            <Link to="/">Home</Link>
            <li><IoIosArrowForward /></li>
            <Link to="/shop">Shop</Link>
          </ul>
        </div>

        <div className="flex items-center bg-[#F5F5F3] py-[32px] pl-3 border">
          <div className="w-1/4">
            <h4 className="font-DMs font-bold text-[16px] text-[#262626] ">
              Product
            </h4>
          </div>
          <div className="w-1/4">
            <h4 className="font-DMs font-bold text-[16px] text-[#262626] ">
              Price
            </h4>
          </div>
          <div className="w-1/4">
            <h4 className="font-DMs font-bold text-[16px] text-[#262626] ">
              Quantity
            </h4>
          </div>
          <div className="w-1/4">
            <h4 className="font-DMs font-bold text-[16px] text-[#262626] ">
              Total
            </h4>
          </div>
        </div>

        {cartInfo.length? (
          <>

        {cartInfo.map((item, i) => (


          <div className="my-5">
            <div className="flex items-center  py-[32px] pl-3 border">
              <div className="w-1/4 flex gap-10 items-center">
          <button onClick={()=>handleProductRemove(i)}>
          <ImCross  className='text-[20px] font-bold '/>
          </button>
                <img className='w-[20%]' src={item.thumbnail} alt="" />
                <h4 className="font-DMs font-bold text-[16px] text-[#262626] ">{item.title}</h4>
              </div>
              <div className="w-1/4">
                <h4 className="font-DMs font-bold text-[20px] text-[#262626] ">
                  ${item.price}
                </h4>
              </div>
              <div className="w-1/4">
                <button onClick={() => handleDecrement(i)} className='font-DMs font-bold text-[30px] text-[#262626]  px-5'>
                  -

                </button>
                <span className='font-DMs font-bold text-[30px] text-[#262626]  px-5'>{item.qun}</span>
                <button onClick={() => handleIncrement(i)} className='font-DMs font-bold text-[30px] text-[#262626]  px-5'>
                  +

                </button>
              </div>
              <div className="w-1/4">
                <h4 className="font-DMs font-bold text-[20px] text-[#262626] ">
                  ${(item.price * item.qun).toFixed(2)}
                </h4>
              </div>
            </div>



          </div>
        ))}
         </>
       
      ):(
        <div className="text-center min-h-[100px]">
            <h2 className="font-DMs font-semibold mt-5  text-[30px] text-[#262626]">
            Your Cart is Currently Empty
            </h2>
          </div>
      )},
    

        <div className="flex items-center py-[20px] pl-5 border justify-between">
          <div className="flex items-center">
            <div className="">
              <select className="border p-2 w-[150px] h-[50px] outline-none shadow focus:!rounded-none focus:ring-0 focus:outline-none focus:ring-[#fff] text-[#767676] font-sans font-normal text-[16px] ">
                <option>Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <h4 className="font-sans font-bold text-[#262626] text-[14px] px-4">
              Apply coupon
            </h4>
          </div>
          <div className="font-sans font-bold text-[#262626] text-[14px] px-16">
            <h4>Update cart</h4>
          </div>
        </div>

        <div className="pt-[50px]">
          <h3 className="text-right font-sans font-bold text-[20px] text-[#262626] px-3">
            Cart totals
          </h3>
          <div className="flex justify-end pt-[24px]">
            <table>
              <tr>
                <td className="w-[220px] h-[50px] border px-3 font-sans font-bold text-[16px] text-[#262626]">
                  Subtotal
                </td>
                <td className="w-[220px] h-[50px] border px-3 font-sans font-bold  text-[16px] text-[#767676]">
                $ {totalPrice.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="w-[220px] h-[50px] border px-3 font-sans font-bold text-[16px] text-[#262626]">
                Quantity
                </td>
                <td className="w-[220px] h-[50px] border px-3 font-sans font-bold  text-[16px] text-[#767676]">
                   {totalQuantity}
                </td>
              </tr>
              <tr>
                <td className="w-[220px] h-[50px] border px-3 font-sans font-bold text-[20px] text-[#262626]">
                  Total
                </td>
                <td className="w-[220px] h-[50px] border px-3 font-DMs font-bold text-[20px] text-[#262626]">
                $ {totalPrice.toFixed(2)}
                </td>
              </tr>
            </table>
          </div>
        </div>

        <Link to="/checkout">
        <div className="flex justify-end">
          <button className='py-3 px-16 bg-black border-[2px] border-[#262626] text-white mt-10 text-[18px] font-bold font-DMs hover:bg-white hover:text-black ease-in-out duration-300'>Proceed to Checkout</button>
        </div>
        
        </Link>
       


      </Container>
    </section>
  );
};

export default CartInner;
