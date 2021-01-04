import React, { useState } from 'react'
//Router
import {
    Link
} from 'react-router-dom';
import { MovieState } from '../movieState';
//Animatios
import { motion } from 'framer-motion'
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animation'


const OurWork = () => {

    const [movies, setMovies] = useState(MovieState);

    return (
        <motion.div id='work' variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <motion.div variants={sliderContainer}>
                <motion.div variants={slider} className="frame frame1"></motion.div>
                <motion.div variants={slider} className="frame frame2"></motion.div>
                <motion.div variants={slider} className="frame frame3"></motion.div>
                <motion.div variants={slider} className="frame frame4"></motion.div>
            </motion.div>
            {movies.map((movie) => (
                <div className="movie">
                    <motion.h2 variants={fade}>{movie.title}</motion.h2>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to={movie.url}>
                        <div className="hide">
                            <motion.img variants={photoAnim} src={movie.mainImg} alt={movie.title} />
                        </div>
                    </Link>
                </div>
            ))}
        </motion.div>
    )
}

export default OurWork
