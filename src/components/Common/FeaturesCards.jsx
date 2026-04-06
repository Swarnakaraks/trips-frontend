import { Angry } from 'lucide-react'
import React from 'react'

const FeaturesCards = ({feature}) => {
  return (
    <div className='border border-gray-400 rounded-md p-4 '>
            <feature.icon size={40} className='mb-4 text-blue-600'/>
            <h1 className='text-2xl font-medium mb-4'>{feature.title}</h1>
            <p className='text-gray-600'>{feature.description}</p>
        </div>
  )
}

export default FeaturesCards