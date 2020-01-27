import React from 'react';

const Nav = (props) => {
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="google.com" className="brand-logo right">Logo</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav