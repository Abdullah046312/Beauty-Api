import React, { useState } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import images24 from "../assets/images24.png"; // Assuming this is your new image
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement } from '../slice/ProductSlice';



const CartInner = () => {
  let cartInfo = useSelector((state)=>state.product.cartItem)
  let dispatch = useDispatch()

  let handleIncrement = (i) =>{
    dispatch(productIncrement(i))

  }
  
  let handleDecrement = (i) =>{
    dispatch(productDecrement(i))
  }
  
  // // Sample cart data for demonstration
  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: 1,
  //     name: "Apple Watch",
  //     image: images24, // Replaced with images24.png
  //     price: 599,
  //     quantity: 1
  //   },
  //   {
  //     id: 2,
  //     name: "iMac 27\"",
  //     image: images24, // Replaced with images24.png
  //     price: 2499,
  //     quantity: 1
  //   },
  //   {
  //     id: 3,
  //     name: "iPhone 12",
  //     image: images24, // Replaced with images24.png
  //     price: 999,
  //     quantity: 1
  //   }
  // ]);

  // // Increase quantity handler
  // const handleIncreaseQuantity = (id) => {
  //   setCartItems(prevItems =>
  //     prevItems.map(item =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };

  // // Decrease quantity handler
  // const handleDecreaseQuantity = (id) => {
  //   setCartItems(prevItems =>
  //     prevItems.map(item =>
  //       item.id === id && item.quantity > 1
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // };

  // // Remove item handler
  // const handleRemoveItem = (id) => {
  //   setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  // };

  return (
    <section>
      <Container>
        {/* <div className="w-full pb-10">
          <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Cart</h2>
          <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
            <Link to="/">Home</Link>
            <li><IoIosArrowForward /></li>
            <Link to="/shop">Shop</Link>
          </ul>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">Product</th>
                <th scope="col" className="px-6 py-3">Qty</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img src={item.image} className="w-16 md:w-[20%] max-w-full max-h-full" alt={item.name} />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{item.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        <span className="sr-only">Decrease Quantity</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          value={item.quantity}
                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          readOnly
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        <span className="sr-only">Increase Quantity</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">${item.price}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        {/* Cart page */}
        {/* <div className="border-2 mt-5 pb-5">

        <div className="flex justify-center w-full bg-[#F5F5F3] py-5 mt-16 ">
            <div className="w-[23%]">
                <h2  className='text-[16px] font-DMs font-bold text-[#262626]'>Product</h2>
               <div className="flex items-center gap-5">
               <RxCross2 className='font-bold text-[20px]' />
               <img src={images24} alt="" />
               <h4 className='text-[16px] font-DMs font-bold text-[#262626]'>Product name</h4>
               </div>
                
            </div>
            <div className="w-[23%]">
            <h2 className='text-[16px] font-DMs font-bold text-[#262626]'>Price</h2>
            <h4 className='text-[20px] font-DMs font-bold text-[#262626] mt-8'>$44.00</h4>
            </div>
            <div className="w-[23%]">
            <h2 className='text-[16px] font-DMs font-bold text-[#262626]'>Quantity</h2>
            <button className='text-[20px] font-DMs font-bold text-[#262626] mt-8 border-2 py-1 px-5'> - 1 + </button>
            </div>
            <div className="w-[23%]">
            <h2 className='text-[16px] font-DMs font-bold text-[#262626]'>Total</h2>
            <h4 className='text-[20px] font-DMs font-bold text-[#262626] mt-8'>$44.00</h4>
            </div>
        </div>
        <div className="border-2 p-5 py-5 mt-10 flex items-center">
        <div className='w-[20%] flex justify-between items-center'>
  <div className="border-2 p-2 flex items-center space-x-2">
    <label className='pr-6 text-[18px] font-DMs font-bold text-[#262626]' htmlFor="">SIZE:</label>
    <select className="focus:outline-none focus:border-none">
      {['S', 'M', 'XL', '2XL', '4XL'].map((option, index) => (
        <option key={index} value={option.toLowerCase()}>{option}</option>
      ))}
    </select>
  </div>
  <h4 className='text-[14px] font-DMs font-bold text-[#262626]'>Apply coupon</h4>
</div>

<div className="w-[75%] flex justify-end">
    <div className="">
        <h2 className='text-[14px] font-DMs font-bold text-[#262626]'>Update cart</h2>
    </div>
</div>




        </div>
       <div className="p-10">
        <div className="w-1/2 mt-10">
        <h2 className='text-[20px] font-DMs font-bold text-[#262626] pb-5'>Cart totals</h2>
        </div>
        <div className="flex gap-10 border-2 w-[30%] py-4 p-5">
            <h4 className='text-[16px] font-DMs font-bold text-[#262626]'>Subtotal</h4>
            <h3 className='text-[16px] font-DMs font-bold text-[#767676]'>389.99 $</h3>
        </div>
        <div className="flex gap-10 border-2 w-[30%]  py-4 p-6">
            <h4 className='text-[16px] font-DMs font-bold text-[#262626]'>Total</h4>
            <h3 className='text-[16px] font-DMs font-bold text-[#262626] pl-5'>389.99 $</h3>
        </div>

       </div>
        </div>
        <div className="">
                        <button className='py-3 px-16 bg-black border-[2px] border-[#262626] text-white mt-10 text-[18px] font-bold font-DMs hover:bg-white hover:text-black ease-in-out duration-300'>Proceed to Checkout</button>
                    </div>
      */}
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
        {cartInfo.map((item, i)=>(


<div className="my-5">
<div className="flex items-center  py-[32px] pl-3 border">
  <div className="w-1/4 flex gap-10 items-center">
   <RxCross2/>
   <img className='w-[20%]' src={item.thumbnail} alt="" />
   <h4 className="font-DMs font-bold text-[16px] text-[#262626] ">{item.title}</h4>
  </div>
  <div className="w-1/4">
    <h4 className="font-DMs font-bold text-[20px] text-[#262626] ">
    ${item.price}
    </h4>
  </div>
  <div className="w-1/4">
    <button onClick={()=>handleDecrement(i)}  className='font-DMs font-bold text-[30px] text-[#262626]  px-5'>
      -
      
    </button>
    <span className='font-DMs font-bold text-[30px] text-[#262626]  px-5'>{item.qun}</span>
    <button onClick={()=>handleIncrement(i)} className='font-DMs font-bold text-[30px] text-[#262626]  px-5'>
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
        <td className="w-[220px] h-[50px] border px-3 font-sans font-normal text-[16px] text-[#767676]">
        389.99 $
        </td>
      </tr>
      <tr>
        <td className="w-[220px] h-[50px] border px-3 font-sans font-bold text-[16px] text-[#262626]">
          Total
        </td>
        <td className="w-[220px] h-[50px] border px-3 font-DMs font-bold text-[16px] text-[#262626]">
        389.99 $
        </td>
      </tr>
    </table>
  </div>
</div>
<div className="flex justify-end">
                <button className='py-3 px-16 bg-black border-[2px] border-[#262626] text-white mt-10 text-[18px] font-bold font-DMs hover:bg-white hover:text-black ease-in-out duration-300'>Proceed to Checkout</button>
            </div>

      
      </Container>
    </section>
  );
};

export default CartInner;
