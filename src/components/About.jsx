import { motion } from 'framer-motion'

import { GoArrowUpRight } from "react-icons/go";
import { useState } from 'react'


const About = () => {

   const [ ishover ,setHover]=useState(false);
  function okHover(){
  //  alert("hellow dunya")
   setHover(true);
  }
  function okLeave(){
    //  alert("hellow dunya")
     setHover(false);
    }
  
  return (
    <div data-scroll  data-scroll-speed='-.1' className='w-full py-20 max-md:py-10 bg-[#cdea68] text-black p-20 max-md:px-10'>
   <div>
    <h1 className='font-[neue] text-[2.8vw] max-md:text-[4.5vw]  leading-none'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

    <div className='border-t-[1px] max-md:w-full text-[#212121] text-[15px] flex max-md:flex-col justify-between pt-5 mt-5 border-[#a1b562]' >
      <div className='w-1/2 max-md:w-full'>What you can expect:</div>
      <div className='w-1/2 max-md:w-full flex  gap-20 max-md:flex-col max-md:gap-5' >
        <div className='w-1/2 max-md:w-full flex flex-col gap-10'>
        <div > We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</div>
   
   <div> We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</div>
        </div>
        <div className='max-md:w-full max-md:place-items-start w-1/2 flex-col flex place-items-center justify-end text-start '>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Behance</a>
          <a href="">Linkedin</a>
        </div>
   </div>

      
    </div>

    <div className='w-full flex pt-10 max-md:flex-col border-t-[1px] mt-10 border-[#a1b562]'>
      <div className='w-1/2 max-md:w-full'>
    <h4 className='text-7xl max-md:text-4xl'>Our approch :</h4>


    <button onMouseEnter={okHover} onMouseLeave={okLeave} className='px-8 py-4 uppercase bg-zinc-900 rounded-full mt-10 text-white flex items-center gap-10'>Read more 

    <div className={`${ishover ? "op":"op2"} w-3 h-3 bg-zinc-100 rounded-full 	 transition-all px-[1px] py-[1px]	`} > <GoArrowUpRight className='text-zinc-900 font-[100] text-lg  font-thin	w-full h-full' /></div></button>


      </div>
      <div className="w-1/2 max-md:w-full max-md:mt-10 max-md:h-[40vh] max-md:mb-10 h-[75vh] rounded-2xl bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] bg-cover">

      </div>
    </div>
   </div>
    </div>
  )
}

export default About