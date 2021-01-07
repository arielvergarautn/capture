//States
import { MovieState } from '../states';
//Animatios
import { motion } from 'framer-motion'
import { pageAnimation, slider, sliderContainer } from '../animation'
import Movie from '../components/Movie';
//Components
import ScrollTop from '../components/ScrollTop'

const OurWork = () => {

    const movies = MovieState();

    return (
        <motion.div id='work' variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <motion.div variants={sliderContainer}>
                <motion.div variants={slider} className="frame frame1"></motion.div>
                <motion.div variants={slider} className="frame frame2"></motion.div>
                <motion.div variants={slider} className="frame frame3"></motion.div>
                <motion.div variants={slider} className="frame frame4"></motion.div>
            </motion.div>
            {movies.map((movie) => (
                <Movie title={movie.title} url={movie.url} mainImg={movie.mainImg} key={movie.title} />
            ))}
            <ScrollTop />
        </motion.div>
    )
}

export default OurWork
