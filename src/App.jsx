import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Clubs from './Components/Clubs'
import Footer from './Components/Footer'


const s = () => {
  return (
    <div  className='w-full h-screen '>
      <Navbar/>
      
      <Hero/>
      <Clubs/>
      <Footer/>
    </div>
  )
}

export default s