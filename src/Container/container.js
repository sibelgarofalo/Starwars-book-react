import React from "react";
import Movies from "../Movies/movies";
import Favorites from "../Favorites/favorites";
import Pilots from "../Pilots/pilots";
import Starships from "../Starships/starships";
import Detail from "../Detail/detail";

import './container.css';

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            starships: [],
            pilots: []
        }
    }

    loadStarships = (_starships) => {
        this.setState({
            starships: _starships
        });
    }

    loadPilots = (_pilots) => {
        this.setState({
            pilots: _pilots
        });
    }

    render() {
        return (
            <div className="container">
                <Movies loadStarships={this.loadStarships} />
                <Starships starships={this.state.starships} loadPilots={this.loadPilots} />
                <Pilots pilots={this.state.pilots} />
                <Favorites />
                <Detail />
            </div>)
    }
}
export default Container;