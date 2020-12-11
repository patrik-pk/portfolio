import React, { Fragment } from 'react'
import rpg from '../../img/projects/rpg.jpg'
import zan from '../../img/projects/ZaN.jpg'
import todo from '../../img/projects/todo_app.jpg'
import portfolio from '../../img/projects/portfolio.jpg'

const en = {
    header: {
        startButton: 'View My Work'
    },
    nav: [
        'Home',
        'About',
        'Portfolio',
        'Contact'
    ],
    about: {
        heading: 'About Me',
        text: (
            <Fragment>
                <p>
                    Hi. I am a <span className='bold dark-red'>Frontend Developer </span>
                    from <span className='bold dark-red'>Czech Republic.</span> <br/>
                </p>
                <p>
                    I love solving logical problems and putting things together
                    and that's the reason why I learned how to code. 
                    I love making games along with web apps. <br/>
                </p>
                <p>
                    I have an eye for detail and always
                    do things to the best of my ability. <br/>
                </p>
                <p>
                    I chose <span className='bold dark-red'>React.js</span> as my specialization and use it
                    along with <span className='bold dark-red'>Redux</span> for state management.
                    <span className='bold dark-red'>JavaScript(ES6)</span>, <span className='bold dark-red'>HTML5</span> and
                    <span className='bold dark-red'> CSS3</span> skills are a matter of course. <br />
                </p>
                <p>
                    I am always open to learning new stuff.
                </p>
            </Fragment>
        )
    },
    portfolio: {
        heading: 'Portfolio',
        madeIn: 'Made in:',
        updatedIn: 'Updated in:',
        technologiesUsed: 'Technologies used:',
        projectDescription: 'Project description:',
        projects: [
            {
                imgSrc: rpg,
                heading: 'SimpleRPG',
                madeIn: '11-12/2019',
                updatedIn: '08-09/2020',
                technologies: 'React.js, Redux',
                description: (
                    <Fragment>
                        <p>
                            Project Description here
                        </p>
                    </Fragment>
                ),
                links: [
                    {
                        linkTo: 'https://simple-rpg-game.netlify.com/',
                        text: 'Try Live'
                    },
                    {
                        linkTo: 'https://github.com/patrik-pk/simple-rpg',
                        text: 'View Code'
                    }
                ]
            },
            {
                imgSrc: zan,
                heading: 'Ženich & Nevěsta',
                madeIn: '04-05/2019',
                technologies: 'HTML5, CSS3, jQuery',
                description: (
                    <Fragment>
                        <p>
                            Project Description here
                        </p>
                    </Fragment>
                ),
                links: [
                    {
                        linkTo: 'https://zenich-a-nevesta.netlify.app/',
                        text: 'Try Live'
                    },
                    {
                        linkTo: 'https://github.com/patrik-pk/zenich-a-nevesta',
                        text: 'View Code'
                    }
                ]
            },
            {
                imgSrc: todo,
                heading: 'Todo App',
                madeIn: '07/2020',
                technologies: 'React.js, Redux',
                description: (
                    <Fragment>
                        <p>
                            Project Description here
                        </p>
                    </Fragment>
                ),
                links: [
                    {
                        linkTo: 'https://patrikpk-todo.netlify.app/',
                        text: 'Try Live'
                    },
                    {
                        linkTo: 'https://github.com/patrik-pk/todo-app',
                        text: 'View Code'
                    }
                ]
            },
            {
                imgSrc: portfolio,
                heading: 'Portfolio',
                madeIn: '09/2019',
                updatedIn: '12/2020',
                technologies: 'React.js',
                description: (
                    <Fragment>
                        <p>
                            Project Description here
                        </p>
                    </Fragment>
                ),
                links: [
                    {
                        linkTo: 'http://patrikpk-portfolio.netlify.app/',
                        text: 'Try Live'
                    },
                    {
                        linkTo: 'https://github.com/patrik-pk/portfolio',
                        text: 'View Code'
                    }
                ]
            },
        ],
    },
    contact: {
        heading: 'Contact',
        firstParagraph: (
            <p className='first-p'>
                Send me an e-mail on: <span className='bold'>patrik.pukanec@gmail.com</span>
                <br />
                or do it here:
            </p>
        ),
        secondParagraph: (
            <p className='second-p'>...or contact me on social media below.</p>
        ),
        form: {
            name: 'Your Name...',
            email: 'Your E-mail...',
            message: 'Your Message...',
            submit: 'Send'
        }
    }
}

export default en