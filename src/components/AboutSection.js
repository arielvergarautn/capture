import React from 'react'
import home1 from '../img/home1.png'
//Framer motion
import { motion } from 'framer-motion'


const AboutSection = () => {

    return (
        <div className='about layout'>
            <div className="description">
                <motion.div className="title" initial='hidden' animate='show'>
                    <div className="hide">
                        <motion.h2 >We work to make</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2  >your <span>dreams</span> come</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2  >true.</motion.h2>
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
