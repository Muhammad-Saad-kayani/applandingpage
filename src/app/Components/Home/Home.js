import React from 'react'
import HeroSection from './Hero/HeroSection'
import WhyChoose from './WhyChooseUs/WhyChoose'
import AnalyticFeature from './AnalyticFeatures/AnalyticFeature'
import Feature from './Features/Feature'
import Review from './Review/Review'
import Price from './Price/Price'
import Offer from './Offer/Offer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <WhyChoose />
      <AnalyticFeature />
      <Feature />
      <Review />
      <Price />
      <Offer />
    </div>
  )
}

export default Home