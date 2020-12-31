import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Award from '../components/Award';
import { MovieState } from '../movieState'
//Animatios
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const MovieDetail = () => {

    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setmovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((m) => m.url === url)[0];
        setmovie(currentMovie);
    }, [movies, url])

    return (
        <>
            {movie && (
                <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit' className='details'>
                    <div className="headline">
                        <h2>{movie.title}</h2>
                        <div className="image-display">
                            <img src={movie.mainImg} alt="movie" />
                        </div>
                    </div>
                    <div className="awards">
                        {
                            movie.awards.map((award) => (
                                <Award title={award.title} description={award.description} key={award.title} />
                            ))
                        }
                    </div>
                    <div className="image-display">
                        <img src={movie.secondaryImg} alt="movie" />
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default MovieDetail
