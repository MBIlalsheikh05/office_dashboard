import React from 'react'
import Image from 'next/image'
import logo from '@/public/vercel.svg'

export const Header = () => {
  return (

    // header color =bg-gray-900\  bg-[#1e1e1e]
    <header className='bg-[#1e1e1e] shadow-lg border-b border-[#1f1f1f] mx-4 sm:mx-6 lg:mx-8 rounded-lg'>
        <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 flex items-center justify-between'>
            <h1 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-50'>Dashboard</h1>
        
        <div className='flex items-center space-x-3 sm:space-x-6'>
            <Image 
            src= {logo}
            alt="uk flag"
            width={32}
            height={32}
            className='rounded-full shadow-md cursor-pointer'
            />   
        </div>
        </div>
    </header>
  )
}

export default Header;
