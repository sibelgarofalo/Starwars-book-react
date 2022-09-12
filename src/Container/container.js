import React from "react";
import Movies from "../Movies/movies";  
import Favorites from  "../Favorites/favorites";
import Pilots from "../Pilots/pilots";
import Starships from "../Starships/starships";
import Detail from "../Detail/detail";

class Container extends React.Component {
    render(){
        return(
        <div>
            <Movies/>
            <Starships/>
            <Pilots/>
            <Favorites/>
            <Detail/>
        </div>)
    }
}
export default Container;