import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='social-media'>
                <a href='https://www.linkedin.com/in/patrik-pukanec-2527b418a/' rel='noreferrer' target='_blank' id='linked-in'>
                    <img src='./img/linkedin.svg' alt=''/>
                </a>

                <a href='https://github.com/patrik-pk' rel='noreferrer' target='_blank' id='github'>
                    <img src='./img/github.svg' alt=''/>
                </a>

                <a href='https://www.reddit.com/user/patrik_pk' rel='noreferrer' target='_blank' id='reddit'>
                    <img src='./img/reddit.svg' alt=''/>
                </a>
            </div>

            <div className='arrow-up' id='up-btn'>
                {/* <svg className='arrow up' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='5 0 50 80' xml:space='preserve'>
                    <polyline fill='none' stroke='#FFFFFF' stroke-width='8' stroke-linecap='round' stroke-linejoin='round' points='
                    0.375, 35.375 28.375, 0.375 58.67, 35.375'/>
                </svg> */}
            </div>

            <div className='copyright'>
                <p>patrikpk.com &copy; 2020</p>
            </div>
        </footer>
    )
}

export default Footer
