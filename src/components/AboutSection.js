import React from 'react'
import home1 from '../img/home1.png'
//Framer motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../animation'
import {
    Link
} from 'react-router-dom'
//Components
import Wave from './Wave'

const AboutSection = () => {

    return (
        <div id='about' className=' layout'>
            < div className="description" >
                <motion.div className="title">
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </div>
                </motion.div>
                <motion.p variants={fade}>Contact us for any fotography or videography ideas that you have. We have professional with amazing skills</motion.p>
                <Link to='/contact'><motion.button variants={fade}>Contact Us</motion.button></Link>
            </div >
            <div className="image">
                <motion.img variants={photoAnim} src={home1} alt="A guy with a camera" />
            </div>
            <Wave />
        </div >
    )
}

export default AboutSection
