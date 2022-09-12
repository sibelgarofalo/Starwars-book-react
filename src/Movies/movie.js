import React from 'react';
import './movies.css';

class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    showHideMovie = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        return (
            <div className="movie">
                {this.props.movie.title}
                <div className={`${this.state.isVisible ? 'movie-description-visible' : 'movie-description-hidden'}`}>
                    <label>Director</label>
                    <span>{this.props.movie.director}</span>
                    <label>Producer</label>
                    <span>{this.props.movie.producer}</span>
                    <label>Description</label>
                    <span>{this.props.movie.opening_crawl}</span>
                </div>
                <div className="buttons">
                    <button onClick={this.showHideMovie}>{this.state.isVisible ? 'Close' : 'Details'}</button>
                    <button>Starships</button>
                </div>
            </div>
        )
    }
}

export default Movie;