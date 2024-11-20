import './Hero.css'

import React from 'react'

import IntroImg from '../../assets/intro-bg.jpeg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='my-image' />          
        </div>
        <div className='content'>
          <p>HI, I AM MERCY CHERONO</p>
          <h1>Software Developer with a passion for AI</h1>
          <div>
            <Link to='/projects' className='btn' >Projects</Link>
            <Link to='/contact' className='btn btn-light' >Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default Hero

