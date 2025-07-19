import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const AnalyticFeature = () => {
  return (
    <div className='pt-24 pb-16'>
      <div className='w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>

        <div>
            <Image 
                src="/images/a.jpg"
                alt="image"
                width={500}
                height={500}
                className='object-contain'
            />
        </div>

        <div className='p-4'>
            <h1 className='text-base font-semibold text-orange-500'>
                Audience Tracking And Insights</h1>
            <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>
                Implementing analytic features encourages a data-driven approach</h1>
            <p className='mt-4 text-gray-600 text-sm font-medium leading-[2rem]'>Et dolore nisi velit laborum. Excepteur tempor reprehenderit duis labore eiusmod voluptate nulla. Sit esse fugiat fugiat laboris cillum ullamco est fugiat. Eiusmod ipsum in esse labore consectetur. Incididunt nulla tempor aliqua veniam. Adipisicing non tempor excepteur irure sunt ad. Quis adipisicing dolor Lorem veniam enim mollit.</p>
            <ul className='mt-7 space-y-2 text-gray-800'>
                <li className='flex items-center font-semibold'>
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Chat Prompt Module Support
                </li>
                <li className='flex items-center font-semibold'>
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Enjoy Unlimited Features
                </li>
                <li className='flex items-center font-semibold'>
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Manage Smooth Conversation
                </li>
            </ul>
            <button className='mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold
                                rounded-full hover:bg-blue-800 transition-all duration-200
                                hover:text-white cursor-pointer'>
                Explore More &rarr; </button>
        </div>

      </div>
    </div>
  )
}

export default AnalyticFeature
