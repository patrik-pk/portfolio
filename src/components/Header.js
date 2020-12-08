import React from 'react'
import bg from '../img/background.jpg'

const Header = () => {
    return (
        <header className='header' style={{ backgroundImage: `url(${bg})` }}>
            <div className='language-options'>
                <button type='button' className='lang-btn' id='lang_cs'>CZ</button>
                <button type='button' className='lang-btn active' id='lang_en'>EN</button>
            </div>

            <div className='headings'>
                <h1>Patrik Pukanec</h1>
                <h2>Frontend Developer</h2>
                <button className='start-btn'>View My Work</button>
            </div>
        </header>
    )
}

export default Header
