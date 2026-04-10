import React from 'react'
import FeaturesCards from '../Common/FeaturesCards'
import { PhoneCall, Puzzle, ShieldCheck, Zap } from 'lucide-react'

const Features = () => {

   let featuresData = [
    {
        title: "24/7 Support",
        description: "Our team is available anytime to help you solve issues quickly and efficiently.",
        icon: PhoneCall
    },
    {
        title: "Fast Performance",
        description: "Experience lightning fast speed and smooth performance across all devices and platforms easily.",
        icon: Zap
    },
    {
        title: "Secure System",
        description: "We provide strong security features to protect your data from threats and unauthorized access.",
        icon: ShieldCheck
    },
    {
        title: "Easy Integration",
        description: "Seamlessly integrate our system with your existing tools without complex setup or configuration.",
        icon: Puzzle
    }
]
  return (
   <section className='px-20 py-10 bg-blue-50'>
    <div className=''>
        <h1 className='text-5xl font-bold text-center mb-10'>Our <span className='text-blue-600'>Features</span></h1>
    </div>

    <div className='grid grid-cols-4 gap-4'>
       {
        featuresData.map((feature, index) => {
            return(
                <FeaturesCards feature={feature} key={index} />
            )
        })
       }
    </div>
   </section>
  )
}

export default Features