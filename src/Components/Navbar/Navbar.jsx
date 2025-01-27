import React, { useEffect, useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import Lottie from 'lottie-react' // Import the default export from lottie-react
import menuAnimation from '../../assets/menu_animation.json' // Import the Lottie animation JSON

const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const lottieRef = useRef(null) // Create a reference for the Lottie component

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
        if (lottieRef.current) {
            const animation = lottieRef.current
            const totalFrames = animation.getDuration(true)
            const halfFrames = totalFrames / 2

            if (mobileMenu) {
                // Play the second half of the animation
                animation.goToAndPlay(halfFrames, true)
            } else {
                // Play the first half of the animation
                animation.goToAndPlay(0, true)
            }
        }
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul className={mobileMenu ? 'show_mobile_menu' : 'hide_mobile_menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Hjem</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Serviceydelser</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>Om os</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Vores Projekter</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-200} duration={500}>Vores kunder</Link></li>
                <li><Link to='contact' smooth={true} offset={-220} duration={500} className='btn contact-btn'>Kontakt os</Link></li>
            </ul>
            <div className='menu_icon' onClick={toggleMenu}>
                <Lottie
                    animationData={menuAnimation}
                    loop={false} // Disable continuous looping
                    lottieRef={lottieRef} // Attach the reference
                    style={{ height: '50px', width: '50px' }}
                />
            </div>
        </nav>
    )
}

export default Navbar   