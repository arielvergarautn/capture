import React from 'react'
//Animatios
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
const ContactUs = () => {
    return (
        <motion.div id='contact' variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <h1>Contact us</h1>
        </motion.div>
    )
}

export default ContactUs