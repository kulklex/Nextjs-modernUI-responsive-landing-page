import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Brand from '../components/Brand'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import WhatGPT3 from './what'
import Features from './features'
import Possibility from './possibility'
import Blog from './blog'



const Home: NextPage = () => {
  return (
    <div className='py-2'>
      <div className='gradient'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CallToAction/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home
