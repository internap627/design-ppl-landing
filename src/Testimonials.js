import React from 'react'
import './Testimonials.css'
const open = require('./images/testi-1.jpeg')
const odine = require('./images/testi-2.png')
const hometree = require('./images/testi-3.png')

export default function Testimonials() {
    return (
        <div className='testimonials'>
            <p>Testimonials</p>
            <h1>Hear what our clients have to say...</h1>
            <div className='testimonial-group'>
                <div className='white circle'>
                    <p>Testimonial</p>
                    <h1>"Great work guys! Website looks awesome. Love the end product."</h1>
                    <h2>Open Data Challenge Series</h2>
                    <img src={open} alt='open data logo' />
                </div>
                <div className='yellow circle'>
                    <p>Testimonial</p>
                    <h1>"I really recommend Mo and his team as Web Developers. They've done a brilliant job."</h1>
                    <h2>Open Data Incubator Europe</h2>
                    <img src={odine} alt='odine logo' />
                </div>
                <div className='offwhite circle'>
                    <p>Testimonial</p>
                    <h1>"We were really impressed by the volume of talent, from tech to UX and SEO all in one. Fantastic!"</h1>
                    <h2>Hometree Marketplace</h2>
                    <img src={hometree} alt='hometree logo' />
                </div>
            </div>
        </div>
    )
}
