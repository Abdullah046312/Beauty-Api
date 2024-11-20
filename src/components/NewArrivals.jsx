import React, { useContext } from 'react'

import Arrivalscomponents from './Arrivalscomponents'
import Container from './Container'
import Flex from './Flex'
import { ApiData } from './ContextApi'
import { Link } from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";

import { FaLongArrowAltLeft } from "react-icons/fa";








function SampleNextArrow(props) {
  const { onClick } = props;
  return (
      <div
          className="h-[50px] w-[50px] rounded-full absolute left-[20px] top-[50%] translate-y-[-50%] text-center leading-[45px] bg-[#00000033] cursor-pointer z-10"
          onClick={onClick}
      >
          <FaLongArrowAltLeft className='inline-block text-[30px] text-white font-bold' />
      </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
      <div
          className="h-[50px] w-[50px] rounded-full absolute right-[30px] top-[50%] translate-y-[-50%] text-center leading-[45px] bg-[#00000033] cursor-pointer z-10"
          onClick={onClick}
      >
          < FaLongArrowAltRight className='inline-block text-[30px] text-white font-bold' />
      </div>
  );
}


const NewArrivals = () => {
    const {info, loading} = useContext(ApiData);
    
    const settings = {
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 4, // Default for larger screens
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768, // Adjust this value based on your design
                settings: {
                    slidesToShow: 1, // Show 1 slide on small devices
                },
            },
        ],
    };
    
    return (
        <section>
            <Container className="relative"> 
                <h2 className='text-[#262626] font-bold text-[39px] font-DMs py-4'>New Arrivals</h2>

                {loading ? 
                <><h2 className='font-DMs font-bold text-[50px]'>Loading.....!</h2></>
                :
             
             <Slider {...settings}>
              {info.map((item)=>(

                    <Link to="/shop">
                    <Arrivalscomponents item={item}/>
                    </Link>
                    

              ))}

             </Slider>
             }

                


            </Container>

        </section>

    )
}

export default NewArrivals;
