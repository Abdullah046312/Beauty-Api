import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

const Secondpart = () => {
  return (
    <section className='py-24'>
      <Container>
        <div className="flex flex-col md:flex-row gap-5">
          
          {/* Phones Sale Section */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="bg-Secondpart w-full h-[450px] md:h-[780px] bg-cover relative flex flex-col justify-end md:pb-[120px] md:pl-[60px] p-8 ">
              <h2 className='text-[30px] md:text-[39px] text-black font-DMs font-bold'>Phones Sale</h2>
              <div className="flex py-1 items-center gap-2">
                <h4 className='text-[14px] md:text-[16px] text-[#6D6D6D] font-DMs font-normal'>Up to</h4>
                <h2 className='text-[30px] md:text-[40px] text-[#262626] font-DMs font-bold'>30%</h2>
                <h4 className='text-[14px] md:text-[16px] text-[#6D6D6D] font-DMs font-normal'>sale for all items!</h4>
              </div>

              <Link to="/shop">
              <button className='md:h-[50px] h-[40px] w-[100px] md:w-[185px] bg-black text-white text-[14px] md:text-[16px] font-DMs font-bold hover:bg-[#F39422] duration-300 ease-in-out'>
                Shop Now
              </button>
              
              </Link>
            </div>
          </div>

          {/* Electronics Sale Section */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="bg-Secondpart01 w-full h-auto md:h-[370px] bg-cover flex flex-col justify-end md:pb-[120px] md:pl-[60px] p-8">
              <h2 className='text-[30px] md:text-[39px] text-black font-DMs font-bold'>Electronics Sale</h2>
              <div className="flex py-1 items-center gap-2">
                <h4 className='text-[14px] md:text-[16px] text-[#6D6D6D] font-DMs font-normal'>Up to</h4>
                <h2 className='text-[30px] md:text-[40px] text-[#262626] font-DMs font-bold'>70%</h2>
                <h4 className='text-[14px] md:text-[16px] text-[#6D6D6D] font-DMs font-normal'>sale for all items!</h4>
              </div>
              <Link to= "/shop">
              <button className='md:h-[50px] h-[40px] w-[100px] md:w-[185px] bg-black text-white text-[14px] md:text-[16px] font-DMs font-bold hover:bg-[#F39422] duration-300 ease-in-out'>
                Shop Now
              </button>
              </Link>
            </div>

            {/* Furniture Offer Section */}
            <div className="bg-secondpart02 w-full h-auto md:h-[370px] mt-[35px] bg-cover flex flex-col justify-end md:pb-[120px] md:pl-[60px] p-8">
              <h2 className='text-[30px] md:text-[39px] text-black font-DMs font-bold'>Furniture Offer</h2>
              <div className="flex py-1 items-center gap-2">
                <h4 className='text-[14px] md:text-[16px] text-[#6D6D6D] font-DMs font-normal'>Up to</h4>
                <h2 className='text-[30px] md:text-[40px] text-[#262626] font-DMs font-bold'>50%</h2>
                <h4 className='text-[14px] md:text-[16px] text-[#6D6D6D] font-DMs font-normal'>sale for all items!</h4>
              </div>
              <Link to= "/shop">
              <button className='md:h-[50px] h-[40px] w-[100px] md:w-[185px] bg-black text-white text-[14px] md:text-[16px] font-DMs font-bold hover:bg-[#F39422] duration-300 ease-in-out'>
                Shop Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Secondpart;
