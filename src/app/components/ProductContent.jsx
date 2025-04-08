// "use client"
// import { useState } from 'react'

// function ProductContent({ description }) {
//     const [isExpanded, setIsExpanded] = useState(false);
  
//     const toggleExpanded = () => {
//       setIsExpanded(!isExpanded);
//     };
  
//     return (
//       <div className='content'>
//         <p className='py-4'>{description.first}</p>
//         {isExpanded ? (
//             <div>

//                 <p className='py-4'>
//                     {description.secound.map((item, i) => (
//                         <div className='py-1' key={i}>
//                         {item}
//                     </div>
//                     ))}
//                 </p>
//                 <p>
//                 <div className='py-4'>{description.third}</div>
//                 </p>
//             </div>
//         ) : (
    
               
//                 <button
//                     className='cursor-pointer text-start text-white px-2 py-2 w-full bg-[#71844c]   '
//                     onClick={toggleExpanded}
//                     >
//                     See More
//                 </button>
          
//         )}
//       </div>
//     );
//   }
  
//   export default ProductContent;

"use client";
import { useState } from 'react';

function ProductContent({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='content'>
      <p className='py-4'>{description.first}</p>
      {isExpanded ? (
        <div>
          <p className='py-4'>
            {description.secound.map((item, i) => (
              <div className='py-1' key={i}>
                {item}
              </div>
            ))}
          </p>
          <div className='py-4'>{description.third}</div>
          <button
            className='cursor-pointer text-start text-white px-2 py-2 w-full bg-[#71844c]'
            onClick={toggleExpanded}
          >
            See Less
          </button>
        </div>
      ) : (
        <button
          className='cursor-pointer text-start text-white px-2 py-2 w-full bg-[#71844c]'
          onClick={toggleExpanded}
        >
          See More
        </button>
      )}
    </div>
  );
}

export default ProductContent;