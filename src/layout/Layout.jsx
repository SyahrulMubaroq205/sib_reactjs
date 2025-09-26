import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function Layout({ children }) {
  return (
    <div className='container mx-auto max-w-7xl'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
