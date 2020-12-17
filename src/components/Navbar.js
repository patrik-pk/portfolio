import React, { useState, useEffect, useRef, useContext } from 'react'
import AppContext from '../context/appContext'

const Navbar = () => {
    const appContext = useContext(AppContext)
    const {
        lang: {data: { nav: [home, about, portfolio, contact] } },
        aboutOffset,
        portfolioOffset,
        contactOffset 
    } = appContext

    const navRef = useRef()
    const [navOffset, setNavOffset] = useState(0)
    
    const [fixedClass, setFixedClass] = useState('')
    const [homeClass, setHomeClass] = useState('')
    const [aboutClass, setAboutClass] = useState('')
    const [portfolioClass, setPortfolioClass] = useState('')
    const [contactClass, setContactClass] = useState('')

    
    useEffect(() => {
        setNavOffset(navRef.current.offsetTop)

        const handleScroll = () => {
            const scrollOffset = window.pageYOffset
            setFixedClass(scrollOffset >= navOffset ? 'fixed' : '')

            const toleratedOffset = window.innerHeight * 0.4
            setHomeClass((scrollOffset >= 0 && scrollOffset < aboutOffset - toleratedOffset) ? 'active' : '')
            setAboutClass((scrollOffset >= aboutOffset - toleratedOffset && scrollOffset < portfolioOffset - toleratedOffset) ? 'active' : '')
            setPortfolioClass((scrollOffset >= portfolioOffset - toleratedOffset && scrollOffset < contactOffset - toleratedOffset) ? 'active' : '')
            setContactClass((scrollOffset >= contactOffset - toleratedOffset) ? 'active' : '')
        }

        window.addEventListener('scroll', handleScroll)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navOffset])

    const scrollTo = position => {
        window.scroll({ top: position, behavior: 'smooth' })
    }

    return (
        <nav className={`nav ${fixedClass}`} ref={navRef} >
            <ul>
                <li className={`scroll-link ${homeClass}`} onClick={() => scrollTo(0)}>{home}</li>
                <li className={`scroll-link ${aboutClass}`} onClick={() => scrollTo(aboutOffset)}>{about}</li>
                <li className={`scroll-link ${portfolioClass}`} onClick={() => scrollTo(portfolioOffset - 30)}>{portfolio}</li>
                <li className={`scroll-link ${contactClass}`} onClick={() => scrollTo(contactOffset - 30)}>{contact}</li>
            </ul>
        </nav>
    )
}

export default Navbar
