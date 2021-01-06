import React, { useState } from 'react'
//States
import { MovieState } from '../states';
//Animatios
import { motion } from 'framer-motion'
import { pageAnimation, slider, sliderContainer } from '../animation'
import Movie from '../components/Movie';



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
                <Movie title={movie.title} url={movie.url} mainImg={movie.mainImg} />
                // <div className="movie">
                //     <motion.h2 variants={fade}>{movie.title}</motion.h2>
                //     <motion.div variants={lineAnim} className="line"></motion.div>
                //     <Link to={movie.url}>
                //         <div className="hide">
                //             <motion.img variants={photoAnim} src={movie.mainImg} alt={movie.title} />
                //         </div>
                //     </Link>
                // </div>
            ))}
        </motion.div>
    )
}

export default OurWork
