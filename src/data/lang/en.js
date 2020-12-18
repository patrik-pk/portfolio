import React, { Fragment } from 'react'
import rpg from '../../img/projects/rpg.jpg'
import progress_tracker from '../../img/projects/progress_tracker.jpg'
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
                    Hi. I am a <span className='dark-red'>Frontend Developer </span>
                    from <span className='dark-red'>Czech Republic.</span> <br/>
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
                    I chose <span className='dark-red'>React.js</span> as my specialization and use it
                    along with <span className='dark-red'>Redux</span> for state management.
                    <span className='dark-red'> JavaScript(ES6)</span>, <span className='dark-red'>HTML5</span> and
                    <span className='dark-red'> CSS3</span> skills are a matter of course. <br />
                </p>
                <p>
                    Recently I have been learning <span className='dark-red'>MERN stack </span>
                    so I also have some knowledge about how backend works. <br />
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
                            Browser based single player RPG game with a lot of functionalities like battle system, 
                            inventory, crafting system, load & save (using localStorage) 
                            and credits section with all icons used in this project. 
                            You can find more detailed description on the projects GitHub page.
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
                imgSrc: progress_tracker,
                heading: 'Progress Tracker',
                madeIn: '12/2020 - now',
                technologies: 'MERN stack, Redux, Styled Components',
                description: (
                    <Fragment>
                        <p>
                            Fullstack web application for recording progress. Backend is built on
                            Express.js and MongoDB. React with Redux is used on the frontend along with
                            Styled Components.
                        </p>
                    </Fragment>
                ),
                links: [
                    {
                        linkTo: 'https://github.com/patrik-pk/progress-tracker',
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
                            Website of a wedding agency. This is one of my first projects that I did as
                            my school projet. Originally it was supposed to be a static page for 
                            information purposes but later on I added jQuery and tried to make a order system. 
                            At the time I didn't really know what I was doing, so the project has a lot of bugs.
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
                            Simple Todo App in which you can add/edit/delete category. 
                            Every category has its own Todos that you can also add/edit/delete. 
                            Todos are displayed only with the same category as the active one. 
                            When you delete a category, all its Todos are removed along with it.
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
                technologies: 'React.js, Context API',
                description: (
                    <Fragment>
                        <p>
                            My actual portfolio site. Originally I used jQuery for scroll, active links, language and
                            portfolio functionality, but later on I rewrote the project into React mainly for more
                            readable code. For state managment I used built-in Context API. 
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