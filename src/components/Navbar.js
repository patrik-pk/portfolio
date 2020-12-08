import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li className='scroll-link' id='home'>Home</li>
                <li className='scroll-link' id='about'>About</li>
                <li className='scroll-link' id='portfolio'>Portfolio</li>
                <li className='scroll-link' id='contact'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
