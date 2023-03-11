import React from 'react'
import Image from 'next/image'
import google from '../assets/google.png'
import shopify from '../assets/shopify.png'
import dropbox from '../assets/dropbox.png'
import slack from '../assets/slack.png'
import atlassian from '../assets/atlassian.png'





export default function Brand() {
  return (
    <div className='flex flex-wrap justify-center items-center py-2 lg:py-4 px-2 lg:px-4'>
      <div className='flex flex-[1] justify-center items-center m-2 lg:m-4 min-w-[150px] max-w-[120px]'>
        <Image src={google} alt="google" className=''  />
      </div>
      <div className='flex flex-[1] justify-center items-center m-2 lg:m-4 min-w-[150px] max-w-[120px]'>
        <Image src={shopify} alt="shopify" className=''  />
      </div>
      <div className='flex flex-[1] justify-center items-center m-2 lg:m-4 min-w-[150px] max-w-[120px]'>
        <Image src={dropbox} alt="dropbox" className=''  />
      </div>
      <div className='flex flex-[1] justify-center items-center m-2 lg:m-4 min-w-[150px] max-w-[120px]'>
        <Image src={slack} alt="slack" className=''  />
      </div>
      <div className='flex flex-[1] justify-center items-center m-2 lg:m-4 min-w-[150px] max-w-[120px]'>
        <Image src={atlassian} alt="atlassian" className=''  />
      </div>
    </div>
  )
}
