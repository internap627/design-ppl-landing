import React from 'react'
import './Logos.css'
const apache = require('./images/apache-logo.png')
const jquery = require('./images/jquery-logo.png')
const linux = require('./images/linux-logo.png')
const node = require('./images/node-logo.png')
const php = require('./images/php-logo.png')
const react = require('./images/react-logo.jpg')
const sql = require('./images/sql-logo.png')
const wordpress = require('./images/wordpress-logo.png')

export default function Logos() {
    return (
        <div className='logos'>
            <div className='logo-block'>
                <img src={apache} alt='apache logo' />
                <img src={jquery} alt='jquery logo' />
                <img src={linux} alt='linux logo' />
                <img src={node} alt='node logo' />
                <img src={php} alt='php logo' />
                <img src={react} alt='react logo' />
                <img src={sql} alt='sql logo' />
                <img src={wordpress} alt='wordpress logo' />
            </div>
        </div>
    )
}
