import React from 'react'
import Article from '../components/Article'
import blog01 from '../assets/blog01.png'
import blog02 from '../assets/blog02.png'
import blog03 from '../assets/blog03.png'
import blog04 from '../assets/blog04.png'
import blog05 from '../assets/blog05.png'




export default function Blog() {
  return (
    <div id='blog' className='p-2 lg:m-2 py-2 flex flex-col'>
      <div className='w-full text-left mb-8'>
        <h1 className='gradient-text font-extrabold font-serif text-3xl md:text-4xl lg:text-5xl'>
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>

      <div className='flex flex-col md:flex-row'>
        <div className='flex-[0.75] mr-3 py-4'>
          <Article imgUrl={blog01} date="Sep 26, 2023" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        </div>

        <div className='flex-[1] grid grid-cols-2 gap-2 md:gap-4 py-4 '>
          <Article imgUrl={blog02} date="Sep 26, 2023" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog03} date="Sep 26, 2023" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog04} date="Sep 26, 2023" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog05} date="Sep 26, 2023" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        </div>
      </div>
    </div>
  )
}
