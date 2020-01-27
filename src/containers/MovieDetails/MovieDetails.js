import React, { Component } from 'react'

import './MovieDetails.css'
import { withRouter } from 'react-router-dom'

class MovieDetails extends Component  {
    state = {
        movie: {}
    }
    componentDidMount() {
        const movie_id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=7ff5cbd5f91e3c8c4e649208eed017e6&language=en-US`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({
                movie: {...data},
            })
        })
        .catch(error => console.log(error))
    }
    
    render(){
        const movie = this.state.movie
    return(
        <div>
            <div className="info">
            {movie.poster_path === null ?<img src={'https://kiyanfox.com/wp-content/uploads/2019/03/Image-not-found.gif'} alt="not found"/>
            :<img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="movie" />}
            <ul className="collection">
                <li className="collection-header"><h4><span>Title: </span>{movie.title}</h4></li>
                <li className="collection-item"><span>Tagline: </span>{movie.tagline ? movie.tagline : 'not found'}</li>
                <li className="collection-item"><span>Votes: </span>{movie.vote_count}</li>
                <li className="collection-item"><span>Rating </span>{movie.vote_average}</li>
                <li className="collection-item"><span>Release Date: </span>{movie.release_date ? movie.release_date : 'not found'}</li>
                <li className="collection-item"><span>Language: </span>{movie.original_language}</li>
                <li className="collection-item"><span>Overview: </span>{movie.overview}</li>
            </ul>
            </div>
        </div>
    )
    }
}

export default withRouter(MovieDetails)