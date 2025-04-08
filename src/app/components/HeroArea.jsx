import React from 'react'
import Image from 'next/image'
import pattern from '../assets/gradient2pattern.jpg'
import logo from '../assets/lenaturalG.png'
import logo2 from '../assets/LenaturalS.png'
function HeroArea() {
  return (
    
    <div className='w-full text-center max-md:text-sm flex text-[#a6a09f] justify-center max-md:mb-24 mb-44 max-lg:mb-32 '>
      <div className='w-6/12 h-[400px] max-lg:w-9/12 max-md:h-[150px] max-md:w-11/12 rounded-lg relative mt-6 max-md:-mt-4'>
          {/* <Image  src={pattern} className='object-cover w-full '/> */}
          <div className=' w-full h-[110%]  flex flex-col justify-between pt-4 px-8 top-6 max-md:-top-6' >
            <div>

                <div className='text-center w-full flex items-center justify-center flex-col'>
                    <p className='text-base max-md:text-xs'>Your beauty from nature</p>
                    <Image alt='LeNatural logo' src={logo} className=' text-center w-[300px] max-md:w-[130px]'  />
                </div>
                
                <div className='max-md:text-[10px] text-sm '>

                    <p>At LeNatural, every product is handmade with love and passion, using only natural ingredients and no synthetic chemicals. Proven to be highly effective, our formulas bring real results while keeping your skin and hair safe and healthy</p>
                </div>
            </div>
            
                <Image alt='LeNatural logo' src={logo2} className='animate-spin-slow m-auto w-[140px] mt-8 max-md:mt-2 max-md:w-[50px]'  />
            
            <div className='text-center w-full text-[10px] max-md:mt-4 max-md:text-[7px]'>

                <p>LeNatural offers completely natural and healthy products, free from any synthetic chemicals. Our skincare, haircare, and incense are crafted with pure ingredients to nourish and enhance your beauty. Embrace nature with LeNatural</p>
                
                <Image alt='LeNatural logo' src={logo} className='m-auto w-[100px] mt-2 max-md:w-[50px]'  />
            </div>

          </div>
      </div>
      {/* <div className='w-full h-24 bg-transparent'>

      </div> */}
    </div>
  )
}

export default HeroArea
