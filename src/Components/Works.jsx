import React from 'react'

const Works = () => {
  return (
    <div  name="works" className='bg-[#ffffff] text-black z-0'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full mt-5'>
            <div>
                <p className='text-2xl font-bold inline border-b-4 border-pink-300 ease-in-out duration-500'>Some things I've built</p>
                {/* <p className='text-base my-4'>Here are some things I've built.</p> */}
            </div>

            <div className='w-full grid sm:grid-cols-1 mx-5 sm:px-8 sm:mx-5 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-8 mt-5'>
               
                <div className='bg-gray-300 flex flex-col w-full min-h-[350px] h-auto hover:scale-105 duration-300 shadow-xl'>
                  <div className='dentalImage h-[250px] w-full'>                    
                  </div>
                  <div className='bg-gray-300 p-5 min-h-[300px]'>
                  <p className='font-medium text-lg'>Dental Clinic's Online Appointment</p>
                    <p className='mt-2 text-lg'>A simple website that cater clinic's patients set their appointments online.</p>
                    {/* <p className='text-sm mt-3'>Technology used:</p> */}
                    <p className='text-sm mt-4'>HTML, CSS, PHP, MYSQL, JQuery, Ajax</p>
                    <a className='text-xs mx-auto inline-block py-2 px-4 bg-green-500 hover:bg-green-400 rounded-lg mt-5' href="https://www.dlcdev.great-site.net/?i=1" target="_blank" rel="noreferrer">Visit Site</a>
                  </div>
                </div>

                <div className='bg-gray-300 flex flex-col w-full min-h-[350px] h-auto hover:scale-105 duration-300 shadow-xl'>
                  <div className='flgImage h-[250px] w-full'>                    
                  </div>
                  <div className='bg-gray-300 p-5'>
                  <p className='font-medium text-lg'>Online Auto-computed Installment</p>
                    <p className='mt-2 text-lg'>A site that auto compute the monthly installment of a company's product based on it's product unique codes. These codes are updated from time to time.</p>
                    {/* <p className='text-sm mt-3'>Technology used:</p> */}
                    <p className='text-sm mt-4'>HTML, Sass, PHP, MYSQL, JQuery, Ajax</p>
                    <a className='text-xs mx-auto inline-block py-2 px-4 bg-green-500 hover:bg-green-400 rounded-lg mt-5' href="https://flg.rf.gd/?i=1" target="_blank" rel="noreferrer">Visit Site</a>
                  </div>
                </div>

                <div className='bg-gray-300 flex flex-col w-full min-h-[350px] h-auto hover:scale-105 duration-300 shadow-xl rounded-full'>
                  <div className='mxImage h-[250px] w-full'>                    
                  </div>
                  <div className='bg-gray-300 p-5'>
                  <p className='font-medium text-lg'>Self Ordering System</p>
                    <p className='mt-2 text-lg'>A website that allows customer to take their order/s with interaction in large screen.</p>
                    {/* <p className='text-sm mt-3'>Technology used:</p> */}
                    <p className='text-sm mt-4'>HTML, Sass, PHP, MYSQL, JQuery, Ajax</p>
                    <a className='text-xs mx-auto inline-block py-2 px-4 bg-green-500 hover:bg-green-400 rounded-lg mt-5' href="https://mxdhub.great-site.net/login.php" target="_blank" rel="noreferrer">Visit Site</a>
                  </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Works