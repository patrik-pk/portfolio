import React from 'react'

import PortfolioItem from './PortfolioItem'
import { ReactComponent as ArrowLeft } from '../img/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../img/icons/arrow-right.svg'

const Portfolio = ({ lang: { heading, projects } }) => {

    const dots = () => {
        const arr = []

        for(let i = 0; i < projects.length; i++) {
            // active logic here
            arr.push(<span key={i} className='dot'></span>)
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
                <PortfolioItem data={projects[0]}/>

                {/* Arrows */}
                <button className='arrow prev' id='prev-arrow'>
                    <ArrowLeft />
                </button>

                <button className='arrow next' id='next-arrow'>
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
