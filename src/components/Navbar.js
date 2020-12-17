import React, { useState, useEffect, useRef, useContext } from 'react'
import AppContext from '../context/appContext'

const Navbar = () => {
    const appContext = useContext(AppContext)
    const {
        lang: {data: { nav: [home, about, portfolio, contact] } } 
    } = appContext

    const navRef = useRef()
    const [fixedClass, setFixedClass] = useState('')
    
    useEffect(() => {
        const navOffset = navRef.current.offsetTop

        const handleScroll = () => {
            const scrollOffset = window.pageYOffset
            setFixedClass(scrollOffset >= navOffset ? 'fixed' : '')
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`nav ${fixedClass}`} ref={navRef} >
            <ul>
                <li className='scroll-link' id='home'>{home}</li>
                <li className='scroll-link' id='about'>{about}</li>
                <li className='scroll-link' id='portfolio'>{portfolio}</li>
                <li className='scroll-link' id='contact'>{contact}</li>
            </ul>
        </nav>
    )
}

export default Navbar
