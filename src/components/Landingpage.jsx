import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import pic from '../image/WhatsApp Image 2024-10-07 at 08.34.42_cae88192.jpg'
import React, { useState } from 'react'

import { FaArrowRightLong } from "react-icons/fa6";

export const Landingpage = () => {
    
    const [okback,Setokback]=useState(false)

    function okBg(){
   
         Setokback(true);
    }
    function okNormal(){
      Setokback(false);
    }

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
   <div className='textstructure mt-40 px-20 max-md:px-10 max-md:mt-40'>

    <div className='masker font-[grotesk]'>
  <h1 className='uppercase text-9xl leading-[7vw] max-md:text-6xl'>We Create</h1>
   </div>
   <div className='masker font-[grotesk]'>
  <h1 className='uppercase text-9xl max-md:text-6xl max-md:items-center leading-[7vw] flex items-end gap-3'>
    <motion.div 
    initial={{width:0}}
     animate={{width:'9vw'}}
      transition={{ease:[0.33, 1, 0.68, 1], duration:1}} 
      className='w-[9vw] rounded h-[6vw] max-md:h-[8vw] max-md:w-[8vw] '><img className='h-[6vw] max-md:h-[8vw] max-md:w-[8vw] w-[9vw] object-cover object-top rounded bg-cover' src={pic} alt="" /></motion.div>
    Eye opening</h1>
   </div>
   <div className='masker font-[grotesk]'>
  <h1 className='uppercase text-9xl max-md:text-6xl leading-[7vw] '>presentations
  </h1>
   </div>
   </div>
   <div className='border-t-[1px] border-zinc-700 mt-10 max-md:mt-20 max-md:py-20 flex justify-between max-md:px-10 px-20 py-5 items-center max-md:flex-col max-md:items-start max-md:gap-5'>
    {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(<p className='text-md font-light tracting-tight leading-none' key={index}>{item}</p>
    ))}
    <div className='start flex items-center gap-5 ' onMouseEnter={okBg} onMouseLeave={okNormal}>
        <div className={`${okback ? "bgblack":""} cursor-pointer uppercase px-4 py-2 border-[2px] rounded-full border-zinc-500 text-sm font-light`}>Start The Project</div>
        <div className={`${okback ? "bgblack":""} cursor-pointer w-10 h-10 flex items-center justify-center border-[1px] rounded-full border-zinc-300 uppercase `}>
         <span className='rotate-[-45deg]'>
         <FaArrowRightLong />
         </span>
        </div>
        </div>
        
   </div>
    </div>
  )
}
export default Landingpage