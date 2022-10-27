import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {

    const [nav,setNav]=useState(false);

    const handleClick=()=>setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex bg-[#0a192f] text-gray-300 justify-between px-4 py-5'>
        <div className='z-10'>
            <h1>RB</h1>
        </div>

        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>                
        </ul>

        {/* hamburger icon */}
        <div onClick={handleClick} className='md:hidden z-10 text-2xl cursor-pointer'>
            {!nav ?  <FaBars/> : <FaTimes />}
           
        </div>

        {/* mobile menu  */}
        <ul className={!nav ? 'hidden' : 'absolute left-0 top-0 w-full h-screen flex flex-col bg-[#0a192f] text-3xl  justify-center items-center'}>
            <li className='py-5'>Home</li>
            <li className='py-5'>Skills</li>
            <li className='py-5'>Projects</li>
            <li className='py-5'>About</li>
            <li className='py-5'>Contact</li>                
        </ul>


    </div>
  )
}

export default Navbar