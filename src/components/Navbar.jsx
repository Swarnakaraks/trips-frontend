import React from 'react'
import CustomButton from './common/CustomButton'

const Navbar = () => {
  return (
  <header className='px-20 py-6 flex justify-between items-center bg-white z-10 sticky '>
    {/*left part*/}
    <div>
      <h1 className='text-4xl font-extrabold text-blue-600'>TripBridge</h1>
      <div className='bg-white rounded-full w-4 h-4'></div>
    </div>

    {/*right part */}
    <div className='flex items-center gap-10'>
      <nav className='space-x-8 text-gray-600 font-medium [&>a]:hover:text-black [&>a]:hover:underline'>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/help">Help</a>
      <a href="/contact">Contact</a>
      </nav>
       <CustomButton text={"Login"}/>
    </div>
  </header>
  )
}

export default Navbar