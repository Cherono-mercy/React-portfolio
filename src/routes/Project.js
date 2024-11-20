import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImage from '../components/HeroImage/HeroImage'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PROJECTS." text="Some of my most recent work" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project