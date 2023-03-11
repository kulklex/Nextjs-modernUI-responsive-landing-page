import React from 'react'
import Image from 'next/image'
import possibilityImage from '../assets/possibility.png'



export default function Possibility() {
  return (
    <div className='p-4 lg:p-8 flex flex-col md:flex-row' id="possibility">
      <div className='flex-[1] flex justify-start items-center mr-8'>
        <Image src={possibilityImage} alt="possibility" className='w-full h-full'/>
      </div>

      <div className='flex-[1] flex flex-col justify-end items-start mt-4'>
        <h4 className='text-[#71E5FF] text-base font-medium font-sans'> Request Early Access to Get Started </h4>
        <h1 className='gradient-text m-1 text-3xl font-extrabold font-mono'>
          The possibilities are <br /> beyond your imagination
        </h1>
        <p className='font-sans font-normal mb-4 lg:mb-6 text-[#81AFDD]'>
          Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <h4 className='text-[#ff8A71] text-base font-medium font-sans'>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}
