import React from 'react'

const Navbar = ({ lang: [home, about, portfolio, contact] }) => {

    let currentScroll = 0
    let fixedClass = ''

    // const handleScroll = () => {
    //     currentScroll = window.scrollY
    //     fixedClass = currentScroll > 1000 ? 'fixed' : ''

    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    // }, [handleScroll])

    // window.scroll({ top: 0, behavior: 'smooth' })


    console.log(currentScroll)

    return (
        <nav className={`nav ${fixedClass}`}>
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
