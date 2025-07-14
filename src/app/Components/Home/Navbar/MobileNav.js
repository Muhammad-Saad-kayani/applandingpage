import { navLinks } from '@/app/Constant/page'
import { CgClose } from 'react-icons/cg';
import Link from 'next/link'
import React from 'react'

const MobileNav = ({closeNav , showNav}) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"

  return (
   <div> 
    <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1000]
     bg-black opacity-60 w-full h-screen`}> 
    </div>
      {/* navlink */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all
      duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006]`}>
        {navLinks.map((link)=>{
              return <Link href={link.url} key={link.id}>
                <p className=' text-white 
                text-[20px] ml-12 border-b-2 pb-1 border-white sm-text-[30px] inline-block'>{link.label}</p>
              </Link>
            })}
            <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
      </div>
      
  </div>

  )
}

export default MobileNav
