import React, { useContext } from 'react'
import AppContext from '../context/appContext'

const Contact = () => {
    const appContext = useContext(AppContext)
    const {
        lang: { data: { contact: {
            heading,
            firstParagraph,
            secondParagraph,
            form: {
                name,
                email,
                message,
                submit
            } 
        }}}
    } = appContext

    return (
        <section className='contact'>
            <div className='contact-container'>

                <div className='section-heading'>
                    <h2 id='contact-heading'>{heading}</h2>
                </div>

                <div className='content'>

                    { firstParagraph }
                    
                    <form name='contact' className='contact-form' method='POST' data-netlify='true'>
                        <input className='name' id='input-name' type='text' name='name' placeholder={name} required/>
                        <input className='email' id='input-email' type='email' name='email' placeholder={email} required/>
                        <textarea className='message' id='input-text' name='message' placeholder={message} cols='30' rows='10' required></textarea>
                        <input className='submit' id='submit-btn' type='submit' name='submit' value={submit}/>
                    </form>

                    { secondParagraph }

                </div>
            </div>
        </section>
    )
}

export default Contact
