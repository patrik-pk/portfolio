import React from 'react'
import AppState from './context/AppState'
import './style/main.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    return (
        <AppState>
            <Header />
            <Navbar />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </AppState>
    )
}

export default App
