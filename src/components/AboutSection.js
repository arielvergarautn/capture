import React from 'react'
import home1 from '../img/home1.png'
//Framer motion
import { motion } from 'framer-motion'

const AboutSection = () => {

    //Animations
    const titleAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } }
    }
    const container = {
        hidden: { x: 100 },
        show: { x: 0, transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.3 } }
    }


    return (
        <div className='about layout'>
            <div className="description">
                <motion.div className="title" variants={container} initial='hidden' animate='show'>
                    <div className="hide">
                        <motion.h2 variants={titleAnim} >We work to make</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnim} >true.</motion.h2>
                    </div>
                </motion.div>
                <p>Contact us for any fotography or videography ideas that you have. We have professional with amazing skills</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="Guy with a camera" />
            </div>

        </div >
    )
}

export default AboutSection
