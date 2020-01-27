import React, { Component } from "react";
import "./App.css";

import SearchInput from "../components/SearchInput/SearchInput";
import MovieList from "../components/MovieList/MovieList";

import Pagination from "../components/Pagination/Pagination";

class App extends Component {
  state = {
    movies: [],
    searchTerm: "",
    totalResults: null,
    currentPage: 1
  };
  componentDidMount() {
    if (this.props.match.params.search) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7ff5cbd5f91e3c8c4e649208eed017e6&query=${this.props.match.params.search}&page=${this.state.currentPage}`
      )
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({
            movies: [...data.results],
            totalResults: data.total_results,
            searchTerm: this.props.match.params.search
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  updateSearchHandler = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=7ff5cbd5f91e3c8c4e649208eed017e6&query=${this.state.searchTerm}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
          currentPage: 1
        });
      })
      .catch(err => {
        console.log(err);
      });
    this.props.history.push("/" + this.state.searchTerm);
  };
  nextPage = nextPage => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=7ff5cbd5f91e3c8c4e649208eed017e6&query=${this.state.searchTerm}&page=${nextPage}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          currentPage: nextPage
        });
      })
      .catch(err => {
        console.log(err);
      });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    const numberOfPages = Math.floor(this.state.totalResults / 20);
    console.log("pages" + this.state.totalResults);
    console.log("pages" + Math.floor(this.state.totalResults / 20));
    return (
      <div>
        <SearchInput
          submitted={this.submitHandler}
          updateSearch={this.updateSearchHandler}
          value={this.state.searchTerm}
          ref={this.searchInput}
        />
        <MovieList movieList={this.state.movies} />
        <Pagination
          totalPages={numberOfPages}
          nextPage={this.nextPage}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default App;
