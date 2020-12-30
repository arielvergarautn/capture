import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Award from '../components/Award';
import { MovieState } from '../movieState'

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
                <div className='details'>
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
                </div>
            )}
        </>
    )
}

export default MovieDetail
