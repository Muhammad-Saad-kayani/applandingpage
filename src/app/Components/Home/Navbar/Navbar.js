import React from 'react'
import Link from 'next/link'
import { navLinks } from '../../../Constant/page'


const Navbar = () => {
  return (
    <div className='w-full transition-all duration-200 h-[12vh] z-[1000] '>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* Logo */}
        <h1 className='text-xl md:text-3xl font-extrabold '>
            <span className="text-3xl md:text-4xl text-pink-600">A</span>ppify
        </h1>
        {/* {Navlinks} */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link)=>{
            return <Link href={link.url} key={link.id}>
              <p className='hover:underline underline-offset-4 decoration-orange-500 hover:decoration-orange-500'>{link.label}</p>
            </Link>
          })}
        </div>
      </div>
    </div>
  )
}
  
export default Navbar
