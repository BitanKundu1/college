import React from 'react'
import college from '../assets/college.png'
import college1 from '../assets/college1.jpg'


const Hero = () => {
  return (
 <header className='w-full h-auto'>
     <img className='w-full hidden md:block' src={college} alt="" />
     <img className='w-full md:hidden' src={college1} alt="" />
     

 </header>
  )
}

export default Hero