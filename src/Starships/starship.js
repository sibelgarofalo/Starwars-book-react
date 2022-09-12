import React from "react";
import './starships.css';

class Starship extends React.Component {

    loadPilots = () => {
        this.props.loadPilots(this.props.starship.pilots)
    }

    render() {
        return (
            <div className="starship">
                {this.props.starship.name}
                <div className="starship-details">
                    <label>Model</label>
                    <span>{this.props.starship.model}</span>
                    <label>Manufacturer</label>
                    <span>{this.props.starship.manufacturer}</span>
                    <label>Passengers</label>
                    <span>{this.props.starship.passengers}</span>
                </div>
                <div className="buttons">
                    <button disabled={this.props.starship.pilots.length < 1} onClick={this.loadPilots}>Pilots</button>
                </div>

            </div>
        )
    }
}
export default Starship;