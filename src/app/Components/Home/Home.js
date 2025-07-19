import React from 'react'
import HeroSection from './Hero/HeroSection'
import WhyChoose from './WhyChooseUs/WhyChoose'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <WhyChoose />
    </div>
  )
}

export default Home