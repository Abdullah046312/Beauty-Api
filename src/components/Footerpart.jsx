import React from 'react';
import Container from './Container';
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footerpart = () => {
  return (
    <section className='bg-[#F5F5F3] py-10 sm:py-20 md:mt-10'>
      <Container>
        <div className="md:flex  justify-center">
          <div className="">

          </div>
          <div className="w-full sm:w-[30%] mb-6 sm:mb-0">
            <h2 className='text-[16px] font-DMs font-bold text-black'>MENU</h2>
            <div className="text-[14px] text-[#6D6D6D] font-DMs font-medium mt-3">
              <h4>Home</h4>
              <h4 className='mt-1'>Shop</h4>
              <h4 className='mt-1'>About</h4>
              <h4 className='mt-1'>Contact</h4>
              <h4 className='mt-1'>Journal</h4>
            </div>
          </div>

          <div className="w-full sm:w-[30%] mb-6 sm:mb-0">
            <h2 className='text-[16px] font-DMs font-bold text-black'>SHOP</h2>
            <div className="text-[14px] text-[#6D6D6D] font-DMs font-medium mt-3">
              <h4 className='mt-1'>Category 1</h4>
              <h4 className='mt-1'>Category 2</h4>
              <h4 className='mt-1'>Category 3</h4>
              <h4 className='mt-1'>Category 4</h4>
              <h4 className='mt-1'>Category 5</h4>
            </div>
          </div>

          <div className="w-full sm:w-[30%] mb-6 sm:mb-0">
            <h2 className='text-[16px] font-DMs font-bold text-black'>HELP</h2>
            <div className="text-[14px] text-[#6D6D6D] font-DMs font-medium mt-3">
              <h4 className='mt-1'>Privacy Policy</h4>
              <h4 className='mt-1'>Terms & Conditions</h4>
              <h4 className='mt-1'>Special E-shop</h4>
              <h4 className='mt-1'>Shipping</h4>
              <h4 className='mt-1'>Secure Payments</h4>
            </div>
          </div>
          {/* Adjusted width for small devices */}

          <div className="w-full sm:w-1/5 mb-6 sm:mb-0">
            <h2 className='text-[16px] font-DMs font-bold text-black'>(052) 611-5711</h2>
            <h2 className='text-[16px] font-DMs font-bold text-black'>company@domain.com</h2>
            <p className='text-[14px] text-[#6D6D6D] font-DMs font-medium mt-3'>
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>

          <div className="w-[20%] sm:w-1/5 mb-6 sm:mb-0 flex justify-center">
            <img src={logo} alt="Logo" className="w-[121px] h-[28px]" />
          </div>
        </div>

        {/* Social Media and Footer Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10">
          <div className="flex gap-4 text-[20px] cursor-pointer">
            <FaFacebookF />
            <FaLinkedin />
            <FaInstagramSquare />
          </div>
          <h2 className='text-[14px] text-[#6D6D6D] font-DMs font-medium mt-3 text-center sm:text-right'>
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </h2>
        </div>
        <div className="flex md:justify-end justify-center">
          <h2 className='text-[14px] text-[#6D6D6D] font-DMs font-medium'>Designed By Abdullah Al-Mamun</h2>
        </div>
      </Container>
    </section>
  );
};

export default Footerpart;
