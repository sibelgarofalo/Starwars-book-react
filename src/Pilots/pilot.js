import React from "react";
import './pilots.css';

class Pilot extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pilot">
                {this.props.pilot.name}
                <div className="pilot-details">
                    <label>Birth year</label>
                    <span>{this.props.pilot.birth_year}</span>
                    <label>Eye Color</label>
                    <span>{this.props.pilot.eye_color}</span>
                    <label>Mass</label>
                    <span>{this.props.pilot.mass} LBs</span>
                </div>
                <div className="buttons">
                    <button>Favourite</button>
                </div>


            </div>
        )
    }
}
export default Pilot;