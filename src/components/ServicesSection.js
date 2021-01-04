import React from 'react'
//Import icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

//Animations
import { scrollReveal } from '../animation'
import { useScroll } from './UseScroll'
import { motion } from 'framer-motion'
const ServicesSection = () => {

    const [element, controls] = useScroll();

    return (
        <motion.div variants={scrollReveal} id='services' initial='hidden' animate={controls} className='layout' ref={element}>
            <div className="description">
                <h2>Hi <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="Clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="Clock" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="Teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="Camera" />
            </div>
        </motion.div>
    )
}

export default ServicesSection
