import React from 'react'
import { FaBook, FaCog, FaDesktop, FaHeadset, FaInfinity, FaLaptop, FaLayerGroup, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'

const Feature = () => {
    const features = [
        {
            icon : <FaLayerGroup className='text-red-500' />,
            text : "50+ Unique Design Block",
        },
        {
            icon : <FaLaptop className='text-blue-500' />,
            text : "Multiple Layout",
        },
        {
            icon : <FaMobileAlt className='text-yellow-500' />,
            text : "Mobile Fast",
        },
        {
            icon : <FaDesktop className='text-purple-500' />,
            text : "Mobile Fast",
        },
        {
            icon : <FaCog className='text-teal-500' />,
            text : "Mobile Fast",
        },
        {
            icon : <FaHeadset className='text-green-500' />,
            text : "Mobile Fast",
        },
        {
            icon : <FaInfinity className='text-pink-500' />,
            text : "Mobile Fast",
        },
        {
            icon : <FaBook className='text-indigo-500' />,
            text : "Mobile Fast",
        },
        {
            icon : <FaShieldAlt className='text-orange-500' />,
            text : "Mobile Fast",
        },
    ];

  return (
    <div className='bg-pink-50 pt-20 pb-20'>
      <div className='w-[80%] mx-auto text-center '>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>
            Its Everything You Will Ever Need
        </h1>
        <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {features.map((Feature,index)=>
                <div data-aos="flip-right" data-aos-anchor-placement="top-center" 
                     data-aos-delay={`${index * 100}`}
                 key={index} className='flex items-center justify-center p-4 bg-white
                                            rounded-lg shadow-md space-x-3'>
                    <div className='text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 flex items-center
                                    justify-center flex-col rounded-full'>
                        <span className=''>{Feature.icon}</span>
                    </div>
                    <span className='font-semibold'>{Feature.text}</span>
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Feature
