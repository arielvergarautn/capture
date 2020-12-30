import React, { useState } from 'react'
//Router
import {
    Link
} from 'react-router-dom';
import { MovieState } from '../movieState';

const OurWork = () => {

    const [movies, setMovies] = useState(MovieState);

    return (
        <div id='work'>
            {movies.map((movie) => (
                <div className="movie">
                    <h2>{movie.title}</h2>
                    <div className="line"></div>
                    <Link to={movie.url}>
                        <img src={movie.mainImg} alt={movie.title} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default OurWork
