  "use client";
  
  import React, { useEffect, useState } from 'react'
  import Link from 'next/link'
  import { navLinks } from '../../../Constant/page'
  import { HiBars3BottomRight } from 'react-icons/hi2';


  const Navbar = () => {

    const [NavBg , setNavBg ] = useState(false)

    useEffect(()=>{
      const handler = () =>{
        if (window.scrollY >= 90) setNavBg(true)
        if (window.scrollY < 90)  setNavBg(false)
       }
      window.addEventListener('scroll',handler)

       return () =>{
          window.removeEventListener('scroll',handler)
       }
    },[])

    return (
      <div className={`fixed ${NavBg ? 'bg-white shadow-md' : 'fixed'}
       w-full transition-all duration-200 h-[12vh] z-[1000] `}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
          {/* Logo */}
          <h1 className='text-xl md:text-3xl font-extrabold '>
              <span className="text-3xl md:text-4xl text-pink-600">A</span>ppify
          </h1>
          {/* Navlinks */}
          <div className='hidden lg:flex items-center space-x-10'>
            {navLinks.map((link)=>{
              return <Link href={link.url} key={link.id}>
                <p className='hover:underline underline-offset-4 decoration-orange-500 hover:decoration-orange-500'>{link.label}</p>
              </Link>
            })}
          </div>
          {/* Buttons */}
          <div className='flex items-center space-x-4'>
            <button className='md:px-8 md-py-2.5 px-6 py-2 text-white font-semibold text-base 
            bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full cursor-pointer'>Join Now</button>
            {/* Buttons */}
            <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-black lg:hidden'/>
          </div>
        </div>
      </div>
    )
  }
    
  export default Navbar
