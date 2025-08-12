import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import ServiceGrid from '../components/ServiceGrid'
import ServiceProcess from '../components/ServiceProcess'
import ServiceCaseStudy from '../components/ServiceCaseStudy'
import ServiceTestimonials from '../components/ServiceTestimonials'
import ServiceCTA from '../components/ServiceCTA'

const Services = () => {
  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <ServiceHero />
      <ServiceGrid/>
      <ServiceProcess/>
      <ServiceCaseStudy/>
      <ServiceTestimonials/>
      <ServiceCTA/>
      <Footer/>
    </div>
  )
}

export default Services
