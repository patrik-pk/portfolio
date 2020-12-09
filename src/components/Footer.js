import React from 'react'

import linkedin from '../img/icons/linkedin.svg'
import github from '../img/icons/github.svg'
import reddit from '../img/icons/reddit.svg'
import arrow from '../img/icons/arrow-up.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='social-media'>
                <a href='https://www.linkedin.com/in/patrik-pukanec-2527b418a/' rel='noreferrer' target='_blank' id='linked-in'>
                    <img src={linkedin} alt=''/>
                </a>

                <a href='https://github.com/patrik-pk' rel='noreferrer' target='_blank' id='github'>
                    <img src={github} alt=''/>
                </a>

                <a href='https://www.reddit.com/user/patrik_pk' rel='noreferrer' target='_blank' id='reddit'>
                    <img src={reddit} alt=''/>
                </a>
            </div>

            <div className='arrow-up' id='up-btn'>
                <img src={arrow} alt='' />
            </div>

            <div className='copyright'>
                <p>patrikpk.com &copy; 2020</p>
            </div>
        </footer>
    )
}

export default Footer
