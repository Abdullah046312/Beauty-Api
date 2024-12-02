import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from '../components/Container'
import { IoIosArrowForward } from "react-icons/io";
import Flex from '../components/Flex';
import images18 from "../assets/images18.png"
import images19 from "../assets/images19.png"
import images20 from "../assets/images20.png"
import images21 from "../assets/images21.png"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaPlus, FaMinus, } from "react-icons/fa";
import line from "../assets/line.png"
import { Rate } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/ProductSlice';



const ProductsDetails = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let productId = useParams()
  let [show, setShow] = useState(false);
  let [singleProduct, setSingleProduct] = useState({});



  let getSingleProduct = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((Response) => {
      setSingleProduct(Response.data);
      


    });
  };


  useEffect(() => {
    getSingleProduct();

  }, [productId]);

  let clientRating = Array.from({length:5}, (_, index)=>{
    let number = index + 0.5
    return singleProduct.rating > index + 1 ? <FaStar className='text-[#FFD881] text-[20px]' /> : singleProduct.rating > number ?   <FaStarHalfAlt className='text-[#FFD881] text-[20px]' /> : <FaRegStar className='text-[#FFD881] text-[20px]' />

  })

 let discount = singleProduct.price * singleProduct.discountPercentage / 100
 let newPrice = singleProduct.price - discount

 let handleCart = (item) =>{
  
  dispatch(addToCart({...item, qun: 1}))
  
  toast("Welcome to Cart Page!");
  setTimeout(()=>{
    navigate("/cart")

  }, 2000)
  
 }
 
  



  return (
    <>
      <section>
        <Container>
          <div ><h2 className='text-[#6D6D60] font-bold text-[12px] font-DMs py-4n flex items-center cursor-pointer pt-5'> <Link to="/">Home</Link> <IoIosArrowForward /> <Link to="/shop">Products</Link></h2></div>

       <div className="w-[50%] border-[1px] border-[#dddd] bg-[#f8f9fa] rounded-[8px] shadow-inner mt-5">
        <img className='w-[80%]' src={singleProduct.thumbnail} alt="" />
       </div>


          <div className="">
            <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Product</h2>
          </div>
          <div className="flex gap-3 items-center">
            
           {clientRating} 
           
           
            <div className="">
              <h3 className='text-[14px] font-DMs font-normal text-[#767676] '>1 Review</h3>
            </div>



          </div>
          <div className="mt-5">
            
            <del className='text-[20px] font-DMs font-normal text-[#767676]'> ${singleProduct.price}</del>
            <p className='text-[30px] font-DMs font-bold text-[#262626]'>${newPrice.toFixed(2)}</p>
           
            {/* <h4 className='text-[20px] font-DMs font-bold text-[#262626] '>$44.00</h4> */}
          </div>

          <div className="flex items-center gap-3 mt-5 pb-2">
            <h2 className='text-[18px] font-DMs font-bold text-[#262626] '>COLOR:</h2>
            <h3 className='h-[20px] w-[20px] rounded-full bg-[rgba(0,0,0,0.19)] hover:scale-0 	hover:transform: scale(.5); duration-300 ease-in-out'></h3>
            <h3 className='h-[20px] w-[20px] rounded-full bg-[#FF8686]'></h3>
            <h3 className='h-[20px] w-[20px] rounded-full bg-[#7ED321]'></h3>
            <h3 className='h-[20px] w-[20px] rounded-full bg-[#B6B6B6]'></h3>
            <h3 className='h-[20px] w-[20px] rounded-full bg-[#15CBA5]'></h3>
          </div>

          <div className="pb-2">
            <div>
              <label className='pr-6 text-[18px] font-DMs font-bold text-[#262626] flex gap-3 items-center' htmlFor="">STATUS: <h2 className='text-[30px]'>{singleProduct.stock}</h2> </label >
             
            </div>
          </div>

          <div className="">
            <div>
              <label className='pr-6 text-[18px] font-DMs font-bold text-[#262626]' htmlFor="">SIZE:</label>
              <select className="w-[120px] h-[30px] border-[1px] border-[rgba(118,118,118,0.49)] text-[16px] text-[#767676] font-DMs font-normal">
                {['S', 'M', 'XL', '2XL', '4XL'].map((option, index) => (
                  <option key={index} value={option.toLowerCase()}>{option}</option>
                ))}
              </select>
            </div>
          </div>

         

          <div className="">
            <div className="flex flex-wrap md:flex-nowrap my-5">
              <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[16px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
              Add to Wish List
              </button>
              <button onClick={()=>handleCart(singleProduct)} className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[16px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
              Add to Cart
              </button>
            </div>
          </div>

          <div className="">
            <div className="mt-[40px]">
              <div className="flex justify-start gap-[20px] items-center cursor-pointer" onClick={() => setShow(!show)}>
                <h2 className='text-[#262626] font-bold font-DMs text-[18px]'>FEATURES & DETAILS</h2>
                {show ? <FaMinus /> : <FaPlus />}
              </div>
              {show && (
                <ul className="mt-3">
                  <li className='text-[16px] font-DMs font-normal text-[#767676] mt-3'>
                    {singleProduct.description}
                  </li>
                </ul>
              )}
            </div>

          </div>

          <div className="flex gap-10 mt-10">
            <h2 className='text-[20px] text-[#767676] font-DMs font-normal'>Description</h2>
            <h3 className='text-[20px] text-[#262626] font-DMs font-bold'>Reviews (1)</h3>
          </div>

          <div className="">
            <p className='text-[14px] text-[#767676] font-DMs font-normal mt-8'>1 review for Product</p>
            <img className='mt-5' src={line} alt="" />
          </div>

          <div className="flex mt-5 gap-3">
            <h4 className='text-[16px] text-[#262626] font-DMs font-normal'>John Ford</h4>
           {singleProduct &&
           <Rate disabled value={singleProduct.rating} />
           }
          </div>
          <div className="">
            <p className='text-[16px] text-[#767676] font-DMs font-normal border-b py-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

          </div>

          <div className="mt-5">
            <h2 className='text-[20px] text-[#262626] font-DMs font-bold'>Add a Review</h2>
          </div>

          <div className="mt-10">
            <div className="">
              <h2 className='text-[18px] text-[#262626] font-DMs font-bold pb-3'>Name:</h2>
              <input className='h-[50px] w-[300px] border-[2px] border-black text-[16px] p-5' type="text" placeholder='Your name here' />
            </div>
            <div className="mt-5">
              <h2 className='text-[18px] text-[#262626] font-DMs font-bold pb-3'>Email:</h2>
              <input className='h-[50px] w-[300px] border-[2px] border-black text-[16px] p-5' type="text" placeholder='Your email here' />
            </div>
            <div className="mt-5">
              <h2 className='text-[18px] text-[#262626] font-DMs font-bold pb-3'>Review:</h2>
              <input className='h-[50px] w-[300px] border-[2px] border-black text-[16px] p-5' type="text" placeholder='Your review here' />
            </div>

          </div>


          <div className="mt-10">
            <button className="px-[20px] md:px-[80px] py-[12px] md:py-[10px] text-[10px] md:text-[20px] font-DMs font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
              Post
            </button>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"

          />

<ToastContainer />


        </Container>
      </section>

    </>
  )
}

export default ProductsDetails
