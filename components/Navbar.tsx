import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);


  return (
    <div className='flex justify-between items-center p-4 lg:py-8 lg:px-24'>
      <div className='md:flex-[1] flex'>
        <Link href='/' className='hidden mr-8 md:flex md:items-center md:justify-start'>
          <Image src={logo} alt="logo" className='w-16 h-4' />
        </Link>
        <div className='flex flex-row justify-center'>
          <p className='text-white font-serif font-medium text-xs md:text-sm lg:text-base capitalize my-0 lg:mx-4 mx-1 cursor-pointer'>
            <Link href='#home'>Home</Link>
          </p>
          <p className='text-white font-serif font-medium text-xs md:text-sm lg:text-base capitalize my-0 lg:mx-4 mx-1 cursor-pointer'>
            <Link href='#what'>What is GPT?</Link>
          </p>
          <p className='text-white font-serif font-medium text-xs md:text-sm lg:text-base capitalize my-0 lg:mx-4 mx-1 cursor-pointer'>
            <Link href='#possibility'>Open AI</Link>
          </p>
          <p className='text-white font-serif font-medium text-xs md:text-sm lg:text-base capitalize my-0 lg:mx-4 mx-1 cursor-pointer'>
            <Link href='#features'>Case Studies</Link>
          </p>
          <p className='text-white font-serif font-medium text-xs md:text-sm lg:text-base capitalize my-0 lg:mx-4 mx-1 cursor-pointer'>
            <Link href='#blog'>Library</Link>
          </p>
        </div>
      </div>

      <div className='hidden md:flex justify-end items-center'>
        <p className='text-white font-serif font-medium text-xs md:text-sm lg:text-base capitalize my-0 mx-1 md:mx-2 lg:mx-4 cursor-pointer'>
          Sign in
        </p>
        <button type="button" className='p-2  text-white bg-[#FF4820] font-serif rounded-md font-medium text-xs md:text-sm lg:text-base border-none outline-none'>
          Sign up
        </button>
      </div>

      <div className='md:hidden cursor-pointer'>
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (<div className='scale-up-center'>
          <div className='flex justify-end items-end flex-col text-end right-0 top-10 mt-4 rounded shadow'>
            <p className='text-white font-serif font-medium text-xs lg:text-base capitalize my-1 lg:mx-4 mx-1 cursor-pointer'>
              Sign in
            </p>
            <button type="button" className='p-2 text-white bg-[#FF4820] font-serif rounded-md font-medium text-xs lg:text-base border-none outline-none'>
              Sign up
            </button>
          </div>
        </div>)}
      </div>
    </div>
  )
}
