import Image from 'next/image'
import React from 'react'
import backGround from '../assets/whoWeAre1.jpg'
import backGroundm from '../assets/whoWeArem.jpg'
function About() {
  return (
    // <div className='w-full max-md:w-full relative flex justify-center mx-auto max-md:py-8 py-8  bg-emerald-900 text-white'>

    //     <Image src={backGroundm} className='  h-full hidden max-md:block left-0 object-cover' />
    //     <Image src={backGround} className=' h-full max-md:hidden left-0 object-cover' />
    //     <div className='text-gray-300 max-lg:sm w-8/12 h-full text-center max-md:w-11/12 px-8 absolute top-24 max-lg:top-0 max-md:top-12 left-[50%] translate-x-[-50%]'>
    //         <h2 className='text-2xl pb-2  max-xl:text-xl  ml-[50%] translate-x-[-50%] text-gray-400 border-2 w-fit rounded-full p-2 mb-16 max-md:mb-3 border-gray-400'>
    //         Who Are We?

    //         </h2>
    //         <p className='pb-4'>
    //         Welcome to Le Natural, where nature meets luxury in the most effortless way possible. We're not just about products; we're about bringing out your natural glow, from head to toe. We craft hair oils that make your locks look like they've just been kissed by a magic wand, skincare that feels like a spa day, and body care that’ll have you feeling pampered all day long. Oh, and did we mention our incense? It’s like a little piece of vintage paradise in every puff.
                
    //         </p>
    //         <p>
    //         At Le Natural, we’re all about quality, simplicity, and a sprinkle of fun. Because who says you can’t have great skin, luscious hair, and a little bit of magic, all in one? Join the revolution of natural beauty and let’s make the world a little more fabulous—one product at a time!

    //         </p>
    //     </div>




    // </div>






<div className='w-full relative flex justify-center mx-auto max-md:py-8 py-8 my-12 text-white'>
  {/* <div className='absolute inset-0'>
    <Image
      src={backGroundm}
      className='max-md:block hidden w-full h-full object-cover'
      alt='Mobile Background'
    />
    <Image
      src={backGround}
      className='max-md:hidden block w-full h-full object-cover'
      alt='Desktop Background'
    />
  </div> */}

  <div className='relative z-10 w-8/12 max-md:w-full px-8 text-center max-lg:mt-0 max-md:mt-0 max-md:text-sm'>
    <h2 className='text-2xl pb-2 max-xl:text-xl mx-auto  border-2 w-fit rounded-full p-2 mb-16 max-md:mb-3 border-white'>
      Who Are We?
    </h2>
    <p className='pb-4'>
      Welcome to Le Natural, where nature meets luxury in the most effortless way possible. We're not just about products; we're about bringing out your natural glow, from head to toe. We craft hair oils that make your locks look like they've just been kissed by a magic wand, skincare that feels like a spa day, and body care that’ll have you feeling pampered all day long. Oh, and did we mention our incense? It’s like a little piece of vintage paradise in every puff.
    </p>
    <p>
      At Le Natural, we’re all about quality, simplicity, and a sprinkle of fun. Because who says you can’t have great skin, luscious hair, and a little bit of magic, all in one? Join the revolution of natural beauty and let’s make the world a little more fabulous—one product at a time!
    </p>
  </div>    


  
</div>










    // <div className='w-full text-center  flex flex-col items-center justify-center  text-white'>
    //   <div className='w-7/12  max-md:w-11/12 rounded-lg shadow-md relative mt-12 max-md:mt-6'>
    //       <Image  src={pattern} className='object-cover w-full '/>
    //       <div className='absolute w-full h-full flex flex-col justify-evenly p-4 top-0'>

    //         <div>
    //             <h2 className='text-2xl max-md:text-lg pb-2 text-white'>Le Natural</h2>
    //             <p className='text-xl max-md:text-sm'>Your beauty from nature</p>
    //         </div>
            
    //         <div className=''>

    //             <p>At LeNatural, every product is handmade with love and passion, using only natural ingredients and no synthetic chemicals. Proven to be highly effective, our formulas bring real results while keeping your skin and hair safe and healthy</p>
    //         </div>
            
    //         <div className=''>

    //             <p>LeNatural offers completely natural and healthy products, free from any synthetic chemicals. Our skincare, haircare, and incense are crafted with pure ingredients to nourish and enhance your beauty. Embrace nature with LeNatural</p>
    //             <p>Le natural</p>
    //         </div>

    //       </div>
    //   </div>
    //   <div className='w-full h-24 bg-emerald-900'>

    //   </div>
    // </div>
  )
}

export default About