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
    </div>
  )
}
