import React, { useState } from 'react'

import PortfolioItem from './PortfolioItem'
import { ReactComponent as ArrowLeft } from '../img/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../img/icons/arrow-right.svg'

const Portfolio = ({ 
    lang: { 
        heading,
        madeIn,
        updatedIn,
        technologiesUsed,
        projectDescription,
        projects 
    } 
}) => {

    // Slideshow Functionality
    const [current, setCurrent] = useState(0)

    const changeItem = index => {
        if(current + index > projects.length - 1) {
            setCurrent(0)
        } else if(current + index < 0) {
            setCurrent(projects.length - 1)
        } else {
            setCurrent(current + index)
        }
    }

    // Render Dots
    const dots = () => {
        const arr = []

        for (let i = 0; i < projects.length; i++) {
            // active logic here
            arr.push(<span key={i} className={`dot ${i === current ? 'active' : ''}`}></span>)
        }

        return arr
    }

    return (
        <section className='portfolio'>
            <div className='portfolio-container'>

                {/* Heading */}
                <div className='section-heading'>
                    <h2>{heading}</h2>
                </div>

                {/* Portfolio Item */}
                <PortfolioItem data={projects[current]} lang={{ madeIn, updatedIn, technologiesUsed, projectDescription }}/>

                {/* Arrows */}
                <button className='arrow prev' onClick={() => changeItem(-1)}>
                    <ArrowLeft />
                </button>

                <button className='arrow next' onClick={() => changeItem(+1)}>
                    <ArrowRight />
                </button>

                {/* Dots */}
                
                <div className='dots'>
                    { dots() }
                </div>
            </div>
        </section>
    )
}

export default Portfolio
