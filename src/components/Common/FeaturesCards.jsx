import { Angry } from 'lucide-react'
import React from 'react'

const FeaturesCards = ({feature}) => {
  return (
    <div className=' rounded-md p-4 bg-white shadow-2xl hover:shadow-gray-400 hover:scale-105 duration-300 cursor-pointer'>
            <feature.icon size={40} className='mb-4 text-blue-600'/>
            <h1 className='text-2xl font-medium mb-4'>{feature.title}</h1>
            <p className='text-gray-600'>{feature.description}</p>
        </div>
  )
}

export default FeaturesCards