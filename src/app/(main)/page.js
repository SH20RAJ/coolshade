import CallToAction from '@/components/CallToAction'
import FAQs from '@/components/FAQs'
import Features from '@/components/Features'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/NavBar'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturesSection/>
      <Features/>
      <Testimonials/>
      <CallToAction/>
      <FAQs/>
      <Footer/>
    </div>
  )
}
