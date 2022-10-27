import React from 'react'

function About() {
  return (
    <div name="about" className='bg-[#ffffff] text-black'>

        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full p-4 mt-5'>
            <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-300 ease-in-out duration-500'>About me</p>
            </div>
            <div className='flex flex-col md:flex-row mt-16 min-h-[300px]'>
              <div className='myid-photo mx-auto'>             
              </div>
              <div className=' mx-auto max-w-[500px] mt-7 sm:mx-auto md:mx-0 px-5'>
                  <p>I am Ronniel Goyonoche Besara, a Bachelor of Science in Information Technology graduate. I have done work in software development, mobile app creation,frontend and backend web development.</p>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default About