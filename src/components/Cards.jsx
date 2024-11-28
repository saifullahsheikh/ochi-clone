import React from 'react'

const cards = () => {
  return (
    <div className='w-full flex max-md:h-full max-md:mt-0 max-md:mb-20 max-md:flex-col justify-center items-center gap-10 h-screen bg-zinc-900 px-20 max-md:px-10 '>
        <div className='card-container w-1/2 max-md:w-full '>
         <div className='relative card w-full h-[50vh]  rounded bg-[#004d43] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='uppercase text-[13px] absolute left-10 bottom-5 border-[1px] border-[#cdea68] text-[#cdea68] rounded-full px-2 py-1'>&copy;2019 - 2020</button>
         </div>
        </div>
        <div className='flex gap-10 max-md:flex-col w-1/2 card-container max-md:w-full'>
        <div className='flex relative items-center justify-center card w-1/2 max-md:w-full h-[50vh] rounded bg-[#192826]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='uppercase text-[13px] absolute left-5 bottom-5 border-[1px]  rounded-full px-2 py-1'>Rating 5.0 On Clutch</button>
        </div>
        <div className='flex relative items-center justify-center card w-1/2 max-md:w-full h-[50vh] rounded bg-[#192826]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className=' uppercase text-[13px] absolute left-5 bottom-5 border-[1px]  rounded-full px-2 py-1'>Business bootcamp Alumini</button></div>
        </div>
    </div>
  )
}

export default cards
