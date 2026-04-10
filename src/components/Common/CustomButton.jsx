import React from 'react'

const CustomButton = ({text}) => {
  return (
   <button className='bg-blue-600 text-white w-30 h-10 shadow-blue-400 rounded-full hover:border-blue-600 cursor-pointer hover:border hover:bg-blue-700'>
    {text}
   </button>
  )
}

export default CustomButton