import React from 'react'
import Image from 'next/image'
import Logo from '../assets/logo.svg'


export default function Footer() {
  return (
    <div className='m-2 p-2 text-white flex flex-col justify-center items-center bg-[#031B34]'>
      <div className='w-full text-center mb-6 md:mb-8 lg:mb-10'>
        <h1 className='gradient-text font-extrabold font-serif text-xl md:text-2xl lg:text-3xl'>
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className='flex justify-center items-center p-2 text-center cursor-pointer mb-8 md:mb-12 border '>
        <p className='text-base text-white'>Request Early Access</p>
      </div>

      <div className='flex justify-between items-start flex-row flex-wrap w-full text-left'>
        <div className='flex flex-col w-[250px] m-2'>
          <Image src={Logo} alt='logo' className='w-[118px] h-[30px] mb-4' />
          <p className='font-serif text-sm text-white'>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className='w-[250px] m-1 flex justify-start flex-col'>
          <h4 className='font-serif my-2 text-base font-bold'>Links</h4>
          <p className='footer-links-p'>Overons</p>
          <p className='footer-links-p'>Social Media</p>
          <p className='footer-links-p'>Counters</p>
          <p className='footer-links-p'>Contact</p>
        </div>
        <div className='w-[250px] m-1 flex justify-start flex-col'>
          <h4 className='font-serif my-2 text-base font-bold'>Company</h4>
          <p className='footer-links-p'>Terms & Conditions </p>
          <p className='footer-links-p'>Privacy Policy</p>
          <p className='footer-links-p'>Contact</p>
        </div>
        <div className='w-[250px] m-1 flex justify-start flex-col'>
          <h4 className='font-serif my-2 text-base font-bold'>Get in touch</h4>
          <p className='footer-links-p'>Crechterwoord K12 182 DK Alknjkcb</p>
          <p className='footer-links-p'>085-132567</p>
          <p className='footer-links-p'>info@payme.net</p>
        </div>
      </div>

      <div className='mt-6 text-center w-full'>
        <p className='italic'>@2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}
