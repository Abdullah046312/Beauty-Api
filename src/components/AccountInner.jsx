import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";


const AccountInner = () => {
  return (
   <section>
    <Container>
    <div className="w-full">
                    <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>My Account</h2>
                    <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
                        <Link to="/">Home</Link>
                        <li><IoIosArrowForward /></li>
                        <Link to="/shop">Shop</Link>
                    </ul>
                </div>

                <div className="flex ">
                    <div className="w-1/5 pt-10">
                    <div className="">
                        <h2 className='text-[16px] font-DMs font-bold text-[#262626] border-b py-2 '>Dashboard</h2>
                        <h3 className='text-[16px] font-DMs font-normal text-[#767676] border-b py-3' >Others</h3>
                        <h3 className='text-[16px] font-DMs font-normal text-[#767676] border-b py-3'>Donwloads</h3>
                        <h3 className='text-[16px] font-DMs font-normal text-[#767676] border-b py-3'>Addresses</h3>
                        <h3 className='text-[16px] font-DMs font-normal text-[#767676] border-b py-3'>Account details</h3>
                        <h3 className='text-[16px] font-DMs font-normal text-[#767676] border-b py-3'>Logout</h3>
                    </div>
                    </div>
                    <div className="w-3/5 py-10 pl-16">
                    <div className="">
                        <p className='text-[16px] font-DMs font-bold text-[#2626268e]  py-2'>Hello admin (not admin? Log out)</p>
                        <p className='text-[16px] font-DMs font-bold text-[#2626269a]  py-2'>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                    </div>
                    </div>
                </div>
    </Container>
   </section>
  )
}

export default AccountInner
