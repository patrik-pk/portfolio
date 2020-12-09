import React from 'react'

const Navbar = ({ lang: [home, about, portfolio, contact] }) => {
    return (
        <nav className='nav'>
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
