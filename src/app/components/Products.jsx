
import React from 'react'
import Product1 from "../assets/Product1.jpg"
import Product2 from "../assets/Product2.jpg"
import Image from 'next/image'
import ProductContent from './ProductContent'
import Link from 'next/link'

function Products() {

    const products = [
        {
        id: 1,
        name: 'Le Natural Hair Oil – Pure Nature, Pure Growth',
        discribtion: {
            first: "Say goodbye to chemicals and hello to 100% pure, cold-pressed natural oils—expertly blended to nourish, strengthen, and supercharge your hair growth. At Le Natural, we believe the best care comes straight from nature, which is why our hair oil is free from silicones, sulfates, and any artificial nasties—just pure botanical goodness.  "
            , secound: [
                "💧 Boosts hair growth naturally                ",
                "🌿 A powerhouse blend of cold-pressed, nutrient-rich oils                ",
                "❌ Zero chemicals, zero compromises—just nature at its finest                ",
            ],
            third : [
                "From root to tip, Le Natural Hair Oil feeds your hair the deep hydration and essential nutrients it craves. The result? Stronger, thicker, and shinier hair that looks and feels healthier than ever.                ",
                "Ready for real results? Massage it in, let nature work its magic, and watch your hair thrive!"
            ]

        },
        image: Product1,
        message: 'Le Natural Hair Oil'
        
    },
        {
        id: 2,
        name: ' Le Natural Incense – A Scent Like No Other ',
        discribtion: {
            first: "Step into a world of pure luxury with Le Natural’s premium incense—a masterpiece crafted for those who appreciate the finer things in life. Our incense isn’t just scented; it’s aged and infused with the rarest, most exquisite fragrances, blended through a meticulous process that enhances its depth and longevity.            "
            , secound: [
                "💨 Ranked among the finest aromatic incenses worldwide                ",
                "🔥 Aged to perfection for a deeper, longer-lasting fragrance                ",
                "🌿 Crafted from the purest, high-quality natural ingredients                ",
            ],
            third : [
                "  Each stick releases an aroma so rich, warm, and captivating that it transforms any space into an oasis of tranquility and sophistication. Whether you seek relaxation, a touch of nostalgia, or a statement scent that lingers, this is the incense experience you never knew you needed.                      ",
                "Light it up. Breathe it in. Let Le Natural Incense take you somewhere extraordinary.                "
            ]

        },
        image: Product2,
        message: 'Le Natural Incense'
    },



]
  return (
    <div className='w-full bg-white flex justify-center z-10 mt-12  pb-8 '>
        

        {/* <div className='w-8/12  bg-white backdrop-blur-lg opacity-70 p-8 max-md:w-11/12 flex max-md:flex-col gap-4   '>

            {
                products.map((product , i) => (
                    <div className='w-1/2 max-md:w-full opacity-100 z-20' key={product.id}>
                        <Image className='opacity-100 py-4 max-md:text-center max-md:w-full' src={product.image} width={300} height={300} alt={product.name} />
                        <h2 className='text-xl max-md:text-xl text-emerald-900 font-bold py-4'>
                            {product.name}
                        </h2>
                        <p className='py-4'>{product.discribtion.first}</p>
                        <p className='py-4'>{product.discribtion.secound.map((item,i) => 
                            <div className='py-1'>
                                {item}
                            </div>
                        )}</p>
                        <div className='py-4'>{product.discribtion.third}</div>
                                {i === 0 && products.length > 1 && (
                <hr className='hidden max-md:block mt-4 border-emerald-800' />
                )}
                    </div>
                ))
            }
        </div> */}
        {/* <div className='w-8/12 p-8 max-md:w-11/12 flex max-md:flex-col justify-start gap-4  '>

            {
                products.map((product , i) => (
                    <div className='w-1/2 max-md:w-full opacity-100 z-10' key={product.id}>
                        <Image className='opacity-100 py-4 text-center max-md:w-full' src={product.image} width={300} height={300} alt={product.name} />
                        <h2 className='text-xl max-md:text-xl text-[#71844c] font-bold py-4'>
                            {product.name}
                        </h2>
                        <div className='content'>

                            <p className='py-4'>{product.discribtion.first}</p>
                            <p className='py-4'>{product.discribtion.secound.map((item,i) => 
                                <div className='py-1'>
                                    {item}
                                </div>
                            )}</p>
                        </div>
                        <div className='py-4'>{product.discribtion.third}</div>
                                {i === 0 && products.length > 1 && (
                <hr className='hidden max-md:block mt-4 border-emerald-800' />
                )}
                    </div>
                ))
            }
        </div> */}


            <div className='w-8/12 p-8 max-md:p-4 max-md:w-full flex flex-col justify-center '>
                {products.map((product, i) => (
                    <div className={`flex flex-col max-md:items-start ${i === 0 ?  "mb-18" : "mb-0"} items-center w-full text-sm opacity-100 z-10`} key={product.id}>
                    <Image
                        className='opacity-100 py-4 text-center max-md:w-full'
                        src={product.image}
                        width={300}
                        height={300}
                        alt={product.name}
                    />
                    <h2 className='text-xl max-md:text-center text-center w-full max-md:text-base text-[#71844c] font-bold py-4'>
                        {product.name}
                    </h2>
                    <ProductContent description={product.discribtion} />

                    <div className='w-full text-start mt-6'>
                      <Link target='_blank' href={`https://wa.me/+201142922822?text=i%20want%20to%20buy%20${product.message}`} > 
                        <div className=' w-fit px-4 py-2 rounded-full border-2 text-[#71844c] border-[#71844c] cursor-pointer hover:bg-[#71844c] hover:text-white font-semibold max-md:mt-4'>Buy Product</div>
                      </Link>
                   </div>

                    {/* {i === 0 && products.length > 1 && (
                        <hr className=' mt-4 my-6  w-full border-emerald-800' />
                    )} */}
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Products

