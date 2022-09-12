import React from "react";
import Starship from "./starship";
import './starships.css';

class Starships extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            starships: []
        }
    }

    componentDidUpdate(previousProps) {
        if (previousProps.starships !== this.props.starships) {
            // fetch all starships
            Promise
                .all(this.props.starships.map(url => fetch(url).then(response => response.json())))
                .then(response => this.setState({ starships: response }));
        }
    }

    render() {
        return (
            <div className="starships">
                <h1>Starships</h1>
                {
                    this.state.starships.map(starship => <Starship key={starship.name} starship={starship} loadPilots={this.props.loadPilots} />)
                }
            </div>
        )
    }
}
export default Starships;