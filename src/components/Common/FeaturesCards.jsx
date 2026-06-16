import React from 'react'
import { motion } from 'framer-motion'
import { Plane } from 'lucide-react'

const FeaturesCards = ({ feature }) => {
  return (
    <motion.div
      whileHover={{ y:-12 }}
      transition={{ duration:.4 }}
      className='flex flex-col items-center justify-center group relative overflow-hidden rounded-[32px] px-8 py-4 bg-white border border-blue-100 hover:shadow-xl cursor-pointer'
    >

     
      <div
        className='relative h-20 w-20 mb-4 p-4 rounded-3xl'
      >

        <feature.icon
          size={55}
          className={`${feature.iconcolor}`}
        />

      </div>

      <h1 className='text-2xl font-bold text-gray-600 text-center mb-4 duration-300'>
        {feature.title}
      </h1>

      <p className='text-gray-500 leading-7 text-center duration-300'>
        {feature.description}
      </p><div className='mt-4 h-1 rounded-full w-0 bg-linear-to-r from-orange-600 to-orange-400 group-hover:w-full duration-700'/>

      {/* animated line */}
      

    </motion.div>
  )
}

export default FeaturesCards