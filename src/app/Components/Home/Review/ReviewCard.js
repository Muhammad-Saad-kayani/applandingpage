import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'


    

const ReviewCard = ({name , image}) => {
  return (
    <div className='w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg'>
      <div>
        <FaQuoteLeft className='w-14 h-14 opacity-10 absolute top-8' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-center'>
        <div className='col-span-3 order-2 lg:order-1'>
            <p className='mt-8 ml-5 text-sm sm:text-2xl md:text-lg font-medium leading-[1.5rem] 
            sm:leading-[1.8rem] md:leading-[2.5rem]'>
                Incididunt laboris ex esse ea commodo elit elit in elit.
                Quis nostrud excepteur aliquip dolor consectetur nulla et nulla esse laborum est consectetur.
                Id aute labore aliqua non cillum enim et id labore irure ea.
                Eu tempor laborum officia occaecat est laboris quis incididunt eu ad deserunt fugiat.
            </p>
            <div className='flex items-center mt-6'>
                <FaStar className='text-yellow-600 w-6 h-6' />
                <FaStar className='text-yellow-600 w-6 h-6' />
                <FaStar className='text-yellow-600 w-6 h-6' />
                <FaStar className='text-yellow-600 w-6 h-6' />
                <FaStar className='text-yellow-600 w-6 h-6' />
            </div>
            <h1 className='text-xl font-semibold mt-8'>{name}</h1>
            <p className='mt-2 text-lg text-gray-600 font-medium mb-6'>Full Stack Developer</p>
        </div>
        <div className='col-span-2 mx-auto order-1 lg:order-2'>
            <Image
                src={image}
                alt={name}
                width={250}
                height={120}
                className='rounded-full'
            />
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
