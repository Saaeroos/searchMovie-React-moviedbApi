import React from 'react';
import classes from './Nav.module.css'

const Nav = (props) => {
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="google.com" className="brand-logo right">Logo</a>
                <p className={classes.Search}>Search Your Favorite Movies</p>
            </div>
        </nav>
    )
}

export default Nav