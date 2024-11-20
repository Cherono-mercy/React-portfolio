import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImage from '../components/HeroImage/HeroImage'
import ContactForm from '../components/ContactForm/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT ME." text="Let's have a chat" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact