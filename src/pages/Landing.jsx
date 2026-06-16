import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/LandingComponents/Hero'
import Features from '../components/LandingComponents/Features'
import FAQ from '../components/LandingComponents/FAQ'
import Contact from '../components/LandingComponents/Contact'
import About from '../components/LandingComponents/About'
import TravelPackages from '../components/LandingComponents/TravelPackages'
import TrustedCompanies from '../components/LandingComponents/TrustedCompanies'
import Footer from '../components/LandingComponents/Footer'
import Testimonial from '../components/LandingComponents/Testimonial'
import Banner from '../components/LandingComponents/Banner'



const Landing = () => {
  return (
<div>
<Navbar/>
<Hero/>
<Features/>
<About/>
<TravelPackages/>
<TrustedCompanies/>
<FAQ/>
<Banner/>
<Testimonial/>
<Contact/>
<Footer/>
</div>
  )
}

export default Landing