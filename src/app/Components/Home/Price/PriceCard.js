import React from 'react'

const PriceCard = ({plan , price}) => {
  return (
    <div className='bg-white p-12 rounded-lg shadow-lg'>
      <p className='mt-8 text-xl font-semibold text-blue-600 text-center'>
        {plan} Plan
      </p>
      <div className='font-medium text-3xl mt-4 text-center'>
        $<span className='text-5xl font-medium'>{price}</span>/mo
      </div>
    </div>
  )
}

export default PriceCard
