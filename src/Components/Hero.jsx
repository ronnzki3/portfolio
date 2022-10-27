import React from 'react'

const Hero = () => {
  return (
    <div name="hero" className='w-full h-screen bg-[#000000] text-gray-300 myimage'>
        <div className='bg-hero bg-cover bg-no-repeat bg-fixed flex flex-col justify-center max-w-[1000px] h-full mx-auto px-8 '>
            <p className='text-lg'>Hi, I am</p>
            <p className='text-4xl'>Ronniel Besara</p>
            <p className='text-base'>I am a Programmer & a Web Developer</p>
        </div>
    </div>
  )
}

export default Hero