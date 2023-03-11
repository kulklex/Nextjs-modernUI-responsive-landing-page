import React from 'react'
import Feature from '../components/Feature'
import FeatureB from '../components/FeatureB'




export default function What() {
  return (
    <div className='bg-[#031B34] p-4 flex flex-col my-4 lg:my-8 mx-4 lg:mx-8' id="what">
      <div className='flex flex-col md:flex-row m-2 md:m-4 md:justify-between'>
        <h1 className='my-2 text-lg lg:text-xl text-white italic text-extrabold'>
          What is GPT-3?
        </h1>

        <div className='flex-[2] max-w-[390px] lg:max-w-[700px] text-blue-300 flex featureText-box-shadow p-4'>
          We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
        </div>
        
      </div>

      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mx-3 my-6 lg:mx-8 lg:my-16'>
        <h1 className='gradient-text font-extrabold text-base md:text-xl lg:text-2xl max-w-[510px]'>
          The possibilities are beyond your imagination
        </h1>
        <p className='font-medium cursor-pointer gradient-text'>
          Explore the Library
        </p>
      </div>

      <div className='flex flex-wrap mt-4 m-0'>
        <FeatureB title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <FeatureB title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <FeatureB title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}