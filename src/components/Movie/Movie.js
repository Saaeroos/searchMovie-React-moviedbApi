import React from 'react';
import './Movie.css'

const Movie = (props) => {
    return (
        <div className="row content-2">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        {props.movie.poster_path === null ? <img src={'https://kiyanfox.com/wp-content/uploads/2019/03/Image-not-found.gif'} alt="not found"/> :
                         <img src={`http://image.tmdb.org/t/p/w185${props.movie.poster_path}`} alt="movie" />}
                    </div>
                    <div className="card-content">
                        <p>{props.movie.original_title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie