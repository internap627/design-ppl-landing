import React from 'react'
import './Features.css'
const ux = require('./images/ux-yellow.png')
const resp = require('./images/resp-yellow.png')
const fonts = require('./images/fonts-yellow.png')
const ease = require('./images/ease-yellow.png')
const prized = require('./images/prized-yellow.png')
const code = require('./images/code-yellow.png')


function Features() {
 
    return (
        <div className='features'>
            <div className='text'>
                <p>FEATURES</p>
                <h1>Things we do</h1>
                <h2>These are just some of the few things we take care of <br/> ...</h2>
            </div>
            <div className='cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <img src={ux} alt='icon' />
                        <h1>UX / UI</h1>
                        <h2>Sorting out your user experience from your user interface</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                    <img src={resp} alt='icon' />
                        <h1>Responsive Design</h1>
                        <h2>Mobile, Tablet & Desktop ready</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                    <img src={fonts} alt='icon' />
                        <h1>Google fonts, Typekit</h1>
                        <h2>Type that speaks out in more ways than one</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                    <img src={ease} alt='icon' />
                        <h1>Ease of use = Better conversions</h1>
                        <h2>When research, changes colors of buttons, etc. You know, we know</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                    <img src={prized} alt='icon' />
                        <h1>Prized Designs</h1>
                        <h2>From Digital Banners, to Landing pages and even Print Design. We support Adobe CS / Sketch and more</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                    <img src={code} alt='icon' />
                        <h1>For the love of CODE</h1>
                        <h2>HTML, CSS, 
                        Javascript,
                        Node, MongoDB, Php, mysql, wordpress, react, react native and list goes on</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}



export default Features

