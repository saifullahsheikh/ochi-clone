import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-screen max-md:h-full bg-[#004D43] p-20 flex max-md:flex-col max-md:p-10'>
        <div className="w-1/2 max-md:w-full max-md:h-[15%] h-[100%] font-[grotesk] flex flex-col justify-between items-between ">
        <div className="heading">
        <h1 className='text-[10vw] uppercase leading-none -mb-10 max-md:mb-0'>Eye</h1>
        <h1 className='text-[10vw] uppercase leading-none -mb-10 max-md:mb-0' >openning</h1>
        </div>
        <div className='max-md:hidden '>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        </div>
        </div>
        <div className="w-1/2 h-[100%] font-[grotesk]  max-md:w-full">
        <div>
        <h1 className='text-[10vw] uppercase leading-none -mb-10 max-md:mb-0 '>Presentation</h1>
        </div>

        <div className='menus-main flex font-[neue] mt-20 max-md:mt-10 w-full   justify-between'>
     <div className="menu w1/2 h-full flex flex-col">
     {["S:","Instagram","Behance","Facebook" ,"Linkedin","L:","202-1965 W 4th Ave","Vancouver, Canada","30 Chukarina St","Lviv, Ukraine" ,"E:","hello@ochi.design"].map((item,index) => (
        <a href="" >{item}</a>
     ))}
     </div>
     <div className="menu w1/2 h-full  flex flex-col">
     {["Home","Service","About us" ,"Our Work" ,"Insight" ,"Contact us"].map((item,index) => (
        <a href="">{item}</a>
     ))}
     </div>
        </div>
        <div className='max-md:inline-flex max-md:mt-10  hidden '>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        </div>
    <div className='font-[neue] max-md:mt-10'>© ochi design 2024. </div>
        </div>
    </div>
  )
}

export default Footer