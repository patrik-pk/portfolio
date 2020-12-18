import React, { Fragment } from 'react'
import rpg from '../../img/projects/rpg.jpg'
import progress_tracker from '../../img/projects/progress_tracker.jpg'
import zan from '../../img/projects/ZaN.jpg'
import todo from '../../img/projects/todo_app.jpg'
import portfolio from '../../img/projects/portfolio.jpg'

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
                    Ahoj. Jsem <span className='dark-red'>Frontend Developer </span>
                    z <span className='dark-red'>Česka.</span> <br/>
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
                    Zvolil jsem si <span className='dark-red'>React</span> jako svoji specializaci
                    a spolu s ním používám <span className='dark-red'>Redux</span> pro state management.
                    <span className='dark-red'> JavaScript (ES6)</span>, <span className='dark-red'>HTML5</span> a
                    <span className='dark-red'> CSS3</span> jsou samozřejmostí. <br/>
                </p>
                <p>
                    Nedávno jsem se také začal učit <span className='dark-red'>MERN stack</span>,
                    takže mám i nějaké ponětí o backendu. <br />
                </p>
                <p>
                    Rád se učím novým věcem.
                </p>
            </Fragment>
        )
    },
    portfolio: {
        heading: 'Portfolio',
        madeIn: 'Vytvořeno:',
        updatedIn: 'Aktualizováno:',
        technologiesUsed: 'Použité technologie:',
        projectDescription: 'Popis projektu:',
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
                            Prohlížečová RPG hra pro 1 hráče se spoustou funkcionalit jako battle systém, 
                            inventář, crafting systém, load & save systém (pomocí localStorage) a 
                            credits sekce se všemi použitými ikonkami. Projekt je detailněji popsán na GitHubu.
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
                imgSrc: progress_tracker,
                heading: 'Progress Tracker',
                madeIn: '12/2020 - současnost',
                technologies: 'MERN stack, Redux, Styled Components',
                description: (
                    <Fragment>
                        <p>
                            Fullstack webová aplikace pro zaznamenávání progressu. Backend běží v
                            Expressu a MongoDB, na frontendu je použit React s Reduxem a Styled Components
                            pro stylování komponentů.
                        </p>
                    </Fragment>
                ),
                links: [
                    {
                        linkTo: 'https://github.com/patrik-pk/progress-tracker',
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
                            Webové stránky svatební agentury. Jeden z mých prvních projektů, 
                            který jsem dělal v rámci školního projektu. 
                            Původně to měla být statická stránka pouze pro informační účely, 
                            časem jsem ale přidal jQuery a zkusil udělat objednávkový systém. 
                            V té době jsem pořádně nevěděl, co dělám, a tak má projekt spoustu chyb a bugů.
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
            },
            {
                imgSrc: todo,
                heading: 'Todo App',
                madeIn: '07/2020',
                technologies: 'React.js, Redux',
                description: (
                    <Fragment>
                        <p>
                            Jednoduchá Todo appka ve které může uživatel přidat/upravit/smazat kategorii. 
                            Každá kategorie má své Todos, které také může uživatel přidat/upravit/smazat. 
                            Každý Todo má svou kategorii, ve které je zobrazen. 
                            Když uživatel smaže kategorii, všechny Todos jsou smazány spolu s ní.
                        </p>
                    </Fragment>
                ),
                links: [
                    {
                        linkTo: 'https://patrikpk-todo.netlify.app/',
                        text: 'Spustit Demo'
                    },
                    {
                        linkTo: 'https://github.com/patrik-pk/todo-app',
                        text: 'Zobrazit Kód'
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
                            Moje aktuální portfolio stránka. Původně jsem použil jQuery pro funkcionalitu
                            scrollu, active linků, změny jazyku a portfolia, později jsem ale projekt přepsal do 
                            Reactu pro lepší přehlednost. Pro state managment jsem použil zabudovaný Context API. 
                        </p>
                    </Fragment>
                ),
                links: [
                    {
                        linkTo: 'http://patrikpk-portfolio.netlify.app/',
                        text: 'Spustit Demo'
                    },
                    {
                        linkTo: 'https://github.com/patrik-pk/portfolio',
                        text: 'Zobrazit Kód'
                    }
                ]
            },
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