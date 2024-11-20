import React from 'react';
import Container from './Container';
import { MdLocalShipping } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";

const Firstpart = () => {
  return (
    <section className='bg-[#F0F0F0] md:py-5 py-2'>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Warranty */}
          <div className="flex items-center gap-2  md:mb-0 md:w-1/3">
            <h2 className='text-[30px] font-DMs font-bold'>2</h2>
            <h3 className='text-[16px] text-[#6D6D6D] font-DMs font-medium'>Two years warranty</h3>
          </div>

          {/* Free Shipping */}
          <div className="flex items-center gap-2 mb-4 md:mb-0 md:w-1/3 justify-center">
            <MdLocalShipping className='text-[25px]' />
            <h4 className='text-[16px] text-[#6D6D6D] font-DMs font-medium'>Free shipping</h4>
          </div>

          {/* Return Policy */}
          <div className="flex items-center gap-2 md:w-1/3 justify-end">
            <FaArrowRotateLeft className='text-[20px]' />
            <h3 className='text-[16px] text-[#6D6D6D] font-DMs font-medium'>Return policy in 30 days</h3>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Firstpart;
