import React from 'react'
import bg from '../img/background.jpg'

const Header = ({ 
    lang: { 
        type: langType, 
        data: { 
            header: { 
                startButton
            } 
        } 
    }, 
    setLang,
    cz,
    en 
}) => {

    return (
        <header className='header' style={{ backgroundImage: `url(${bg})` }}>
            <div className='language-options'>
                <button 
                    className={`lang-btn ${langType === 'cz' ? 'active' : ''}`} 
                    onClick={() => setLang({ type: 'cz', data: cz })} 
                    type='button' 
                    id='lang_cs'
                >CZ</button>
                <button 
                    className={`lang-btn ${langType === 'en' ? 'active' : ''}`} 
                    onClick={() => setLang({ type: 'en', data: en })}
                    type='button' 
                    id='lang_en'
                >EN</button>
            </div>

            <div className='headings'>
                <h1>Patrik Pukanec</h1>
                <h2>Frontend Developer</h2>
                <button className='start-btn'>{ startButton }</button>
            </div>
        </header>
    )
}

export default Header
