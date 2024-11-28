import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const PlayEyes = () => {
  const [rotate,setRotate] = useState(0);
   useEffect(()=>{
  
    window.addEventListener("mousemove",(e)=>{
       let mouseY = e.clientY;
       let mouseX = e.clientX;

       let deltaX = mouseX - window.innerWidth/2;
       let deltaY= mouseY - window.innerHeight/2;
       
       var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
       setRotate(angle-180);
    })
   })
  return (
    <div  className='eyes w-full h-screen max-md:h-[80vh] overflow-hidden'>
   <div  className="relative w-full h-full bg-cover bg-center  bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
     <div className='absolute  flex gap-10  -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2'>
     <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
        <div className='flex items-center justify-center w-2/3 h-2/3 rounded-full bg-black'> 
       
         <div style={{transform:` rotate(${rotate}deg)`}} className='line h-10  w-full'> 
           <div className='w-6 h-6 rounded-full bg-white'> 
        
        </div></div>
        </div>
     </div>
     <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
     <div className='flex justify-center items-center w-2/3 h-2/3 rounded-full bg-black'>
     <div style={{transform:` rotate(${rotate}deg)`}} className='line h-10  w-full'> 
           <div className='w-6 h-6 rounded-full bg-white'> 
        
        </div></div>
        </div>
     </div>
     </div>
   </div>
    </div>
  )
}

export default PlayEyes