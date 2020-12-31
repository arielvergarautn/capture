import React, { useState } from 'react'
//Router
import {
    Link
} from 'react-router-dom';
import { MovieState } from '../movieState';
//Animatios
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const OurWork = () => {

    const [movies, setMovies] = useState(MovieState);

    return (
        <motion.div id='work' variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            {movies.map((movie) => (
                <div className="movie">
                    <h2>{movie.title}</h2>
                    <div className="line"></div>
                    <Link to={movie.url}>
                        <img src={movie.mainImg} alt={movie.title} />
                    </Link>
                </div>
            ))}
        </motion.div>
    )
}

export default OurWork
