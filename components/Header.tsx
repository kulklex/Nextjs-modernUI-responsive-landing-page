import React from 'react'
import people from '../assets/people.png'
import ai from '../assets/ai.png' 
import Image from 'next/image'

type Props = {}

export default function Header({}: Props) {
  return (
    <div id='home' className='flex flex-col md:flex-row'>
      <div className='flex flex-[4] flex-col justify-center items-start mr-10 lg:mr-20 px-4 lg:px-8 py-8 md:px-24'>
        <h1 className='gradient-text text-xl lg:text-2xl font-extrabold font-serif'>
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className='text-base lg:text-lg text-[#81AFDD]'>
          Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>

        <div className="w-full my-3 flex flex-row">
          <input type="email" placeholder=" Your Email Address" className='flex-[2] w-full min-h-[50px] font-medium border-solid border-2 border-[#031B34] bg-[#031B34] outline-none text-[#fff] font-serif'/>
          <button type="button" className='flex-[1] lg:flex-[0.6] w-full bg-[#FF4820] text-[#fff] min-h-[50px] py-0 px-1 lg:px-2 font-normal rounded-md outline-none'>
            Get Started
          </button>
        </div>

        <div className='w-full flex justify-start items-center flex-col md:flex-row mt-6'>
          <Image src={people} alt='people' className='w-[180px] lg:w-[200px] h-[40px] lg:h-[50px]' />
          <p className='m-0 ml-4 text-xs lg:text-base text-white align-center'>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      
      <div className='flex-[2] flex justify-center items-center'>
        <Image src={ai} alt="AI" className='w-full h-full' />
      </div>
    </div>
  )
}