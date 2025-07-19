import React from 'react'
import { FaCheck } from 'react-icons/fa'

const PriceCard = ({plan , price}) => {
  return (
    <div className='bg-white p-12 rounded-lg shadow-lg'>
      <p className='mt-8 text-xl font-semibold text-blue-600 text-center'>
        {plan} Plan
      </p>
      <div className='font-medium text-3xl mt-4 text-center'>
        $<span className='text-5xl font-medium'>{price}</span>/mo
      </div>
      <p className='mt-2 text-center text-gray-600'>Per User</p>
      <div className='mt-10'>
        <div className='text-center mb-4 flex items-center space-x-3'>
          <div className='text-center w-8 h-8 bg-gray-300 rounded-full justify-center items-center
          flex flex-col'>
            <FaCheck className='text-green-500' />
          </div>
          <p className='text-sm font-semibold text-gray-700'>Unlimited Collection</p>
        </div>
        <div className='text-center mb-4 flex items-center space-x-3'>
          <div className='text-center w-8 h-8 bg-gray-300 rounded-full justify-center items-center
          flex flex-col'>
            <FaCheck className='text-green-500' />
          </div>
          <p className='text-sm font-semibold text-gray-700'>Debt Collection SMS Texts</p>
        </div>
        <div className='text-center mb-4 flex items-center space-x-3'>
          <div className='text-center w-8 h-8 bg-gray-300 rounded-full justify-center items-center
          flex flex-col'>
            <FaCheck className='text-green-500' />
          </div>
          <p className='text-sm font-semibold text-gray-700'>Debt Collection Letters</p>
        </div>
        <div className='text-center mb-4 flex items-center space-x-3'>
          <div className='text-center w-8 h-8 bg-gray-300 rounded-full justify-center items-center
          flex flex-col'>
            <FaCheck className='text-green-500' />
          </div>
          <p className='text-sm font-semibold text-gray-700'>Debt Collection Agencies</p>
        </div> 
        <div className='text-center mb-4 flex items-center space-x-3'>
          <div className='text-center w-8 h-8 bg-gray-300 rounded-full justify-center items-center
          flex flex-col'>
            <FaCheck className='text-green-500' />
          </div>
          <p className='text-sm font-semibold text-gray-700'>Debt Collection Agencies</p>
        </div>
        <div className='mt-8'>
            <button className='block w-full p-4 text-base md:text-lg text-white font-bold
            hover:bg-blue-950 transition-all duration-300 bg-blue-900 cursor-pointer'>Start 14 Days Trial</button>
        </div>
      </div>
    </div>
  )
}

export default PriceCard
