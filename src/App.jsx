import React from 'react'
import Header from './components/Header'
import  Landingpage from './components/Landingpage'
import  Marque from './components/Marque'
import  About from './components/About'
import  PlayEyes from './components/PlayEyes'
import  Featured from './components/FeatureProject'
import  Cards from './components/Cards'
import  Footer from './components/Footer'
// locomotive import
import LocomotiveScroll from 'locomotive-scroll';

import { FaArrowRightLong } from "react-icons/fa6";


const App = () => {
  
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
      <Header/>
      <Landingpage/>
      <Marque/>
      <About/>
      <PlayEyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App