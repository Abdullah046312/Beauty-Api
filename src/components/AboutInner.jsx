import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import Container from './Container';
import images22 from "../assets/images22.png"
import images23 from "../assets/images23.png"

const AboutInner = () => {
  return (
    <section>
        <Container>
    <div className="">
        <div className="w-full">
        <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>About</h2>
                            <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
                                <Link to="/">Home</Link>
                                <li><IoIosArrowForward /></li>
                                <Link to="/shop">Shop</Link>
                            </ul>
        </div>
        <div className="flex gap-5 py-10 justify-center">
            <div className="w-[48%]">
            <img className='w-full' src={images22} alt="" />
            </div>
            <div className="w-[48%]">
            <img className='w-full' src={images23} alt="" />
            </div>
           
        </div>

        <div className="">
            <div className="text-[39px] text-[#262626] font-DMs font-medium ">
                <p>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
            </div>
        </div>

        <div className="py-10 flex justify-between">
            <div className="w-[32%]">
                <h4 className='text-[25px] text-[#262626] font-DMs font-bold'>Our Vision</h4>
              <p className='text-[16px] text-[#767676] font-DMs font-normal'>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            <div className="w-[32%]">
                <h4 className='text-[25px] text-[#262626] font-DMs font-bold'>Our Story</h4>
               <p className='text-[16px] text-[#767676] font-DMs font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
            <div className="w-[32%]">
                <h4 className='text-[25px] text-[#262626] font-DMs font-bold'>Our Brands</h4>
                <p className='text-[16px] text-[#767676] font-DMs font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
        </div>
    </div>

        </Container>
    </section>
    
  )
}

export default AboutInner
