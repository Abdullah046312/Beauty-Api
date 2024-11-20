import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const SignupInner = () => {
  return (
    <section>
        <Container>
        <div className="w-full">
                    <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Sign up</h2>
                    <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
                        <Link to="/">Home</Link>
                        <li><IoIosArrowForward /></li>
                        <Link to="/shop">Shop</Link>
                    </ul>
                </div>
                <div className="border-b w-full py-10">
                    <div className="w-[40%]">
                        <p className='text-[16px] text-[#767676] font-DMs font-normal mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    </div>
                </div>
                <div className=" border-b py-10">
                    <div className="">
                        <h2 className='text-[39px] font-DMs font-bold text-[#262626] pt-10'>Your Personal Details</h2>
                    </div>
                    <div className="flex gap-10">
                        <div className="w-[30%] pt-5">
                        
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>First Name</h4>
                            <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='First Name' />
                       
                        </div>
                        <div className="w-[30%] pt-5">
                        
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>Last Name</h4>
                            <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Last Name' />
                       
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="w-[30%] pt-5">
                        
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>Email address</h4>
                            <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='company@domain.com' />
                       
                        </div>
                        <div className="w-[30%] pt-5">
                        
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>Telephone</h4>
                            <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Your phone number' />
                       
                        </div>
                    </div>
                </div>
                
                {/* secound part */}
                <div className=" border-b py-10">
                    <div className="">
                        <h2 className='text-[39px] font-DMs font-bold text-[#262626] pt-10'>New Customer</h2>
                    </div>
                    <div className="flex gap-10">
                        <div className="w-[30%] pt-5">
                        
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>Address 1</h4>
                            <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='4279 Zboncak Port Suite 6212' />
                       
                        </div>
                        <div className="w-[30%] pt-5">
                        
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>Address 2</h4>
                            <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='-' />
                       
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="w-[30%] pt-5">
                        
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>City</h4>
                            <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='Your city' />
                       
                        </div>
                        <div className="w-[30%] pt-5">
                        
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>Post Code</h4>
                            <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="text" placeholder='05228' />
                       
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="w-[30%] pt-5">
                        
                            {/* <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>City</h4>
                          <input type="date" name="" id="" />
                        */}
                          <div className="">
                              <h4 className='text-[18px] font-DMs font-bold text-[#262626]'>Country</h4>
                              <select className='border-b w-full py-2 focus:outline-none  '>
                                  <option value="" disabled className="text-gray-400">Please select</option>
                                  <option value="USA">Please select</option>
                                  <option value="Canada">Canada</option>
                                  <option value="UK">UK</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Other">Other</option>
                                  {/* Add more countries as needed */}
                              </select>
                          </div>

                        </div>
                        <div className="w-[30%] pt-5">
                        <div className="">
                              <h4 className='text-[18px] font-DMs font-bold text-[#262626]'>Region/State</h4>
                              <select className='border-b w-full py-2 focus:outline-none  '>
                                  <option value="" disabled className="text-gray-400">Please select</option>
                                  <option value="USA">Please select</option>
                                  <option value="Canada">Canada</option>
                                  <option value="UK">UK</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Other">Other</option>
                                  {/* Add more countries as needed */}
                              </select>
                          </div>
                           
                        </div>
                    </div>
                </div>
                {/* thardpart */}
                <div className=" border-b py-10">
                    <div className="">
                        <h2 className='text-[39px] font-DMs font-bold text-[#262626] pt-10'>Your Password</h2>
                    </div>
                    <div className="flex gap-10">
                        <div className="w-[30%] pt-5">
                        
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>Password</h4>
                           <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="password" name="" id="" placeholder='Your Password' />
                       
                        </div>
                        <div className="w-[30%] pt-5">
                        
                            <h4 className='text-[18px] font-DMs font-bold text-[#262626] '>Repeat Password</h4>
                            <input className='border-b w-full py-3 focus:outline-none text-[14px] font-DMs font-normal text-[#767676] ' type="password" name="" id="" placeholder='Repeat Password' />
                            
                       
                        </div>
                    </div>
                  
                </div>

                <div className="">
                    <div className="flex gap-5 pt-10">
                        <input type="checkbox" name="" id="" />
                        <h2>I have read and agree to the Privacy Policy</h2>
                    </div>
                    <div className="flex gap-3 pt-5">
                    <h2>Subscribe Newsletter</h2>
                        <input type="checkbox" name="" id="" />
                        <h4>Yes</h4>
                        <input type="checkbox" name="" id="" />
                        <h4>No</h4>
                        
                    </div>
                    <div className="">
                        <button className='py-3 px-16 bg-black border-[2px] border-[#262626] text-white mt-10 text-[18px] font-bold font-DMs hover:bg-white hover:text-black ease-in-out duration-300'>Log in</button>
                    </div>
                </div>
        </Container>
    </section>
  )
}

export default SignupInner
