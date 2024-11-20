import React from 'react'


import Bannerpart from '../components/Bannerpart'
import Firstpart from '../components/Firstpart'
import Secondpart from '../components/Secondpart'
import Thirdpart from '../components/Thirdpart'
import Fourthpart from '../components/Fourthpart'

// import Fivethpart from '../components/Fivethpart'
import NewArrivals from '../components/NewArrivals'

const Home = () => {
  return (
  <>
  
  <Bannerpart/>
  <Firstpart/>
  <Secondpart/>
  <Thirdpart/>
  <Fourthpart/>
  <NewArrivals/>
  {/* <Fivethpart/> */}

  {/*  </Container>
            {/* <Container className="pt-10">
            <div className="flex gap-[20px]">
            <div className="w-[24%]">
                <div className="">
                    <div className="">
                        <div className="relative group overflow-hidden">
                            <img className='w-full' src={images7} alt="" />
                        <ul className='text-end bg-[#ffffffaf] absolute left-0 h-[150px] duration-300 ease-in-out bottom-[-130px] w-full group-hover:bottom-0 p-4'> 
                            <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Add to Wish List <TiHeartFullOutline className='inline-block text-[25px] pl-1' /> </li>
                            <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Compare <FaCodeCompare className='inline-block text-[20px] pl-1'/></li>
                            <li className='py-1 text-[16px] text-[#262626] font-DMs font-bold'>Add to Cart <FaShoppingCart className='inline-block text-[20px] pl-1'/></li>
                        </ul>
                        <div className="absolute top-[20px] left-[20px]">
                            <button className='h-[35px] w-[92px] bg-black text-white text-[14px] font-DMs font-bold  hover:bg-[#F39422] duration-300 ease-in-out'>New</button>
                        </div>
                       
                        </div>
    
    
                    </div>
                    <div className="">
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <h3 className='text-[#262626] font-bold text-[20px] font-DMs'>Basic Crew Neck Tee</h3>
                        <h4 className='text-[#767676] font-normal text-[16px] font-DMs'>Black</h4>
    
                    </div>
                    <p className='text-[#767676] font-normal text-[16px] font-DMs'>$44.00</p>
                </div>
            </div>
            <div className="w-[24%]">
                <div className="">
                    <div className="">
                        <div className="relative group overflow-hidden">
                            <img className='w-full' src={images8} alt="" />
                        <ul className='text-end bg-[#ffffffaf] absolute left-0 h-[150px] duration-300 ease-in-out bottom-[-130px] w-full group-hover:bottom-0 p-4'> 
                            <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Add to Wish List <TiHeartFullOutline className='inline-block text-[25px] pl-1' /> </li>
                            <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Compare <FaCodeCompare className='inline-block text-[20px] pl-1'/></li>
                            <li className='py-1 text-[16px] text-[#262626] font-DMs font-bold'>Add to Cart <FaShoppingCart className='inline-block text-[20px] pl-1'/></li>
                        </ul>
                        <div className="absolute top-[20px] left-[20px]">
                            <button className='h-[35px] w-[92px] bg-black text-white text-[14px] font-DMs font-bold  hover:bg-[#F39422] duration-300 ease-in-out'>New</button>
                        </div>
                        </div>
    
    
                    </div>
                    <div className="">
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <h3 className='text-[#262626] font-bold text-[20px] font-DMs'>Basic Crew Neck Tee</h3>
                        <h4 className='text-[#767676] font-normal text-[16px] font-DMs'>Black</h4>
    
                    </div>
                    <p className='text-[#767676] font-normal text-[16px] font-DMs'>$44.00</p>
                </div>
            </div>
            <div className="w-[24%]">
                <div className="">
                    <div className="">
                        <div className="relative group overflow-hidden">
                            <img className='w-full' src={images9} alt="" />
                        <ul className='text-end bg-[#ffffffaf] absolute left-0 h-[150px] duration-300 ease-in-out bottom-[-130px] w-full group-hover:bottom-0 p-4'> 
                            <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Add to Wish List <TiHeartFullOutline className='inline-block text-[25px] pl-1' /> </li>
                            <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Compare <FaCodeCompare className='inline-block text-[20px] pl-1'/></li>
                            <li className='py-1 text-[16px] text-[#262626] font-DMs font-bold'>Add to Cart <FaShoppingCart className='inline-block text-[20px] pl-1'/></li>
                        </ul>
                        <div className="absolute top-[20px] left-[20px]">
                            <button className='h-[35px] w-[92px] bg-black text-white text-[14px] font-DMs font-bold  hover:bg-[#F39422] duration-300 ease-in-out'>New</button>
                        </div>
                        </div>
    
    
                    </div>
                    <div className="">
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <h3 className='text-[#262626] font-bold text-[20px] font-DMs'>Basic Crew Neck Tee</h3>
                        <h4 className='text-[#767676] font-normal text-[16px] font-DMs'>Black</h4>
    
                    </div>
                    <p className='text-[#767676] font-normal text-[16px] font-DMs'>$44.00</p>
                </div>
            </div>
            <div className="w-[24%]">
                <div className="">
                    <div className="">
                        <div className="relative group overflow-hidden">
                            <img className='w-full' src={images10} alt="" />
                        <ul className='text-end bg-[#ffffffaf] absolute left-0 h-[150px] duration-300 ease-in-out bottom-[-130px] w-full group-hover:bottom-0 p-4'> 
                            <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Add to Wish List <TiHeartFullOutline className='inline-block text-[25px] pl-1' /> </li>
                            <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Compare <FaCodeCompare className='inline-block text-[20px] pl-1'/></li>
                            <li className='py-1 text-[16px] text-[#262626] font-DMs font-bold'>Add to Cart <FaShoppingCart className='inline-block text-[20px] pl-1'/></li>
                        </ul>
                        <div className="absolute top-[20px] left-[20px]">
                            <button className='h-[35px] w-[92px] bg-black text-white text-[14px] font-DMs font-bold  hover:bg-[#F39422] duration-300 ease-in-out'>New</button>
                        </div>
                        </div>
    
    
                    </div>
                    <div className="">
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <h3 className='text-[#262626] font-bold text-[20px] font-DMs'>Basic Crew Neck Tee</h3>
                        <h4 className='text-[#767676] font-normal text-[16px] font-DMs'>Black</h4>
    
                    </div>
                    <p className='text-[#767676] font-normal text-[16px] font-DMs'>$44.00</p>
                </div>
            </div>
            
            </div>

            </Container> */} 
  
  </>
  )
}

export default Home
