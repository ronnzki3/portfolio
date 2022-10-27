import React from 'react'

const Works = () => {
  return (
    <div  name="work" className='bg-[#ffffff] text-black'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full p-4 mt-5'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-300 ease-in-out duration-500'>Works</p>
                <p className='text-base my-4'>Here are some of my works.</p>
            </div>

            <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                <div className='p-8 bg-[#cccccc]'>
                  <p>Dental Clinic's Online Appointment</p>
                  <p>A simple website that cater clinic's patients set their appointments online.</p>

                  <p>Technology used:</p>
                  <p>HTML, CSS, PHP, MYSQL, JQuery, Ajax</p>
                </div>

                <div className='p-8'>
                   <p>Online Auto-computed Installment</p>
                   <p>A site that auto compute the monthly installment of a company's product based on it's product unique codes. These codes are updated from time to time. </p>

                   <p>Technology used:</p>
                   <p>HTML, Sass, PHP, MYSQL, JQuery, Ajax</p>
                </div>

                <div  className='p-8'>
                   <p>Self Ordering System</p>
                   <p>A website that allows customer to take their order/s with interaction in large screen.</p>

                   <p>Technology used:</p>
                   <p>HTML, Sass, PHP, MYSQL, JQuery, Ajax</p>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Works