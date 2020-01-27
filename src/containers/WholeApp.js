import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'
import App from './App'
import MovieDetails from './MovieDetails/MovieDetails'
import Nav from '../UI/Nav'

class WholeApp extends Component {
    render(){
        return(
            <div>
            <Nav />
            <Switch>
                <Route path="/movie/:id" exact component={MovieDetails} />
                <Route path="/" exact component={App} />
                <Route path="/:search/:page"  component={App} />
                <Route path="/:search"  component={App} />
                {/* <Route path="/movie/:id" exact component={MovieDetails} /> */}
            </Switch>
            </div>
        )
    }
}

export default WholeApp;

