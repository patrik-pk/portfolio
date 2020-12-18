import React, { useContext } from 'react'
import AppContext from '../context/appContext'
import bg from '../img/background.jpg'
import cz from '../data/lang/cz'
import en from '../data/lang/en'

const Header = () => {
    const appContext = useContext(AppContext)
    const { 
        lang: {
            type: langType,
            data: {
                header: {
                    startButton
                }
            }
        }, 
        setLang,
        aboutOffset 
    } = appContext

    return (
        <header className='header' style={{ backgroundImage: `url(${bg})` }}>
            <div className='language-options'>
                <button 
                    className={`lang-btn ${langType === 'cz' ? 'active' : ''}`} 
                    onClick={() => setLang('cz', cz)} 
                    type='button' 
                    id='lang_cs'
                >CZ</button>
                <button 
                    className={`lang-btn ${langType === 'en' ? 'active' : ''}`} 
                    onClick={() => setLang('en', en)}
                    type='button' 
                    id='lang_en'
                >EN</button>
            </div>

            <div className='headings'>
                <h1>Patrik Pukanec</h1>
                <h2>Frontend Developer</h2>
                <button 
                    className='start-btn' 
                    onClick={() => window.scroll({ top: aboutOffset, behavior: 'smooth' })}
                >{ startButton }</button>
            </div>
        </header>
    )
}

export default Header
