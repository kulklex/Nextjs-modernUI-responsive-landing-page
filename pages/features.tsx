import React from 'react'
import Feature from '../components/Feature'


export default function Features() {
 
  const featuresData = [
    {
      title: 'Improving end distrusts instantly',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
      title: 'Become the tended active',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      title: 'Message or am nothing',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      title: 'Really boy law county',
      text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
  ];
 
 
  return (
    <div className='p-4 lg:p-8 w-full flex justify-between flex-col lg:flex-row' id='features'>
      <div className='lg:flex-[0.8] flex justify-start flex-col align-start text-left mr-10 '>
        <h1 className='gradient-text font-extrabold text-base md:text-xl lg:text-2xl m-1 mb-4'>
          The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.
        </h1>
        <p className='text-[#FF8A71] italic text-medium m-2'>
          Request Early Access to Get Started
        </p>
      </div>

      <div className='flex flex-[1.5] justify-start items-center flex-col'>
        {featuresData.map((item, index) => (
          <Feature key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  )
}
