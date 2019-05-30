import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Projects.css'
const cityLogo = require('./images/city-logo.jpg')
const euLogo = require('./images/eu-logo.jpg')
const greenLogo = require('./images/green-logo.jpg')
const manooshLogo = require('./images/manoosh-logo.jpg')
const mbuLogo = require('./images/mbu-logo.png')
const researchLogo = require('./images/research-logo.png')
const thirdLogo = require('./images/third-logo.jpg')
const hometreeLogo = require('./images/hometree-logo.png')

const Projects = () => {
    return (
        <div className='projects'>
            <h1>We've done digital projects for ...</h1>
            <div className='carousel-container'>
                
                        <div className='slide-div'>
                            <div className='logo'>
                                <img
                                className="logo-img d-block"
                                src={cityLogo}
                                alt="First slide"
                                />
                            </div>
                            <div className='logo'>
                                <img
                                className="logo-img d-block"
                                src={euLogo}
                                alt="First slide"
                                />
                            </div>
                        </div>
                    
                        <div className='slide-div'>
                            <div className='logo'>
                                <img
                                className="logo-img"
                                src={greenLogo}
                                alt="second slide"
                                />
                            </div>
                            <div className='logo'>
                                <img
                                className="logo-img"
                                src={manooshLogo}
                                alt="second slide"
                                />
                            </div>
                        </div>
                    
                        <div className='slide-div'>
                            <div className='logo'>
                                <img
                                className="logo-img"
                                src={mbuLogo}
                                alt="third slide"
                                />
                            </div>
                            <div className='logo'>
                                <img
                                className="logo-img"
                                src={researchLogo}
                                alt="third slide"
                                />
                            </div>
                        </div>
                    
                        <div className='slide-div'>
                            <div className='logo'>
                                <img
                                className="logo-img"
                                src={thirdLogo}
                                alt="fourth slide"
                                />
                            </div>
                            <div className='logo'>
                                <img
                                className="logo-img"
                                src={hometreeLogo}
                                alt="fourth slide"
                                />
                            </div>
                        </div>
               
            </div>
        </div>
    )
}

export default Projects
