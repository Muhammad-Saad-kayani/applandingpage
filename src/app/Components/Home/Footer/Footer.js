import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white py-10'> 
      <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <div>
                <h1 className='text-xl md:text-3xl font-extrabold '>
              <span className="text-3xl md:text-4xl text-pink-600">A</span>ppify
                </h1>
                <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600'>
                    Laboris do proident aliqua fugiat quis tempor proident duis exercitation laborum ipsum sit.
                </p>
            </div>
            <div>
            <h3 className='text-lg font-semibold text-gray-800'>About Us</h3>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                <li>Support Center</li>
                <li>Customer Support</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Popular Campaign</li>
            </ul>
            </div>
            <div>
            <h3 className='text-lg font-semibold text-gray-800'>Our Information</h3>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                <li>Support Center</li>
                <li>Customer Support</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Popular Campaign</li>
            </ul>
            </div>
            <div>
            <h3 className='text-lg font-semibold text-gray-800'>Contact Info</h3>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                <li>Support Center</li>
                <li>Customer Support</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Popular Campaign</li>
            </ul>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
