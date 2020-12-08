import React from 'react'

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <div className='portfolio-container'>

                {/* Heading */}

                <div className='section-heading'>
                    <h2>Portfolio</h2>
                </div>

                {/* Content 1 */}

                <div className='content animation active'>
                    <div className='left'>
                        <div className='img-container'>
                            <img src='./img/rpg.jpg' alt=''/>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right-container' id='item-content1'>
                            <h3 className='heading'>Simple RPG</h3>
                            <div className='text'>
                                <span className='dark-red'>Made in:</span> 11-12/2019
                                <br/>   
                                <span className='dark-red'>Updated in:</span> 08-09/2020
                                <br/>
                                <p>
                                    <span className='dark-red'>Technology used:</span>
                                    HTML5, CSS3(SASS), React.js, Redux
                                </p>
                                <br/>
                                <p>
                                    <span className='dark-red'>Project description:</span>  <br/>
                                    My first project in React.js. It started off just as a learning
                                    project, but I decided to finish it. And it took me a lot more time
                                    than I expected. The goal was to learn React and get better with vanilla JavaScript
                                    and ES6 syntax. And it did its purpose.
                                    <br/> <br/>
                                    I wrote a lot of logic, which helped me to understand the core stuff about JavaScript 
                                    more in depth and helped me to develop general programming skills. 
                                    I got used to the ES6 syntax and learned how to use advanced array methods.
                                    It taught me how to finish projects, instead of trying to do everything
                                    perfect. There are still a lot of things that I would like to add.
                                    <br/> <br/>
                                    I decided to update this project in August, because there was a lot of mess in the code
                                    and I have learned a lot since I made it. I also implemented Redux and in the end I remaked
                                    the whole game, added new functionalities like drops and crafting.
                                </p>
                            </div>
                            <div className='link-buttons'>
                                <a href='https://simple-rpg-game.netlify.com/' target='_blank' rel='noreferrer' className='active' id='show'>Show Demo</a>
                                <a href='https://github.com/patrik-pk/simple-rpg' target='_blank' rel='noreferrer' id='code' className='active'>View Code</a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Arrows */}

                <button className='arrow prev' id='prev-arrow'>
                    {/* <svg width='30px' height='40px' viewBox='0 0 50 80' xml:space='preserve'>
                        <polyline fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' points='
                        45.63,75.8 0.375,38.087 45.63,0.375 ' />
                    </svg> */}
                </button>

                <button className='arrow next' id='next-arrow'>
                    {/* <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='30px' height='40px'
                        viewBox='0 0 50 80' xml:space='preserve'>
                        <polyline fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' points='
                        0.375,0.375 45.63,38.087 0.375,75.8 ' />
                    </svg> */}
                </button>

                {/* Dots */}
                
                <div className='dots'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
