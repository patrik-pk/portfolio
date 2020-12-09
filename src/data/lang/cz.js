import React, { Fragment } from 'react'
import rpg from '../../img/projects/rpg.jpg'
import zan from '../../img/projects/ZaN.jpg'

const cz = {
    header: {
        startButton: 'Moje práce'
    },
    nav: [
        'Domů',
        'O mně',
        'Portfolio',
        'Kontakt'
    ],
    about: {
        heading: 'O mně',
        text: (
            <Fragment>
                <p>
                    Ahoj. Jsem <span className='bold dark-red'>Frontend Developer </span>
                    z <span className='bold dark-red'>Česka.</span> <br/>
                </p>
                <p>
                    Baví mě logicky přemýšlet a dávat věci dohromady, proto jsem se
                    rozhodl naučit se programovat. Rád dělám hry a webové aplikace. <br/>   
                </p>
                <p>
                    Mám smysl pro detail a vždy dělám
                    věci, jak nejlépe je umím. <br/>  
                </p>
                <p>
                    Zvolil jsem si <span className='bold dark-red'>React.js</span> jako svoji specializaci
                    a spolu s ním používám <span className='bold dark-red'>Redux</span> pro state management.
                    <span className='bold dark-red'>JavaScript (ES6)</span>, <span className='bold dark-red'>HTML5</span> a
                    <span className='bold dark-red'> CSS3</span> jsou samozřejmostí. <br/>
                </p>
                <p>
                    Rád se učím novým věcem.
                </p>
            </Fragment>
        )
    },
    portfolio: {
        heading: 'Portfolio',
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
                        text: 'Spustit Demo'
                    },
                    {
                        linkTo: 'https://github.com/patrik-pk/simple-rpg',
                        text: 'Zobrazit Kód'
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
                        text: 'Spustit Demo'
                    },
                    {
                        linkTo: 'https://github.com/patrik-pk/zenich-a-nevesta',
                        text: 'Zobrazit Kód'
                    }
                ]
            }
        ],
    },
    contact: {
        heading: 'Kontakt',
        firstParagraph: (
            <p className='first-p'>
                Pošlete mi e-mail na: <span className='bold'>patrik.pukanec@gmail.com</span>
                <br/>
                nebo to udělejte zde:
            </p>
        ),
        secondParagraph: (
            <p className='second-p'>...nebo mě kontaktujte na sociálních sítích níže.</p>
        ),
        form: {
            name: 'Vaše jméno...',
            email: 'Váš e-mail...',
            message: 'Vaše zpráva...',
            submit: 'Poslat'
        }
    }
}

export default cz