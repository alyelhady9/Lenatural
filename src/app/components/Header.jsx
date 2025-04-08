"use client"

import React from "react"
import logo from "../assets/Lenatural.png"
import Image from "next/image"
import Link from "next/link"


function Header() {
   
    const phoneNumber = '+201142922822';
    const message = encodeURIComponent('I have an issue with '); // Optional initial message
  
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  
    const scrollToSection = (pixels) => {
        window.scrollTo({
          top: pixels,
          behavior: 'smooth'
        });
      }
    
  return (
    <div className='  z-20 flex w-full justify-center items-center text-emerald-900 font-bold h-fit p-4 py-0 pt-4 max-md:py-4'>

      
        <div className='w-6/12 max-md:w-11/12 text-xs mt-18 max-md:mt-2 flex justify-between items-center'>
            <button onClick={() => scrollToSection(700)} className='cursor-pointer border-2 text-white  border-white hover:bg-white hover:text-emerald-900 rounded-full max-md:px-2 max-md:py-1 px-2 py-1'>Our Products</button>
            <button onClick={() => scrollToSection(3000)} className='cursor-pointer border-2 text-white  border-white hover:bg-white hover:text-emerald-900 rounded-full max-md:px-2 max-md:py-1 px-2 py-1'>Contact Us </button>
            <button onClick={() => scrollToSection(3000)} className='cursor-pointer border-2 text-white  border-white hover:bg-white hover:text-emerald-900 rounded-full max-md:px-2 max-md:py-1 px-2 py-1'>About us</button>
            <button className='cursor-pointer border-2 text-white  border-white hover:bg-white hover:text-emerald-900 rounded-full max-md:px-2 max-md:py-1 px-2 py-1'> <Link target='_blank'  href={whatsappLink}> Report</Link></button>
        </div>
    </div>
  )
}

export default Header