import React from 'react';
import { Link } from 'react-router-dom'

import './MovieList.css'
import Movie from '../Movie/Movie'

const MovieList = (props) => {
    return(
        <div className="content">
        {props.movieList.map(movie => (
            <Link to={{pathname: `/movie/${movie.id}`, query: {movie}}} key={movie.id} className="flex-boxes">
                <Movie movie={movie} />
            </Link>
        ))}
        </div>
    )
}

export default MovieList;