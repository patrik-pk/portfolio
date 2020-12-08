import React from 'react'

const About = () => {
    return (
        <section className='about'>
            <div className='about-container'>
                <div className='section-heading'>
                    <h2 id='about-heading'>About me</h2>
                </div>

                <div className='content'>
                    <div className='text' id='about-text'>
                        <p>
                            Hi. I am a <span className='bold dark-red'>Frontend Developer</span>
                            from <span className='bold dark-red'>Czech Republic.</span> <br/>
                        </p>

                        <p>
                            I love logical thinking and putting things together
                            and that's the reason why I learned how to program. <br/>   
                        </p>

                        <p>
                            I have an eye for detail and always
                            do things to the best of my ability. <br/>  
                        </p>

                        <p>
                            I chose <span className='bold dark-red'>React.js</span> as my specialization and use it
                            along with <span className='bold dark-red'>Redux</span> for state management.
                            <span className='bold dark-red'>JavaScript(ES6)</span>, <span className='bold dark-red'>HTML5</span> and
                            <span className='bold dark-red'>CSS3</span> skills are a matter of course. <br/>
                        </p>

                        <p>
                            I am always open to learning new stuff.
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default About
