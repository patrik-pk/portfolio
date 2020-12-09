import React, { Fragment, useState } from 'react'
import './style/main.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

import cz from './data/lang/cz'
import en from './data/lang/en'

const App = () => {
    const [lang, setLang] = useState({ type: 'cz', data: cz })

    return (
        <Fragment>
            <Header lang={lang} setLang={setLang} cz={cz} en={en} />
            <Navbar lang={lang.data.nav} />
            <About lang={lang.data.about}/>
            <Portfolio lang={lang.data.portfolio} />
            <Contact lang={lang.data.contact} />
            <Footer lang={lang.data.footer} />
        </Fragment>
    )
}

export default App
