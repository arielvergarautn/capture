import React from 'react'
//Animatios
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation'
const ContactUs = () => {
    return (
        <motion.div id='contact' variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <div className="title">
                <div className="hide">
                    <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </div>
            </div>
            <div className='hide'>
                <motion.div className="social" variants={titleAnim}>
                    <div className="circle"></div>
                    <h2>Send us a message</h2>
                </motion.div>
            </div>
            <div className='hide'>
                <motion.div className="social" variants={titleAnim}>
                    <div className="circle"></div>
                    <h2>Send an email</h2>
                </motion.div>
            </div>
            <div className='hide'>
                <motion.div className="social" variants={titleAnim}>
                    <div className="circle"></div>
                    <h2>Social media</h2>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ContactUs