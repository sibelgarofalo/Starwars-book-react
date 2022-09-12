import React from "react";
import Movie from './movie';

import './movies.css';

class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        // call the api
        fetch('https://swapi.sit.academy/api/films/')
            .then((response) => response.json())
            .then((response) => this.setState({
                movies: response.results
            }));
    }

    render() {
        return (
            <div className="movies">
                {
                    this.state.movies.map(movie => {
                        return (<Movie key={movie.title} movie={movie} />)
                    })
                }
            </div>
        )
    }
}
export default Movies;