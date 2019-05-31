import React from 'react'
import './Steps.css'
const message = require('./images/step-1.png')
const screen = require('./images/step-2.png')
const diamond = require('./images/step-3.png')

export default function Steps() {
    return (
        <div className='steps'>
            <p>HOW WE WORK</p>
            <h1>3 Simple steps...</h1>
            <div className='step'>
                <img src={message} alt='message icon' />
                <div className='step-line' />
                <h2><span>LETS DISCUSS YOUR PROJECT</span><br/>We meet with you & your project team to discuss requirements to make sure we can fully understand your requirements.</h2>
            </div>
            <div className='step middle-step'>
                <img src={screen} alt='screen icon' />
                <div className='step-line' />
                <h2><span>PROTOTYPES BEGIN</span><br/>We use our rapid prototyping tools, along with agile development methodologies to ensure your prototype is ready for the next meeting.</h2>
            </div>
            <div className='step'>
                <img src={diamond} alt='diamond icon' />
                <div className='step-line' />
                <h2><span>CODING & DEPLOYMENTS</span><br/>Once your are happy with the prototype, we sign off and our geeky guys with glasses and macbooks get coding. Your assigned Project manager will also confirm staging servers dates for your review and a final date for GO LIVE deployment</h2>
            </div>
        </div>
    )
}
