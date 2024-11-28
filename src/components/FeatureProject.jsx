import { motion } from 'framer-motion'
import { Power4 } from 'gsap';

import React, { useState } from 'react'
 
const FeatureProject = () => {
    const [ishover,SetHover] = useState(false);
    const [ishovering,SetHovering] = useState(false);

      
  return (
    <div className='w-full py-10 '>
        <div className='w-full px-20 max-md:p-10 pb-[25px] border-b-[1px] border-zinc-600 '> 
            <h1 className='text-6xl font-[neue]'>Featured projects
            </h1>
        </div>
        <div className='mt-10 px-20 max-md:p-10'>
        
        <div className="cards flex gap-10 max-md:flex-col max-md:gap-2">
           
                <div className="card-container max-md:w-full relative w-1/2 rounded-xl  h-[75vh]  "
                 onMouseEnter={()=>SetHover(true)} 
                 onMouseLeave={()=>SetHover(false)}
                 >
                <div className='mb-5 uppercase flex items-center'><div className='w-[1vw] h-[1vw] mr-3 rounded-full bg-zinc-100'></div><div>Cardboard Spaceship</div>
        </div>
                <h1 className=' max-md:hidden text-center text-9xl text-[#CDEA68] overflow-hidden font-[grotesk] left-full absolute top-1/2 leading-none flex -translate-x-1/2 -translate-y-1/2 z-[9]'>
                {'Fyde'.split('').map((item, index) => (
                    <motion.span key={index}
                     initial={{y:"100%"}}
                     animate={ishover ? { y:"0" }: { y:"100%" }}
                     transition={{ease:Power4.easeInOut,delay:index*.06}}
                     className='inline-block'
                     >{item}</motion.span>
                ))}


                </h1>
                  <div 
                 
                  className='max-md:h-[45vh]  transition-all	card w-full h-full  rounded-xl overflow-hidden'>
                    <img className=' w-full h-full  bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    
                  </div>
                  <div className='flex gap-5 mt-5 max-md:inline max-md:pt-10'>
                    <button className='text-sm uppercase border-[1px] border-zinc-100 px-3 py-1 rounded-full max-md:mt-5'>Brand templete</button>
                    <button className='text-sm uppercase border-[1px] border-zinc-100 px-3 py-1 rounded-full'>Sales Deck</button>
                    <button className='text-sm uppercase border-[1px] border-zinc-100 px-3 py-1 rounded-full max-md:mt-2'>Social media templete</button>
                  </div>
                </div>
                <div className="card w-1/2 max-md:w-full relative rounded-xl h-[75vh] "
                 onMouseEnter={()=>SetHovering(true)} 
                 onMouseLeave={()=>SetHovering(false)}>
                <div className='mb-5 uppercase flex items-center'><div className='w-[1vw] h-[1vw] mr-3 rounded-full bg-zinc-100'></div><div>AH2 & Matt Horn
                </div>
                </div>
                <h1 className="max-md:hidden  flex overflow-hidden text-center text-9xl text-[#CDEA68]  font-[grotesk] right-full absolute top-1/2 leading-none  translate-x-1/2 -translate-y-1/2 z-[9]">
           {" Vise".split("").map((item, index) => (
           <motion.span key={index}
           initial={{y:"100%"}}
           animate={ishovering ? { y:"0" }: { y:"100%" }}
           transition={{ease:Power4.easeInOut,delay:index*.06}}
           className='inline-block'
           >{item}</motion.span>
))}
</h1>
                <div className=' card w-full h-full  rounded-xl overflow-hidden max-md:h-[45vh]'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                  </div>
                  <div className='flex gap-5 mt-5'>
                    <button className='text-sm uppercase border-[1px] border-zinc-100 px-3 py-1 rounded-full'>Brand templete</button>
                    
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureProject