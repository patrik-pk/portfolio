import React from 'react'

const About = ({ lang: { heading, text }}) => {
    return (
        <section className='about'>
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
