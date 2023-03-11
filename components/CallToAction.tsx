import React from 'react'

export default function CallToAction() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center m-4 lg:m-8 p-2 lg:p-8 rounded-lg featureTitle-bg'>
      <div className='flex flex-col text-left text-[#fff] p-1'>
        <p className='font-sans text-xs lg:text-sm font-medium'>Request Early Access to Get Started</p>
        <h3 className='font-serif text-lg lg:text-2xl font-bold lg:font-extrabold my-1'>Register Today & start exploring the endless possibilities.</h3>
      </div>

      <div className='flex justify-center items-center m-2'>
        <button type="button" className='bg-[#000] text-[#fff] text-sm lg:text-base font-bold p-2 lg:p-4 outline-none border-0 min-w-[150px] rounded-xl lg:rounded-2xl'>
          Get Started
        </button>
      </div>
    </div>
  )
}
