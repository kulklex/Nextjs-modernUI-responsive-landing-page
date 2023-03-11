import React from 'react'
import Image from 'next/image'


interface Props{
  imgUrl: any
  date: string
  text: string
}

export default function Article({imgUrl, date, text}: Props) {
  return (
    <div className='w-full h-full flex flex-col bg-[#031B34] p-2'>
      <div className='w-full h-full bg-[#031B34]'>
        <Image src={imgUrl} alt='article' className='w-full h-full' />
      </div>

      <div className='flex flex-col justify-between p-3 h-full'>
        <div>
          <p className='font-sans text-xs lg:text-base font-bold text-white'>{date}</p>
          <h3 className='font-sans text-base md:text-xl font-extrabold text-white mb-6 mt-2 md:mt-3 lg:mt-4'>{text}</h3>
        </div>
        <p className='py-1 cursor-pointer text-xs italic text-white'>Read Full Article</p>
      </div>
    </div>
  )
}
