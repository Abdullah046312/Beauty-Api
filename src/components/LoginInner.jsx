import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const LoginInner = () => {
    return (
        <section>
            <Container>
                <div className="w-full">
                    <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Login</h2>
                    <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
                        <Link to="/">Home</Link>
                        <li><IoIosArrowForward /></li>
                        <Link to="/shop">Shop</Link>
                    </ul>
                </div>
                <div className="w-full py-10 border-b">
                    <div className="w-[40%]">
                        <p className='text-[16px] text-[#767676] font-DMs font-normal mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-[39px] font-DMs font-bold text-[#262626] pt-10'>Returning Customer</h2>
                    <div className="flex gap-5 mt-10">
                        <div className="w-[30%]">
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>Email address</h4>
                            <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='company@domain.com' />
                        </div>
                        <div className="w-[30%] ">
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626]'>Password</h4>
                            <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="password" name="Password" placeholder='.................' />
                        </div>

                    </div>
                    <div className="">
                        <button className='py-3 px-16 bg-white border-[2px] border-[#262626] text-black mt-10 text-[18px] font-bold font-DMs hover:bg-black hover:text-white ease-in-out duration-300'>Log in</button>
                    </div>

                </div>
                <div className="">
                    <div className="w-[40%] py-16">
                        <h2 className='text-[39px] font-DMs font-bold text-[#262626]'>New Customer</h2>
                        <p className='text-[16px] text-[#767676] font-DMs font-normal pt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <button className='py-3 px-16 bg-black border-[2px] border-[#262626] text-white mt-10 text-[18px] font-bold font-DMs hover:bg-white hover:text-black ease-in-out duration-300'>Continue</button>

                    </div>
                </div>

            </Container>
        </section>
    )
}

export default LoginInner
