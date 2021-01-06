import React from 'react'
import {
    Link,
} from 'react-router-dom'

//Animations 
import { motion } from 'framer-motion';
import { fade, photoAnim, lineAnim } from '../animation'

//Components
import { useScroll } from '../components/UseScroll'

const Movie = ({ title, url, mainImg }) => {

    const [element, controls] = useScroll();

    return (
        <motion.div className="movie" ref={element} variants={fade} animate={controls} initial='hidden' >
            <motion.h2 variants={fade}>{title}</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to={url}>
                <div className="hide">
                    <motion.img variants={photoAnim} src={mainImg} alt={title} />
                </div>
            </Link>
        </motion.div>
    )
}

export default Movie
