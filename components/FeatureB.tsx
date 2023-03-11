import React from 'react'


type Props = {
  title: string,
  text: string,
}




export default function FeatureB({title, text}: Props) {
  return (
    <div className='flex-[1] flex flex-col m-2'>
      <h1 className='my-2 flex-[1] text-lg lg:text-xl text-white italic text-extrabold'>
          {title}
      </h1>

      <div className='flex-[2] max-w-[390px] lg:max-w-[700px] flex featureText-box-shadow text-blue-300 text-light p-4'>
        {text}
      </div>
    </div>
  )
}
