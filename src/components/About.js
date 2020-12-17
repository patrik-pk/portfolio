import React, { useContext, useRef, useEffect } from 'react'
import AppContext from '../context/appContext'

const About = () => {
    const appContext = useContext(AppContext)
    const {
        lang: { data: { about: {
            heading,
            text
        }}},
        setAboutOffset,
    } = appContext

    const aboutRef = useRef()

    useEffect(() => {
        setAboutOffset(aboutRef.current.offsetTop)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className='about' ref={aboutRef}>
            <div className='about-container'>

                <div className='section-heading'>
                    <h2 id='about-heading'>{heading}</h2>
                </div>

                <div className='content'>
                    <div className='text' id='about-text'>{text}</div>
                </div>
                
            </div>
        </section>
    )
}

export default About
