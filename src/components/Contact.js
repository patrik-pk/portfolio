import React from 'react'

const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact-container'>

                <div className='section-heading'>
                    <h2 id='contact-heading'>Contact</h2>
                </div>

                <div className='content'>

                    <p className='first-p'>
                        Send me an e-mail on: <span className='bold'>patrik.pukanec@gmail.com</span>
                        <br/>
                        or do it here:
                    </p>
                    
                    <form name='contact' className='contact-form' method='POST' data-netlify='true'>
                        <input className='name' id='input-name' type='text' name='name' placeholder='Your Name...' required/>
                        <input className='email' id='input-email' type='email' name='email' placeholder='Your E-mail...' required/>
                        <textarea className='message' id='input-text' name='message' placeholder='Your Message...' cols='30' rows='10' required></textarea>
                        <input className='submit' id='submit-btn' type='submit' name='submit' value='Send'/>
                    </form>

                    <div className='form-message'></div>
                    <p className='second-p'>...or contact me on social media below.</p>

                </div>
            </div>
        </section>
    )
}

export default Contact
