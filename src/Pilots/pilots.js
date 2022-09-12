import React from "react";
import Pilot from "./pilot";
import './pilots.css';

class Pilots extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pilots: []
        }
    }

    componentDidUpdate(previousProps) {
        if (previousProps.pilots !== this.props.pilots) {
            // fetch all starships
            Promise
                .all(this.props.pilots.map(url => fetch(url).then(response => response.json())))
                .then(response => this.setState({ pilots: response }));
        }
    }

    render() {
        return (
            <div className="pilots">
                {
                    this.state.pilots.map(pilot => <Pilot key={pilot.name} pilot={pilot} />)
                }
            </div>
        )
    }
}
export default Pilots;