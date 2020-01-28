import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'
import App from './App'
import MovieDetails from './MovieDetails/MovieDetails'
import Nav from '../UI/Nav'

class Routing extends Component {
    render(){
        return(
            <>
            <Nav />
            <Switch>
                <Route path="/movie/:id" exact component={MovieDetails} />
                <Route path="/" exact component={App} />
                <Route path="/:search/:page"  component={App} />
                <Route path="/:search"  component={App} />
            </Switch>
            </>
        )
    }
}

export default Routing;

