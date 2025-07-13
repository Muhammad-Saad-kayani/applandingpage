import { navLinks } from '@/app/Constant/page'
import Link from 'next/link'
import React from 'react'

const MobileNav = () => {
  return (
   <div> 
    <div className='fixed inset-0 transform transition-all duration-500 z-[1000]
     bg-black opacity-60 w-full h-screen'> 
    </div>
      {/* navlink */}
      <div className='text-white fixed justify-center flex flex-col h-full transform transition-all
      duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006]'>
        {navLinks.map((link)=>{
              return <Link href={link.url} key={link.id}>
                <p className=' text-white 
                text-[20px] ml-12 border-b-2 pb-1 border-white sm-text-[30px] inline-block'>{link.label}</p>
              </Link>
            })}
      </div>
  </div>

  )
}

export default MobileNav
