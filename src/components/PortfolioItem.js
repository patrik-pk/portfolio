import React, { Fragment } from 'react'

const PortfolioItem = ({
    data: {
        imgSrc,
        heading,
        madeIn,
        updatedIn,
        technologies,
        description,
        links
    }
}) => {
    return (
        <div className='content animation active'>
            <div className='left'>
                <div className='img-container'>
                    <img src={imgSrc} alt='' />
                </div>
            </div>
            <div className='right'>
                <div className='right-container' id='item-content1'>
                    <h3 className='heading'>{heading}</h3>
                    <div className='text'>

                        {/* Made In */}
                        <span className='dark-red'>Made in:</span> {madeIn} <br/>

                        {/* Updated In */}
                        { updatedIn && 
                            <Fragment>
                                <span className='dark-red'>Updated in:</span> {updatedIn} <br />
                            </Fragment> 
                        }

                        {/* Technologies Used */}
                        <p><span className='dark-red'>Technology used:</span> {technologies}</p> <br/>

                        {/* Project Description */}
                        <p><span className='dark-red'>Project description:</span>  <br/></p>
                        {description}

                    </div>

                    {/* Links */}
                    <div className='link-buttons'>
                        {links.map(link => 
                            <a 
                                key={link.text}
                                href={link.linkTo} 
                                target='_blank' 
                                rel='noreferrer' 
                                className='active' 
                                id='show'
                            >{link.text}</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem
