import Features from '@/components/Features'
import FeaturesSection from '@/components/FeaturesSection'
import Hero from '@/components/Hero'
import Navbar from '@/components/NavBar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturesSection/>
      <Features/>
    </div>
  )
}
