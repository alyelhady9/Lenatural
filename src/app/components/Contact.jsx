import Link from 'next/link';
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";


function Contact() {
    const phoneNumber = '+201142922822';
  const message = encodeURIComponent('i would like to order!'); // Optional initial message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    // <div className=' w-full flex justify-center    bg-white'>
    //     <div className='w-8/12 px-4 pt-2 pb-4 max-md:w-10/12'>

    //         <h2 className='text-2xl text-[#71844c] text-center'>Contact us</h2>
    //         <div className='flex text-4xl max-md:justify-center pt-2 gap-8 max-md:gap-16'>

    //             <Link className='text-gray-700 hover:text-emerald-700 flex gap-2 items-center'  target='_blank' href={"https://www.instagram.com/lenatural?igsh=Zzd6cHF2c2dxbzIx"} >
    //             <FaInstagram />
    //             {/* <p className='text-blue-500 text-lg hover:text-blue-700'>@lenatural</p> */}
    //             </Link>
    //             <Link className='text-gray-700 hover:text-emerald-700 flex gap-2 items-center' target='_blank'  href={whatsappLink} >
    //                 <FaWhatsapp />
    //             {/* <p className='text-blue-500 text-lg hover:text-blue-700' >+201142922822</p> */}
    //             </Link>
    //             <Link className='text-gray-700 hover:text-emerald-700 flex gap-2 items-center' target='_blank'  href={"https://www.facebook.com/share/19ENXiRHGs/"} >
    //                 <RiFacebookCircleLine  />
    //             {/* <p className='text-blue-500 text-lg hover:text-blue-700' >+201142922822</p> */}
    //             </Link>
    //         </div>
    //     </div>
    // </div>
    <div className=' w-full flex justify-center    bg-[#71844c] text-white'>
        <div className='w-8/12 px-4 pt-2 pb-4 max-md:w-10/12'>

            {/* <h2 className='text-2xl text-white max-md:text-center max-md:mb-4'>Contact us</h2> */}
            <div className='flex text-4xl justify-center pt-2 gap-16'>

                <Link className='pulse-link text-white hover:text-gray-800 flex gap-2 items-center'  target='_blank' href={"https://www.instagram.com/lenatural?igsh=Zzd6cHF2c2dxbzIx"} >
                <FaInstagram />
                {/* <p className='text-blue-500 text-lg hover:text-blue-700'>@lenatural</p> */}
                </Link>
                <Link className='pulse-link text-white hover:text-gray-800 flex gap-2 items-center' target='_blank'  href={whatsappLink} >
                    <FaWhatsapp />
                {/* <p className='text-blue-500 text-lg hover:text-blue-700' >+201142922822</p> */}
                </Link>
                <Link className='pulse-link text-white hover:text-gray-800 flex gap-2 items-center' target='_blank'  href={"https://www.facebook.com/share/19ENXiRHGs/"} >
                    <RiFacebookCircleLine  />
                {/* <p className='text-blue-500 text-lg hover:text-blue-700' >+201142922822</p> */}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact  