import Image from 'next/image'
import React from 'react'

const Text = {
    title: String,
    image: String,
    linktext: String,
}

const WhyChooseCard = ({ title, image, linktext }) => {
    return (
        <div>
            <Image
                src={image}
                alt={title}
                width={80}
                height={80}
                className="object-contain mx-auto" />

            <h1 className='text-center text-lg mt-5 mb-5 font-semibold text-gray-800'>{title}</h1>

            <p className='text-gray-600 text-center font-medium text-sm mb-7'>
                Anim ad dolore exercitation dolor aliqua. 
               Id eiusmod minim commodo Lorem adipisicing </p>

            <p className='text-center font-semibold text-blue-900 hover:text-blue-950
                            transition-all duration-200 cursor-pointer'>{linktext} &#8594; </p>
        </div>
    )
}

export default WhyChooseCard
