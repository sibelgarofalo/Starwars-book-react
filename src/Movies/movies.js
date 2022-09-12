import React from "react";

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
            <div>
                <ul>
                    {
                        this.state.movies.map(movie => {
                            return (<li key={movie.title}>{movie.title}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Movies;