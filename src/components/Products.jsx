import React from 'react';
import images3 from "../assets/images3.png";
import images4 from "../assets/images4.png";
import images5 from "../assets/images5.png";
import images6 from "../assets/images6.png";
import images7 from "../assets/images7.png";
import images8 from "../assets/images8.png";
import images9 from "../assets/images9.png";
import images10 from "../assets/images10.png";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Container from './Container';

const productsData = [
  { img: images3, title: "Basic Crew Neck Tee", color: "Black", price: "$44.00" },
  { img: images4, title: "Basic Crew Neck Tee", color: "Black", price: "$44.00" },
  { img: images5, title: "Basic Crew Neck Tee", color: "Black", price: "$44.00" },
  { img: images6, title: "Basic Crew Neck Tee", color: "Black", price: "$44.00" },
  { img: images7, title: "Basic Crew Neck Tee", color: "Black", price: "$44.00" },
  { img: images8, title: "Basic Crew Neck Tee", color: "Black", price: "$44.00" },
  { img: images9, title: "Basic Crew Neck Tee", color: "Black", price: "$44.00" },
  { img: images10, title: "Basic Crew Neck Tee", color: "Black", price: "$44.00" },
];

const Products = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-wrap gap-4">
          {productsData.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-[23%]">
              <div className="relative group overflow-hidden shadow-lg">
                <img className='w-full h-auto' src={item.img} alt={item.title} />
                <ul className='text-end bg-[#ffffffec] absolute left-0 h-[180px] duration-300 ease-in-out bottom-[-180px] w-full group-hover:bottom-0 p-4'> 
                  <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Add to Wish List <TiHeartFullOutline className='inline-block text-[25px] pl-1' /></li>
                  <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Compare <FaCodeCompare className='inline-block text-[20px] pl-1'/></li>
                  <li className='py-1 text-[16px] text-[#262626] font-DMs font-bold'>Add to Cart <FaShoppingCart className='inline-block text-[20px] pl-1'/></li>
                </ul>
                <div className="absolute top-4 left-4">
                  <button className='h-[35px] w-[92px] bg-black text-white text-[14px] font-DMs font-bold hover:bg-[#F39422] duration-300 ease-in-out'>New</button>
                </div>
                <div className="flex justify-between p-2">
                  <div>
                    <h3 className='text-[#262626] font-bold text-[16px] font-DMs'>{item.title}</h3>
                    <h4 className='text-[#767676] font-normal text-[14px] font-DMs'>{item.color}</h4>
                  </div>
                  <p className='text-[#767676] font-normal text-[16px] font-DMs'>{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Products;
