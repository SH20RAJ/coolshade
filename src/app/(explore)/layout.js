import HomeNav from '@/components/explorte/Nav'
import Footer from '@/components/Footer'
import React from 'react'

export default function layout({ children }) {
  return (
    <div>
      <HomeNav />
      {children}
      <Footer />
    </div>
  )
}
