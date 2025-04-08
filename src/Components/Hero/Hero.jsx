import React from 'react'
import { Link } from 'react-scroll'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

function Hero() {
  return (
    <div className='hero container'>
      <Link 
        to="contact" 
        smooth={true} 
        offset={-220} 
        duration={500} 
        className="offer-sign"
      > 
        <div className="offer-sign-text">
          <span className="offer-sign-text-large">RING NU</span>
          <br />
          <span className="offer-sign-text-small">28 49 34 81</span>
        </div>
        <div className="inner-shape"></div>
        <div className="outer-shape"></div>
      </Link>

      {/* Hero Text Section */}
      <div className="hero-text">
        <h1>AGUA miximale</h1>
        <p>
          Kvalitetshåndværk til tiden - Lad os gøre dit projekt nemt, effektivt og problemfrit.
        </p>
        <Link to='program' smooth={true} offset={-240} duration={500} className='btn'>
          Se mere <img src={dark_arrow} alt='' />
        </Link>
      </div>
    </div>
  )
}

export default Hero;
