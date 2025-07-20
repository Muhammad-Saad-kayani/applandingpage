"use client"

import React, { useEffect } from 'react'
import HeroSection from './Hero/HeroSection'
import WhyChoose from './WhyChooseUs/WhyChoose'
import AnalyticFeature from './AnalyticFeatures/AnalyticFeature'
import Feature from './Features/Feature'
import Review from './Review/Review'
import Price from './Price/Price'
import Offer from './Offer/Offer'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {

    useEffect(()=>{
      const initAOS = async ()=>{
        await import('aos');
        AOS.init({
          duration : 1000,
          easing : 'ease',
          once : true,
          anchorPlacement : "top-bottom",
        })
      }
      initAOS()
    },[]);
  
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