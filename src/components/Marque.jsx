import { motion } from 'framer-motion'
import React from 'react'

export const Marque = () => {
    motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full max-md:py-10 py-20 rounded-t-xl rounded-r-xl bg-[#004D43]'>
        <div className='text border-t-2 overflow-hidden flex border-b-2 border-zinc-300  whitespace-nowrap'>
        <motion.h1
        initial={{x:0}}
        animate={{x:"-100%"}} 
        transition={{repeat:Infinity,ease:"linear", duration:10}}
        className='text text-[20vw] max-md:text-[25vw] leading-none font-[grotesk] uppercase mb-[-10px] pb-[10px] pr-10'>We are Ochi</motion.h1>
        <motion.h1 
        initial={{x:0}}
        animate={{x:"-100%"}} 
        transition={{repeat:Infinity, ease:"linear", duration:10}}
        className='text-[20vw] max-md:text-[25vw] leading-none font-[grotesk] uppercase mb-[-10px] pb-[10px]'>We are Ochi</motion.h1>
        </div>
    </div>
  )
  
}
export default Marque
