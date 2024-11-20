import React from 'react';
import Container from './Container';
import { FaHeart } from "react-icons/fa";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { BsFillCartPlusFill } from "react-icons/bs";

import Products from './Products';
import Flex from './Flex';



const Thirdpart = () => {
  return (
  <section>
    <Container>
      <h2 className='text-[#262626] font-bold text-[39px] font-DMs py-4'>New Arrivals</h2>
      <Flex>
      <Products/>

      </Flex>

    </Container>
  </section>
  );
};

export default Thirdpart;
