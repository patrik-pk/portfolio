import React, { Fragment } from 'react'
import './style/main.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    return (
        <Fragment>
            <Header />
            <Navbar />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default App
