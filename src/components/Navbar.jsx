import React from 'react'
import CustomButton from './common/CustomButton'

const Navbar = () => {
  return (
  <header className='relative z-50 px-20 py-6 flex justify-between items-center'>
    {/*left part*/}
    <div>
      <h1 className='text-4xl font-extrabold text-white'>Trip<span className='text-blue-600'>Bridge</span></h1>
      <div className='bg-white rounded-full w-4 h-4'></div>
    </div>

    {/*right part */}
    <div className='flex items-center justify-center gap-10 bg-black/20 backdrop-blur-md w-100 h-12 rounded-full border border-gray-600'>
      <nav className='space-x-8 text-[#d3d3d3] font-medium [&>a]:hover:text-white [&>a]:hover:underline'>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/help">Help</a>
      <a href="/contact">Contact</a>
      </nav>
    </div>
    <div>
       <CustomButton text={"Login"}/>
     </div>
  </header>
  )
}

export default Navbar