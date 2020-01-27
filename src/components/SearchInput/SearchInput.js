import React from 'react';
import './SearchInput.css'

import { Element } from 'react-scroll'

const SearchInput = (props) => {
    return(
        <div className="row input-div">
            <div className="input-field col s12">
                <div id="containerElement">
                <Element name="search" className="element">
                <form onSubmit={props.submitted}>
                    <input id="movie" type="text" className="validate"
                    value={props.value} onChange={props.updateSearch} name="searchTerm"
                    placeholder="Search movie"
                    />
                </form>
                </Element>
                </div>
                {/* <label for="movie">movie name</label> */}
            </div>
        </div>
    )
} 

export default SearchInput