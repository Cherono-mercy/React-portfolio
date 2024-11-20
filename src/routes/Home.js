import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import Work from '../components/Work'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Footer />
    </div>
  )
}

export default Home